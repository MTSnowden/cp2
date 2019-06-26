const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Moviess = new Schema({
  title: String,
  director: String,
  genre: String,
  starring: String,
  year: Number,
})

module.exports = { Movies }