const mongoose = require('mongoose')

const LocacaoSchema = new mongoose.Schema({
    dataLocacao: String,
    dataEntrega: String,
    dataPrazo: String,
    id__livro: Number,
    id_usuario: Number
})

module.exports = mongoose.model('Locacao', LocacaoSchema)