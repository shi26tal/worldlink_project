import { sequelize } from "./config/database.js"
import { config } from "dotenv"
import express from 'express'
import authRoutes from "./routes/auth.route.js"
import { authenticate } from "./middleware/auth.middleware.js"
import {User , Plan} from "./models/index.js"

config()

const app = express()

app.use(express.json())

app.use("/auth", authRoutes)

// app.get("/auth/profile", authenticate, (req, res) => {
//   res.status(200).json({ message: "you are authenticated"});
// });


// ts lai thaha hunna so aafai ley diney
const PORT = process.env.PORT || 3000

app.listen(PORT,()=> {
    console.log(`server is running in ${PORT}`)
})

const startServer = async()=> {
    try {
        await sequelize.authenticate()

        console.log('db connected')

        await sequelize.sync({alter:true})

        console.log('created table')
        
    } catch (error) {
        console.error('db connection error:', error)
    }
}

startServer()