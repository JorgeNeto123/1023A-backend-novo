import { Request, Response } from "express";
import { db } from "../database/banco-mongo.js";
class UsuarioController {
    async adicionar(req: Request, res: Response) {
        const {nome,preco,descricao,urlfoto} = req.body;
        const produtos = {nome,preco,descricao,urlfoto}
        const resposta = await db.collection('produtos').insertOne(produtos);
        res.status(201).json({ ...produtos,_id: resposta.insertedId })
    }
    async listar(req: Request, res: Response) {
        const produtos = await db.collection('produtos').find().toArray()
        res.status(200).json(produtos);
    }
}
export default new UsuarioController();