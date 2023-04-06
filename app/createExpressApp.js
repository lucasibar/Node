const express = require('express')
const rootRouter =require('./rest/createApiRouter')()

module.export= ()=>express()
.use(rootRouter)
