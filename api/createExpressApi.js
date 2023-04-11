const express = require('express')
const rootRouter = require('./rest/createApiRouter')()
const cors = require('cors') 
const bodyParser = require('body-parser')

module.exports = ({ db })=>express()
.use(cors())
.use(bodyParser.urlencoded({extended:true}))
.use(bodyParser.json())
.options('*', cors())
.use(express.static('./public'))
.use((req, res, next)=>{
    req.db = db
    next()
})
.use(rootRouter)
