const mongoose = require('mongoose')
const Record = require('../record')
const User = require('../user')
const recordList = require('./records')
const userList = require('./users')

mongoose.connect('mongodb://localhost/expense_tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('db error')
})

db.once('open', () => {
  console.log('db connected!')

  const users = []
  for (let i = 0; i < userList.users.length; i++) {
    const newUser = new User(userList.users[i])
    newUser.save()
    users.push(newUser)
  }

  for (let i = 0; i < 5; i++) {
    recordList.records[i].userId = users[0]._id
    Record.create(recordList.records[i])
  }

  // node seeder.js

  console.log('done')
})
