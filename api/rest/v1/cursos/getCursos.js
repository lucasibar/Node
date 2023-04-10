const { Router } = require('express')

module.exports = Router().get('/rest/v1/cursos', (req,res)=>{
    const{nombre, apellido} = req.body
    res.end(`Cursos ${nombre} ${apellido}` )
})
