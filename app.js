const express = require('express')
const app = express()
const port = 3000 // = process.env
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expense_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

const Record = require('./model/record')
const User = require('./model/user')

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})