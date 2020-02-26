const LocacaoModel = require('../model/Locacao')

class LocacaoController {

    async index(req, res) {
        const locacao = await LocacaoModel.find(req.query)
        
        if(!locacao){
            return res.send('Data not foud')
        }

        return res.json(locacao)
    }

    async store(req, res) {
        const { dataLocacao, dataEntrega, dataPrazo, id_livro, id_usuario } = req.body

        let locacao = await LocacaoModel.findOne({dataLocacao, dataEntrega, dataPrazo, id_livro, id_usuario})

        if(!locacao) {
            locacao = await LocacaoModel.create({dataLocacao, dataEntrega, dataPrazo, id_livro, id_usuario})
        }

        return res.json(locacao)
    }

    async update(req, res) {
        const locacao = await LocacaoModel.findOneAndUpdate(req.query, req.body, {new:true})
        
        if(!locacao){
            return res.send('data not found')
        }

        return res.json(locacao)
    }

    async delete(req, res) {
        const locacao = LocacaoModel.findOneAndDelete(req.query, req.body)
        return res.json(locacao)
    }

}

module.exports = new LocacaoController()