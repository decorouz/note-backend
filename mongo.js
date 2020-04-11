/* eslint-disable no-shadow */
const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('give password as argument')
  process.exit(1)
}

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Callback-function suck',
  date: new Date(),
  important: true,
})

note.save().then((response) => {
  console.log('note saved!', response.content)
  mongoose.connection.close()
})

Note.find({ important: true }).then((response) => {
  response.forEach((note) => {
    console.log(note)
  })
  mongoose.connection.close()
})
