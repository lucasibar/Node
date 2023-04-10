const express = require('express')
const rootRouter = require('./rest/createApiRouter')()

module.exports = ({ db })=>express()
.use(express.static('./public'))
.use(rootRouter)
