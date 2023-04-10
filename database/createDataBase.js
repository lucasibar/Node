require("dotenv").config()
const mongoose = require('mongoose')
const glob = require('glob')
require('dotenv').config()
const { url, username, password} = process.env;


module.exports = async ()=>{
  try {
    await mongoose.connect(url);
  } catch (error) { 
    console.log(error);
  }
  
  const db = {}
  return db
}










// mongoose.connection
//   .on('error', error=>{
//     throw error
//   })
//   .once('open', ()=> console.log(`MongoDB conected at ${url}`))