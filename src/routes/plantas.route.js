import { Router } from 'express'
import { create, findAll, findByNome, update } from '../controllers/plantas.controller.js'
import { validPlanta } from "../middlewares/global.middlewares.js"

const router = Router()

router.post('/', create)
router.get('/', findAll)
router.get('/find', validPlanta, findByNome)
router.patch('/:nomecientifico', validPlanta, update)

export default router