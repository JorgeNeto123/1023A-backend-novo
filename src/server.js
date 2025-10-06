import express from "express";
import rotas from "./rotas.js";

const app = express();

// Middleware para JSON
app.use(express.json());

// Usa as rotas definidas
app.use(rotas);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
