const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>Página Inicial</h1><p>Projeto de Cloud - Matheus</p>");
});

app.get("/sobre", (req, res) => {
  res.send("<h1>Sobre</h1><p>Aplicação Node.js com Express.</p>");
});

app.get("/produtos", (req, res) => {
  res.send("<h1>Lista de Produtos</h1><ul><li>Produto A</li><li>Produto B</li></ul>");
});

app.get("/equipe", (req, res) => {
  res.send("<h1>Nossa Equipe</h1><p>Matheus</p>");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});