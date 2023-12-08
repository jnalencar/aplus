const express = require('express');
const router = express.Router();
const Series = require('../models/Series');

//app.get('/series', (req, res) => {
router.get('/', (req, res) => {
    Series.find({})
      .then(series => {
        res.send(series);
      })
      .catch(err => {
        console.error('Erro ao buscar filmes:', err);
        res.status(500).send('Erro ao buscar filmes');
      });
  });

// Define series routes here

module.exports = router;