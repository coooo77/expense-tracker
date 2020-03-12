const express = require('express')
const router = express.Router()
const Record = require('../model/record')
const User = require('../model/user')
const moneyCalculation = require('../moneyCalculation')

router.get('/', (req, res) => {
  const type = req.query.type || null
  Record.find({
    [type]: type ? true : null
  })
    .lean()
    .exec((err, records) => {
      const totalAmount = moneyCalculation(records)
      if (err) return console.error(err)
      return res.render('index', { records, totalAmount })
    })
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.post('/', (req, res) => {
  const record = new Record(req.body)
  record[req.body.category] = true
  record.save(err => {
    if (err) return console.log(err)
    return res.redirect('/')
  })
})

router.get('/:id/edit', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    return res.render('edit', record)
  })
})

router.put('/:id/edit', (req, res) => {
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

router.delete('/:id/delete', (req, res) => {
  Record.findById(req.params.id, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router