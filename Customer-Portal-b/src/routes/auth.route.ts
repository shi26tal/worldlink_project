import Router from "express"
import {  login, register } from "../controllers/auth.Controller.js"
import { authenticate } from "../middleware/auth.middleware.js"

const router = Router()

router.post("/register",register)
router.post("/login",login)

// router.get('/profile',authenticate,profile)
// router.post('/plan',authenticate,addUsersPlan)

export default router