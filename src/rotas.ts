import usuarioController from "./usuarios/usuario.controller";

import { Router } from "express";

const rotas = Router();
rotas.post("/usuarios", usuarioController.adicionar);
rotas.get("/usuarios", usuarioController.listar);

//Ainda vamos ter que criar as rotas para carrinho e produtos
//
export default rotas;