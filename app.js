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