const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
// `mongodb+srv://Eastward0960:${password}@cluster0.fiwck9o.mongodb.net/?retryWrites=true&w=majority`
`mongodb+srv://Eastward0960:${password}@cluster0.fiwck9o.mongodb.net/noteApp?retryWrites=true&w=majority`

const noteSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')

    const note = new Note({
      content: 'CSS is used for styling',
      date: new Date(),
      important: false,
    })

    return note.save()
  })
  .then(() => {
    console.log('note saved!')
    return mongoose.connection.close()
  })
  .catch((err) => console.log(err))

// mongoose
//   .connect(url)
//   .then((result) => {
//     console.log('connected')
//
//     const note = new Note({
//       content: 'HTML is used for the words on the page',
//       date: new Date(),
//       important: false,
//     })
//
//     return note.save()
//   })
//   .then(() => {
//     console.log('note saved!')
//     return mongoose.connection.close()
//   })
//   .catch((err) => console.log(err))
//
// mongoose
//   .connect(url)
//   .then((result) => {
//     console.log('connected')
//
//     const note = new Note({
//       content: 'JS is used for interactive websites',
//       date: new Date(),
//       important: false,
//     })
//
//     return note.save()
//   })
//   .then(() => {
//     console.log('note saved!')
//     return mongoose.connection.close()
//   })
//   .catch((err) => console.log(err))
// mongoose
//   .connect(url)
//   Note
//     .find({})
//     .then(result => {
//       result.forEach(note => {
//         console.log(note)
//       })
//       mongoose.connection.close()
//     })
//   .catch(error => console.log("logging notes error", error))
