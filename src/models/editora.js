import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        CNPJ: {type: Number}
    },

)

const editora = mongoose.model("editora", editoraSchema);

export default editora; 