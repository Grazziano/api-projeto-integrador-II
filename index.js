const express = require('express');

const server = express();

server.get('/produtos', (req, res) => {
  return res.send('Hello World!');
});

server.listen(3000, () => {
  console.log('Servidor Rodando na porta 3000');
});
