const { Router } = require('express')
const alumnosSchemas = require('../../../../database/schemas/Alumnos')

module.exports = Router().post('/rest/v1/alumnos', async(req,res)=>{
    const alumno = alumnosSchemas(req.body)
    // alumno.save().then((d)=> res.json(d).catch((err)=> res.json({message: err})))
    const respuesta = await alumno.save() 
     res.json(respuesta)
})