import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cookieParser())


import product from './routes/productRoute.js'
import user from './routes/userRoute.js'
import order from './routes/orderRoute.js'

app.use('/api', product)
app.use('/api', user)
app.use('/api', order)


import errorMiddleware from './middleware/error.js'

app.use(errorMiddleware)


export default app