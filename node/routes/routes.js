import express from 'express'
import { getAllCoder , getCoder, createCoder, updateCoder, deleteCoder} from '../controllers/CoderController.js'
const router = express.Router()

router.get('/', getAllCoder )
router.get('/:id', getCoder)
router.post('/', createCoder)
router.put('/:id', updateCoder)
router.delete('/:id', deleteCoder)

export default router
