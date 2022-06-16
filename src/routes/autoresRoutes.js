import express from "express";
import autorescontroller from "../controllers/autorescontrollers.js";

const router = express.Router();

router.get('/autores', autorescontroller.listarAutor)
    .get('/autores/:id', autorescontroller.buscaAutorID)
    .post('/autores', autorescontroller.cadastrarAutor)
    .put('/autores/:id', autorescontroller.atualizarAutor)
    .delete('/autores/:id', autorescontroller.excluirAutor)

export default router;