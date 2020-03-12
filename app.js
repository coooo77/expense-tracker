const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const methodOverride = require('method-override')
const port = 3000 // = process.env
const moneyCalculation = require('./moneyCalculation')
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
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
  Record.find()
    .lean()
    .exec((err, records) => {
      const totalAmount = moneyCalculation(records)
      if (err) return console.error(err)
      return res.render('index', { records, totalAmount })
    })
})

app.get('/records', (req, res) => {
  res.send('顯示所有record資料')
})

app.get('/records/new', (req, res) => {
  res.render('new')
})

app.post('/records', (req, res) => {
  const record = new Record(req.body)
  record[req.body.category] = true
  record.save(err => {
    if (err) return console.log(err)
    return res.redirect('/')
  })
})

app.get('/records/:id/edit', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    return res.render('edit', record)
  })
})

app.put('/records/:id/edit', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    record[record.category] = false
    record[req.body.category] = true
    Object.assign(record, req.body)
    record.save(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

app.delete('/records/:id/delete', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})