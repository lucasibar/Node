const glob = require('glob')
const { Router } = require('express')

module.export=()=>glob.sync('**/*.js', {cwd: `${__dirname}/` })
    .map(filename => require(`./${filename}`))
    .filter(item=> Object.getPrototypeOf(item) === Router)
    .reduce((rootRouter, router) => rootRouter.use(router), Router())