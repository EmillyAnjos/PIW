import express from 'express'
import userRoutes from './routes/userRoutes'
import authRoutes from "./routes/authRoutes"
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import { AppDataSource } from './DataSource'

async function startServer() {
    try {
        await AppDataSource.initialize()

    const app = express()
    const port = 3000

        app.use(express.json())
        app.use('/', authRoutes) 
        app.use('/users', userRoutes)
        app.use('/product', productRoutes)
        app.use('/cart', cartRoutes)

        app.listen(port, () => {
            console.log(`'Servidor escutando a porta ${port} em http://localhost:${port}`)
})
    } catch(e){
        throw e
    }


}

startServer()