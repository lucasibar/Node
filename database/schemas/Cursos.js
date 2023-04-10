const mongoose = require('mongoose')

const cursosSchemas = mongoose.Schema({
    nombre: String,
    dificil: Boolean
})
// alumnosSchemas.methods.saludar = function(){
//     return `Hola ${this.nombre} ${this.apellido}`
// }

module.exports = mongoose.model('Cursos', cursosSchemas)