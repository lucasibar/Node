const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos/:id/cursos', (req,res)=>{
    res.end(`CURSOS QUE TOMA EL ALUMNO` )
})
