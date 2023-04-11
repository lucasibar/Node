const { Schema } = require('mongoose')

const usersSchemas = Schema({
    username: String,
    password: String
})
// alumnosSchemas.methods.saludar = function(){
//     return `Hola ${this.nombre} ${this.apellido}`
// }

module.exports = usersSchemas