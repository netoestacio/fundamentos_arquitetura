const LivroModel = require('../model/Livro')

class LivroController {

    async index(req, res) {
        const livro = await LivroModel.find(req.query)
        if(!livro){
            return res.send('Livros not found')
        }else{
            return res.json(livro)
        }
    }

    async store(req, res) {
        const { titulo, autor, genero } = req.body

        const livro = await LivroModel.findOne({titulo, autor, genero})

        if(!livro){
            livro = await LivroModel.create({titulo, autor, genero})
        }

        return res.json(livro)

    }

    async update(req, res) {
        const livro = await LivroModel.findOneAndUpdate(req.query, req.body, {new:true})
        return res.json(livro)
    }

    async delete(req, res) {
        const livro = await LivroModel.findOneAndDelete(req.query, req.body)
        return res.json(livro)
    }

    async buscarLivro(req, res){
        const livro = await LivroModel.findOne(req.query, req.body)
        if(!livro){
            return res.send('Book not found')
        }else{
            return res.json(livro)
        }
    }

}

module.exports = new LivroController()