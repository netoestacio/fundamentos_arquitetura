const LocacaoModel = require('../model/locacao')
const https = require('https')

class LocacaoController {

    async index(req, res) {
        const locacao = await LocacaoModel.find(req.query)
        
        if(!locacao){
            return res.send('Data not foud')
        }

        return res.json(locacao)
    }

    async getAllInfo(req, res){

        const options = {
            hostname: 'localhost',
            port: 1000,
            path: '/usuario',
            method: 'GET'
          }
        

        req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', d => {
              process.stdout.write(d)
              return res.json(d)
            })
          })
          
          req.on('error', error => {
            console.error(error)
          })
          
          req.end()
    }

    async getAllBooks(req, res) {

        const options = {
            hostname: 'localhost',
            port: 2000,
            path: '/livros',
            method: 'GET'
          }

          req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)
          
            res.on('data', d => {
              process.stdout.write(d)
              return res.json(d)
            })
          })
          
          req.on('error', error => {
           return res.send('Error')
          })
          
          req.end()

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