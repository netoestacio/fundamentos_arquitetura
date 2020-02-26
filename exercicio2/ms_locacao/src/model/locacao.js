const mongoose = require('mongoose')

const LocacaoSchema = new mongoose.Schema({
    dataLocacao: String,
    dataEntrega: String,
    dataPrazo: String,
    id__livro: String,
    id_usuario: String
})

module.exports = mongoose.model('locacao', LocacaoSchema)