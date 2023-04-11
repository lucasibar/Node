const { Router } = require('express')

module.exports = Router().post('/rest/v1/users/:username/login', async(req,res)=>{
    const { username } = req.params
    const {password } = req.body
    const { Users } = req.db
    const user = new Users({ username, password })
    const result = await user.save()
    //tambien se puede poner
    //await User.create({username,password})
     res.end(`${result}`) 
})