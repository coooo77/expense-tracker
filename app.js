const express = require('express')
const exphbs = require('express-handlebars')
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

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  Record.find()
    .lean()
    .exec((err, records) => {
      console.log(records)
      if (err) return console.error(err)
      return res.render('index', { records })
    })
})

app.get('/records', (req, res) => {
  res.send('顯示所有record資料')
})

app.get('/records/new', (req, res) => {
  res.send('新增record頁面')
})

app.post('/records', (req, res) => {
  res.send('新增record')
})

app.get('/records/:id/edit', (req, res) => {
  res.send('修改record頁面')
})

app.post('/records/:id/edit', (req, res) => {
  res.send('修改record')
})

app.post('/records/:id/delete', (req, res) => {
  res.send('刪除record')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})