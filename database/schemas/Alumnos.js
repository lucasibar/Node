const mongoose = require('mongoose')

const alumnosSchemas = mongoose.Schema({
    nombre: String,
    apellido: String,
    presente: Boolean
})
// alumnosSchemas.methods.saludar = function(){
//     return `Hola ${this.nombre} ${this.apellido}`
// }

module.exports = mongoose.model('Alumno', alumnosSchemas)