/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const express = require('express')

const app = express()
require('dotenv').config()
const cors = require('cors')
const Note = require('./models/note')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
  Note.find({}).then((notes) => {
    res.json(notes.map((note) => note.toJSON()))
  })
})

app.get('/api/notes/:id', (req, res, next) => {
  Note.findById(req.params.id)
    .then((note) => {
      if (note) {
        res.json(note.toJSON())
      } else {
        res.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.delete('/api/notes/:id', (req, res, next) => {
  Note.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end()
    })
    .catch((error) => next(error))
})

// const generateId = () => {
//   const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;

//   return maxId + 1;
// };
app.put('/api/notes/:id', (req, res, next) => {
  const { body } = req

  const note = {
    content: body.content,
    important: body.important,
  }

  Note.findByIdAndUpdate(req.params.id, note, { new: true })
    .then((updatedNote) => {
      res.json(updatedNote.toJSON())
    })
    .catch((error) => next(error))
})

app.post('/api/notes', (req, res, next) => {
  const { body } = req

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  })

  note
    .save()
    .then((savedNote) => savedNote.toJSON())
    .then((savedandFormattedNote) => {
      res.json(savedandFormattedNote)
    })
    .catch((error) => next(error))
})

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: 'unknown endpoint' })
}
app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError' || error.kind === 'ObjectId') {
    return res.status(400).send({ error: 'malfunctioned id' })
  }
  if (error.name === 'ValidationError') {
    return res.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

// eslint-disable-next-line no-undef
const { PORT } = process.env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
