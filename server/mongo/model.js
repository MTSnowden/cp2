

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String
    },
    director: {
        type: String
    },
    genre: {
        type: String
    },
    year: {
        type: String
    }
});

module.exports = mongoose.model("Movie", movieSchema);
// const { Movies } = require('./schema')

// const MoviesModel = mongoose.model('Movie', Movies)

// module.exports = {
//   MoviesModel
// }