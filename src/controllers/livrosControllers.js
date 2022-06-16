
import livros from "../models/Livro.js";
import editoraController from "./editoraControllers.js";


class LivroController{

    static listarLivros = (req, res) => {
        livros.find()
            .populate('Autor')
            .populate('Editoria')
            .exec((err,livros) => {
                if (err){
                    console.log('algo deu errado', err)
                }
                res.status(200).json(livros)
        });
    }


    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} -  falha a cadastrar o livro`})
            }else {
                res.status(201).send(livro.toJSON())
            }
        })
    };

    static atualizarLivro = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err){
                res.status(200).send({message:"livro alterado com sucesso "})
            }else {
                res.status(500).send({message: err.message}, console.log('algo deu errado na atualização'))
            }
        })
    }

    static buscaLivroID = (req, res) =>{
        const id = req.params.id
        livros.findById(id)
            .populate("Autor", 'nome')
            .populate("Editoria")
            .exec((err, livros) =>{
                if(!err){
                    res.status(200).send(livros)
                }else {
                res.status(400).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) =>{
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Livro removido com sucesso"})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }

    static async listarLivroPorEditora(req, res) {
        const nomeEditora = req.query.id
        console.log(nomeEditora)
        const editoras = await editoraController.buscaEditoraPorNome(nomeEditora);
        if(!editoras) {
            res.status(404).json({ message: "Editora não encontrada" });
        }else{
            livros.find({'Editoria': editoras})
            .populate('Autor')
            .populate('Editoria')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
        }
    }
}

export default LivroController;