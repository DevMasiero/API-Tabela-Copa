import { Router } from 'express'
import SelecaoController from './controllers/SelecaoController.js'


const router = Router()

// ROTAS
router.get('/selecoes', SelecaoController.index)
router.get('/selecoes/:id', SelecaoController.show)
router.post('/selecoes', SelecaoController.store)
router.put('/selecoes/:id', SelecaoController.update)
router.delete('/selecoes/:id', SelecaoController.delete)

export default router