const { Router } = require('express')

module.export = Router().get('/cursos', (req,res)=>{
    res.end('Cursos')
})
