const { Schema } = require('mongoose')

const cursosSchemas = Schema({
    name: String,
    yearOfCourse: Number
})
// alumnosSchemas.methods.saludar = function(){
//     return `Hola ${this.nombre} ${this.apellido}`
// }

module.exports = cursosSchemas