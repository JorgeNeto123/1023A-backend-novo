import usuarioController from "./usuarios/usuario.controller.js";
import produtoController from "./produtos/produto.controller.js";

import { Router } from "express";

const rotas = Router();
rotas.post("/usuarios", usuarioController.adicionar);
rotas.get("/usuarios", usuarioController.listar);

//Ainda vamos ter que criar as rotas para carrinho e produtos


rotas.post("/produtos", produtoController.adicionar);
rotas.get("/produtos", produtoController.listar);
export default rotas;