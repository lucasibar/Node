const mongoose = require('mongoose')
const glob = require('glob')
const {
  URL,
  username,
  password
} = process.env;

const url = 'mongodb://localhost:27017'
module.exports = async ()=>{
  console.log(`paso por aca?`)
  await mongoose.connect('mongodb+srv://BDprueba1:contraseñaMONGO@educacionit.jo0emxk.mongodb.net/test',{
    user: 'BDprueba1',
    pass: 'contraseñaMONGO'
  })

  const db = {}

  mongoose.connection
    .on('error', error=>{
      throw error
    })
    .once('open', ()=> console.log(`MongoDB conected at ${url}`))
   return db
}