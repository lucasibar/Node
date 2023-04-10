const express = require('express')
const rootRouter = require('./rest/createApiRouter')()

module.exports = ()=>express()
.use(rootRouter)
.use(express.static('./public'))
