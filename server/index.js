import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import connectDB from './database/connect.js'
import clientRoutes from  './routers/clients.js'
import salesRoutes from  './routers/sales.js'
import managementRoutes from  './routers/management.js'
import generalRoutes from  './routers/general.js'
import authRoutes from './routers/auth.js'
import Product from './models/Product.js'
import ProductStat from './models/ProductStat.js'
import User from './models/User.js'
import Transaction from './models/Transaction.js'
import OverallStat from './models/OverallStat.js'
import AffiliateStat from "./models/AffiliateStat.js";
import { dataUser,dataProduct,dataProductStat,dataTransaction,dataOverallStat,dataAffiliateStat } from './data/index.js'

const app = express()
app.use(morgan('common'))
app.use(helmet())
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))

dotenv.config({path:".env"})
const PORT = process.env.PORT || 9000

if (!process.env.JWT_SECRET) {
    console.error('JWT_SECRET environment variable is required!')
    process.exit(1)
}

app.get("/",(req,res)=>{
    res.status(200) 
    .json({
        status:200, 
        message:"Ed Roh Admin Dashboard API in Node JS and Express 🤷‍♂️",
        dashboard:"https://admin-frontend-02yo.onrender.com/",
        api_documentation: "https://documenter.getpostman.com/view/21884902/2s935soMqx"
    })
})

app.use("/client",clientRoutes)
app.use("/general",generalRoutes)
app.use("/management",managementRoutes)
app.use("/sales",salesRoutes)
app.use("/auth",authRoutes)

connectDB();

app.listen(PORT,()=>{
    console.log(`server started on http://localhost:${PORT}`)
    //Run this once - check if data exists first
    const initializeData = async () => {
        try {
            const userCount = await User.countDocuments()
            if (userCount === 0) {
                console.log('Initializing database with sample data...')
                await User.insertMany(dataUser)
                await Product.insertMany(dataProduct)
                await ProductStat.insertMany(dataProductStat)
                await Transaction.insertMany(dataTransaction)
                await OverallStat.insertMany(dataOverallStat)
                await AffiliateStat.insertMany(dataAffiliateStat)
                console.log('Database initialized successfully!')
            } else {
                console.log('Database already contains data, skipping initialization.')
            }
        } catch (error) {
            console.log('Database initialization error:', error.message)
        }
    }
    
    initializeData()
})
