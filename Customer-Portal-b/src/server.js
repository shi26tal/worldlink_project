import { sequelize } from "./config/database.js"
import { User } from "./models/user.model.js"
import { config } from "dotenv"
import express from 'express'
import authRoutes from "./routes/auth.route.js"
import { authenticate } from "./middleware/auth.middleware.js"

config()

const app = express()

app.use(express.json())

app.use("/auth", authRoutes)

app.get("/api/profile", authenticate, (req, res) => {
  res.status(200).json({ message: "you are authenticated", user: req.user });
});

const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log(`server is running in ${PORT}`)
})




const startServer = async()=> {
    try {
        await sequelize.authenticate()

        console.log('db connected')
        
    } catch (error) {
        console.error('db connection error:', error)
    }
}

startServer()