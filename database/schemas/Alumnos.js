const { Schema } = require('mongoose')

const alumnosSchemas = Schema({
    nombre: String,
    apellido: String,
    presente: Boolean,
    fecha: Date
})

alumnosSchemas.methods.saludar = function(){
    return `Hola ${this.nombre} ${this.apellido}`
}

module.exports = alumnosSchemas