const router = require('express').Router()
const livroController = require('../controller/LivroController')

router.get('/livros', livroController.index)
router.post('/livros', livroController.store)
router.put('/livros', livroController.update)
router.delete('/livros', livroController.delete)

module.exports = router