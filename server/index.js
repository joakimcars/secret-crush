import express from 'express'
import path from 'path'
import config from './config'
import server from './server'

const www = path.resolve(__dirname, '../www')
server.use('/', express.static(www))
server.use('/*', (req, res) => {
  res.sendFile(path.join(www, 'index.html'))
})

server.listen(config.server.port, () => console.log(`Listening on ${config.server.port}`))
