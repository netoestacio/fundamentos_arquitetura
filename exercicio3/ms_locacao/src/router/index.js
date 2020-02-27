const router = require('express').Router()
const locacaoController = require('../controller/controller')

router.get('/', locacaoController.index)
router.get('/allUsers', locacaoController.getAllInfo)
router.get('/allBooks', locacaoController.getAllBooks)
router.post('/', locacaoController.store)
router.put('/', locacaoController.update)
router.delete('/', locacaoController.delete)

module.exports = router