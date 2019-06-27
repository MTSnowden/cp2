// const MoviesModel = require("../mongo/model.js");
const MoviesModel = require("../mongo/model");

module.exports.list = (req, res) => {
  MoviesModel.find({}).exec().then(movies => { 
      return res.json(movies)
    });
};
module.exports.show = function show(req, res) {
  return MoviesModel.findById(req.params.id).exec().then(movie => res.json(movie)); 
};
module.exports.create = function create(req, res) {
  const newMovie = new MoviesModel(req.body);
  newMovie.save().then(savedMovie => res.json(savedMovie));
};

module.exports.remove = function remove(req, res) {
  return MoviesModel.findByIdAndRemove(req.params.id).exec().then(movie => res.json(movie)); 
}