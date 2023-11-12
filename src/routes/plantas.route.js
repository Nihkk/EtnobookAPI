import { Router } from 'express'
import { create, findAll, findByNome, update } from '../controllers/plantas.controller.js'
import { validPlanta } from "../middlewares/global.middlewares.js"
import { authMiddleware } from '../middlewares/auth.middleware.js'

const router = Router()

router.post('/', authMiddleware, create)
router.get('/', findAll)
router.get('/:nomecientifico', validPlanta, findByNome)
router.patch('/:nomecientifico', validPlanta, update)

export default router