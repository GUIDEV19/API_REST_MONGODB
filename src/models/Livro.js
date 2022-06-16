import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        Autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        Editoria: {type: mongoose.Schema.Types.ObjectId, ref: 'editora', required: true},
        Paginas: {type: Number}

    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;