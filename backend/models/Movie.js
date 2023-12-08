const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  cover: String, //URL
  year: Number,
  synopsis: String,
  genre: [String],
  videoFile: String //URL
});

const Movie = mongoose.model('Movie', movieSchema, 'movies');

module.exports = Movie;