const mongoose = require('mongoose')

const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    genero: String
})

module.exports = new mongoose.model('Livro', LivroSchema)