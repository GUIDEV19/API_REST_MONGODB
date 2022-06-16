
import editora from "../models/editora.js";



class editoraController{

    static listarEditora = (req, res) => {
        editora.find((err,editora) => {
            if (err){
                console.log('algo deu errado', err)
            }
            res.status(200).json(editora)
        });
    }


    static cadastrarEditora = (req, res) => {
        let editoras = new editora(req.body);

        editoras.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} -  falha a cadastrar o Editora`})
            }else {
                res.status(201).send(editoras.toJSON())
            }
        })
    };

    static atualizarEditora = (req, res) => {
        const id = req.params.id
        editora.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if (!err){
                res.status(200).send({message:"Editora alterado com sucesso "})
            }else {
                res.status(500).send({message: err.message}, console.log('algo deu errado na atualização'))
            }
        })
    }

    static buscaEditoraID = (req, res) =>{
        const id = req.params.id
        editora.findById(id, (err, editora) =>{
            if(!err){
                res.status(200).send(editora)
            }else {
                res.status(400).send({message: err.message})
            }
        })
    }

    static async buscaEditoraPorNome(id){
        const buscaNomeEditora = await editora.findById(id);

        return buscaNomeEditora
    }

    static excluirEditora = (req, res) =>{
        const id = req.params.id

        editora.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Editora removido com sucesso"})
            } else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default editoraController;