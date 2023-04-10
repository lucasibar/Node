const { Router } = require('express')

module.exports = Router().get('/rest/v1/alumnos', (req,res)=>{
    // const{nombre, apellido} = req.body
    res.end(`TODOS LOS ALUMNOS` )
})