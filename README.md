# 🛒 API de Gerenciamento de Produtos

API REST simples desenvolvida em Node.js e Express para gerenciamento (CRUD) de um catálogo de produtos. Projeto criado para fins didáticos.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express**

---

## 🛠️ Como Executar o Projeto

1. **Clone ou baixe o repositório:**

```bash
git clone https://github.com/Grazziano/api-projeto-integrador-II.git
```

2. **Acesse a pasta do projeto:**

```bash
cd api-projeto-integrador-II

```

3. **Instale as dependências:**

```bash
npm install

```

4. **Inicie o servidor:**

```bash
npm run dev

```

_O servidor estará rodando na porta `3000` (`http://localhost:3000`)._

---

## 📌 Rotas da API

| Método     | Rota            | Descrição                             |
| ---------- | --------------- | ------------------------------------- |
| **GET**    | `/produtos`     | Retorna todos os produtos             |
| **GET**    | `/produtos/:id` | Retorna um produto específico pelo ID |
| **POST**   | `/produtos`     | Cria um novo produto                  |
| **PUT**    | `/produtos/:id` | Atualiza um produto existente         |
| **DELETE** | `/produtos/:id` | Remove um produto pelo ID             |

---

## 📝 Exemplos de Requisição

### 🔹 Criar Produto (`POST /produtos`)

**Body (JSON):**

```json
{
  "produto": "Headset Gamer",
  "preco": 250
}
```

### 🔹 Atualizar Produto (`PUT /produtos/0`)

**Body (JSON):**

```json
{
  "produto": "Teclado Mecânico",
  "preco": 200
}
```

---
