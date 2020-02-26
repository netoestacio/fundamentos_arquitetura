const router = require('express').Router()
const locacaoController = require('../controller/LocacaoController')

router.get('/', locacaoController.index)
router.post('/', locacaoController.store)
router.put('/', locacaoController.update)
router.delete('/', locacaoController.delete)

module.exports = router