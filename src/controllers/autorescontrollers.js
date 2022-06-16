
import autores from "../models/autor.js";



class autorescontroller{

    static listarAutor = (req, res) => {
        autores.find((err,autores) => {
            if (err){
                console.log('algo deu errado', err)
            }
            res.status(200).json(autores)
        });
    }


    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} -  falha a cadastrar o Autor`})
            }else {
                res.status(201).send(autor.toJSON())
            }
        })
    };

    static atualizarAutor = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err){
                res.status(200).send({message:"Autor alterado com sucesso "})
            }else {
                res.status(500).send({message: err.message}, console.log('algo deu errado na atualização'))
            }
        })
    }

    static buscaAutorID = (req, res) =>{
        const id = req.params.id
        autores.findById(id, (err, autores) =>{
            if(!err){
                res.status(200).send(autores)
            }else {
                res.status(400).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) =>{
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Autor removido com sucesso"})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default autorescontroller;