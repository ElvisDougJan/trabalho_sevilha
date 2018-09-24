import * as express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.json('API com POO, Estruturada e Funcional')
})

export default router