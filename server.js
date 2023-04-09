const http = require('http')

const db = require('./database/createDataBase')
const app =require('./app/createExpressApp')({ db })

const server = http.createServer(app)

server.listen(8080, ()=>console.log('server ready'))