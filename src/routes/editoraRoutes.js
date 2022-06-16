import express from "express";
import editoraController from "../controllers/editoraControllers.js";

const router = express.Router();

router.get('/editora', editoraController.listarEditora)
    .get('/editora/:id', editoraController.buscaEditoraID)
    .post('/editora', editoraController.cadastrarEditora)
    .put('/editora/:id', editoraController.atualizarEditora)
    .delete('/editora/:id', editoraController.excluirEditora)

export default router;