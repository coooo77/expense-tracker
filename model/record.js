const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  home: {
    type: Boolean,
    default: false
  },
  transport: {
    type: Boolean,
    default: false
  },
  entertain: {
    type: Boolean,
    default: false
  },
  food: {
    type: Boolean,
    default: false
  },
  other: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model('Record', recordSchema)