const config = require('./util/config')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
const noteRouter = require('./controllers/notes')
const middleware = require('./util/middleware')
const logger = require('./util/logger')

mongoose.set('useFindAndModify', false)

logger.info('connecting to', config.MONGODB_URI)

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/notes', noteRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
