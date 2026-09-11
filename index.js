const express = require('express');

const server = express();
server.use(express.json());
const PORT = 3000;

server.get('/produtos', (req, res) => {
  return res.send('Hello World!');
});

server.get('/produtos/:id', (req, res) => {
  const id = req.params.id;
  return res.send(`O tem id = ${id}`);
});

server.post('/produtos', (req, res) => {
  return res.send('Produto cadastrado com sucesso!');
});

server.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
