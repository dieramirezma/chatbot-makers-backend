import { Router } from 'express'
import { handleMessage } from '../controllers/chat.js'

const router = Router()

// Routes
router.post('/message',  handleMessage)

export default router