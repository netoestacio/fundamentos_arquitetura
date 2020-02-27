const moongoose = require('mongoose')

const UserSchema = new moongoose.Schema({
    nome: String,
    email: String,
    telefone: String
})

module.exports = moongoose.model('Usuario', UserSchema)