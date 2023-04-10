const http = require('http')

const db = require('./database/createDataBase')
const api =require('./api/createExpressApp')({ db })

const server = http.createServer(api)

server.listen(8080, ()=>console.log('server ready'))