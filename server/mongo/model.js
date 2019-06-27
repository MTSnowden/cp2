
const mongoose = require('mongoose')
const { Movies } = require('./schema')

const MoviesModel = mongoose.model('Movies', Movies)

module.exports = {
  MoviesModel
}