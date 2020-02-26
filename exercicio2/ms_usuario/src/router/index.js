const router = require('express').Router()
const UsuarioController = require('../controller/controller')

router.get('/usuario', UsuarioController.index)
router.post('/usuario', UsuarioController.store)
router.put('/usuario', UsuarioController.update)
router.delete('/usuario', UsuarioController.delete)

module.exports = router