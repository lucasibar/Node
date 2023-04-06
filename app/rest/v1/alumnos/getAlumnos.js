const { Router } = require('express')

module.export = Router().get('/alumnos', (req,res)=>{
    res.end('ALUMNOS')
})
