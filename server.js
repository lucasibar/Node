const http = require('http')
const createExpressApi = require('./api/createExpressApi')
require('dotenv').config()
const { port } = process.env;
const PORT = port
require('./database/createDataBase')()
    .then(db=>{
        const api =createExpressApi({ db })
        const server = http.createServer(api)
        server.listen(port, ()=>console.log(`server ready and listening on port ${port}`))
    })

