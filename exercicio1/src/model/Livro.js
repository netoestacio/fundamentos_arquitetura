const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    genero: String
})

module.exports = mongoose.model('Livro', LivroSchema)