const express = require('express');

const server = express();
server.use(express.json());
const PORT = 3000;

let = produtos = [
  { id: 0, produto: 'Teclado', preco: 120 },
  { id: 1, produto: 'Mouse', preco: 100 },
  { id: 2, produto: 'Mouse Gamer', preco: 160 },
];

server.get('/produtos', (req, res) => {
  return res.status(200).json(produtos);
});

server.get('/produtos/:id', (req, res) => {
  const id = req.params.id;

  const produto = produtos.find((p) => p.id == id);

  if (!produto) {
    return res.status(404).json({ message: 'Produto não encontrado!' });
  }

  return res.status(200).json(produto);
});

server.post('/produtos', (req, res) => {
  const { produto, preco } = req.body;

  if (!produto || !preco) {
    return res
      .status(400)
      .json({ message: 'Produto e preco são obrigatórios!' });
  }

  const novoProduto = {
    id: produtos.length + 1,
    produto,
    preco,
  };

  produtos.push(novoProduto);

  return res.status(201).json(novoProduto);
});

server.put('/produtos/:id', (req, res) => {
  const id = req.params.id;
  const { produto, preco } = req.body;

  const produtoIndex = produtos.findIndex((p) => p.id == id);

  if (produtoIndex === -1) {
    return res.status(404).json({ message: 'Produto não existe!' });
  }

  if (!produto || !preco) {
    return res
      .status(400)
      .json({ message: 'Produto e preco são obrigatórios' });
  }

  produtos[produtoIndex] = {
    id: parseInt(id),
    produto,
    preco,
  };

  return res.status(200).json({
    message: 'Produto atualizado com sucesso!',
    produto: produtos[produtoIndex],
  });
});

server.delete('/produtos/:id', (req, res) => {
  const id = req.params.id;

  const produtoIndex = produtos.findIndex((p) => p.id == id);

  if (produtoIndex === -1) {
    return res.status(404).json({ message: 'Produto não existe!' });
  }

  produtos.splice(produtoIndex, 1);

  return res.status(200).json({ message: 'Produto deletado com sucesso!' });
});

server.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
