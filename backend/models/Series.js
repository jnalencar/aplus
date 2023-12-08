const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    title: String,
    cover: String, //URL
    year: Number,
    synopsis: String,
    genre: [String],
    seasons: Number,
    episodes: Number,
    videoFile: [String] //URL
});
  
const Series = mongoose.model('Series', seriesSchema, 'series');

module.exports = Series;