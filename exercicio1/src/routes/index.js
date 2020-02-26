const router = require('express').Router()
const userRoutes =  require('../routes/usuarioRouter')
const livrosRoutes = require('../routes/livrosRouter')
const locacaoRoutes = require('../routes/locacaoRouter')

router.use(userRoutes)
router.use(livrosRoutes)
router.use(locacaoRoutes)

module.exports = router