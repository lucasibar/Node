require("dotenv").config()
const mongoose = require('mongoose')
const glob = require('glob')
const path =require('path')
require('dotenv').config()
const { url, user, password } = process.env;

module.exports = ()=> new Promise((resolve, reject)=> {

  mongoose.connect(url,{
    user,
    pass: password
  });
  
  const db = glob.sync('./schemas/**/*.js', {cwd: __dirname})
  .map(filename=>({
    name: path.basename(filename).replace(path.extname(filename), ''),
    schema: require("./" + filename)
  }))
  .filter(({name, schema})=> mongoose.model(name, schema))
  .map(({name, schema}) => mongoose.model(name, schema))
  .reduce((db, model)=>({
    ...db,
    [model.modelName]: model
  }), {})
  
  mongoose.connection
    .on('error', error => reject(error))
    .once('open', ()=> resolve(db))
})










