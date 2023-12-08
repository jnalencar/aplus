const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/', (req, res) => {
  Movie.find({})
    .then(movies => {
      res.send(movies);
    })
    .catch(err => {
      console.error('Erro ao buscar filmes:', err);
      res.status(500).send('Erro ao buscar filmes');
    });
});

// Define other movie routes here

module.exports = router;