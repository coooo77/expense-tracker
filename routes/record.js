const express = require('express')
const router = express.Router()
const Record = require('../models/record')
const moneyCalculation = require('../moneyCalculation')
const { authenticated } = require('../config/auth')

// 得到所有records或篩選出特定種類records
router.get('/', authenticated, (req, res) => {
  const type = req.query.type || null
  Record.find({
    userId: req.user._id,
    [type]: type ? true : null
  })
    .lean()
    .exec((err, records) => {
      const totalAmount = moneyCalculation(records)
      if (err) return console.error(err)
      return res.render('index', { records, totalAmount })
    })
})

// 新增records頁面
router.get('/new', authenticated, (req, res) => {
  res.render('new')
})

// 新增records
router.post('/', authenticated, (req, res) => {
  const data = req.body
  data.userId = req.user._id
  const record = new Record(data)
  record[req.body.category] = true
  record.save(err => {
    if (err) return console.log(err)
    return res.redirect('/')
  })
})

// 編輯records頁面
router.get('/:id/edit', authenticated, (req, res) => {
  Record.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }, (err, record) => {
    if (err) return console.error(err)
    return res.render('edit', record)
  })
})

// 編輯records
router.put('/:id/edit', authenticated, (req, res) => {
  Record.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }, (err, record) => {
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

// 刪除records
router.delete('/:id/delete', authenticated, (req, res) => {
  Record.findOne({
    _id: req.params.id,
    userId: req.user._id,
  }, (err, record) => {
    if (err) return console.error(err)
    record.remove(err => {
      if (err) return console.error(err)
      return res.redirect('/')
    })
  })
})

module.exports = router