const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://deco_fullstack:${password}@cluster0-1je7l.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean
});

const Note = mongoose.model('Note', noteSchema);

const content = process.argv[3];

const note = new Note({
  content: `${content}`,
  date: new Date(),
  important: true
});

/*
Fetching Objects from the database
*/
if (process.argv.length > 3) {
  note.save().then(response => {
    console.log('note saved!', response.content);
    mongoose.connection.close();
  });
  return;
}

Note.find({ important: true }).then(response => {
  response.forEach(note => {
    console.log(note);
  });
  mongoose.connection.close();
});
