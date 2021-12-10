const express = require('express')
const router = require('./recipes/recipes-router')

const server = express()

server.use(express.json())
server.use('/api/recipes', router)

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = server