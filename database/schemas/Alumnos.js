const { Schema} = require('mongoose')
//const Cursos = require('./Cursos')
const {ObjectId} = Schema.Types

const alumnosSchemas = Schema({
    nombre: String,
    apellido: String,
    presente: Boolean,
    //cursos: [Cursos]    forma desnormalizada
    cursos: {
        type: ObjectId,
        ref:'Curso'
    }
    //normalizada >50% prob de un update
    //desnormalizada >10% de hacer un update
})
alumnosSchemas.methods.saludar = function(){
    return `Hola ${this.nombre} ${this.apellido}`
}

module.exports =  alumnosSchemas
// module.exports = mongoose.model('Alumno', alumnosSchemas)