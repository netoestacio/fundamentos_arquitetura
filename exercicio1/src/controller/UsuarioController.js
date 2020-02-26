const UsuarioModel = require('../model/Usuario')

class UsuarioController {
    
    async index(req, res) {
        const usuario = await UsuarioModel.find(req.query)
        if(!usuario){
            return res.send('User not Found')
        }else{
            return res.json(usuario)
        }
    }

    async store(req, res) {
        const { nome, email, telefone } = req.body

        let usuario = await UsuarioModel.findOne({nome, email, telefone })

        if(!usuario) {
            usuario = await UsuarioModel.create({nome, email, telefone})
        }

        return res.json(usuario)

    }

    async update() {
        const usuario = await UsuarioModel.findOneAndUpdate(req.query, req.body, {new: true})
        return res.json(usuario)
    }

    async delete() {
        const usuario = await UsuarioModel.deleteOne(req.query, req.body)
        return res.json(usuario)
    }

    async findOne() {
        const usuario = await UsuarioModel.findOne(req.query, req.body)
        if(!usuario){
            return res.send('User not Found')
        }else{
            return res.json(usuario)
        }
        
    }

}

module.exports = new UsuarioController();