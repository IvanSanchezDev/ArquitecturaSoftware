import express from 'express'
import { app as routes } from './routes/beer.js'

const app = express()

app.use(express.json())
app.use('/api', routes)


const port = 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})