import { Router } from 'express'
import { metrics, sales } from '../controllers/dashboard.js'

const router = Router()

// Routes
router.get('/sales',  sales)
router.get('/metrics',  metrics)

export default router