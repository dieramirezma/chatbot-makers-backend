import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ChatRouter from './routes/chat.js'
import DashboardRouter from './routes/dashboard.js'

dotenv.config()

const PORT = process.env.PORT_BACK || 3900

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type, Authorization',
  optionsSuccessStatus: 200,
  credentials: true
}))

app.use('/api/v1/chat', ChatRouter)
app.use('/api/v1/dashboard', DashboardRouter)

app.get('/api/v1', (req, res) => {
    res.send('<h1>Hi, Markers Tech🚀 ✋</h1>')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
