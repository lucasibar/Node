const { Router } = require('express')

module.exports = Router().get('/rest/v1/users', async(req,res)=>{
    const { Users } = req.db
    const users = await Users.find()
     res.end(`${users}`) 
})