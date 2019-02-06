const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const winnersRouter = require('./controllers/winners')
const counterRouter = require('./controllers/counter')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

mongoose.connect('mongodb://Masavain:Nappipeli123@ds223605.mlab.com:23605/nappipeli')

// mongoose.connect(config.mongoUrl)
mongoose.Promise = global.Promise

app.use(cors())
app.use(bodyParser.json())
app.use(express.static('build'))
app.use(middleware.logger)
app.use('/api/winners', winnersRouter)
app.use('/api/counters', counterRouter)

app.use(middleware.error)

const server = http.createServer(app)
server.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})

server.on('close', () => {
  mongoose.connection.close()
})

module.exports = {
  app, server
}