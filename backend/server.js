const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const mongoose = require('mongoose');
const routes = require('./routes'); // Importa as rotas

app.use('/database/movies', express.static(path.join(__dirname, 'database/movies')));

app.use('/database/series/t1', express.static(path.join(__dirname, 'database/series/t1')));
app.use('/database/series/t2', express.static(path.join(__dirname, 'database/series/t2')));
app.use('/database/series/t3', express.static(path.join(__dirname, 'database/series/t3')));
app.use('/database/series/t4', express.static(path.join(__dirname, 'database/series/t4')));
app.use('/database/series/t5', express.static(path.join(__dirname, 'database/series/t5')));

app.use('/', routes); // Usa as rotas importadas

app.get('/', (req, res) => {
  res.send('Servidor funcionando corretamente!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/aplus')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));