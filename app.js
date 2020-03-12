const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const methodOverride = require('method-override')
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

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use('/', require('./routes/home'))
app.use('/records', require('./routes/record'))

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})