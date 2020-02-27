const LocacaoModel = require('../model/locacao')
const axios = require('axios')

class LocacaoController {

    async index(req, res) {
        const locacao = await LocacaoModel.find(req.query)
        
        if(!locacao){
            return res.send('Data not foud')
        }

        return res.json(locacao)
    }

    async getAllInfo(req, res){

      const dataReq = await axios.get('https://localhost:2000/usuario')
        .then(function(response){
          console.log(response.data); // ex.: { user: 'Your User'}
          return response.data
        });

        if(!dataReq) {
            res.send('Erro to execute Http Request')
        }

        return res.json(dataReq)

    }

    async getAllBooks(req, res) {
        await axios.get('localhost:2000/livros')
          .then(function(response){
            console.log(response.data); // ex.: { user: 'Your User'}
            return res.json(response.data)
          });
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