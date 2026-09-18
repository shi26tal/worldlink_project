import { Router } from "express";
import { authenticate } from "../middleware/auth.middleware.js";
import { createAuthUserController, deleteUserController, getAllUsersController, updateAuthUserController, updateUserController } from "../controllers/user.Controller.js";


const userRoutes = Router()

userRoutes.get("/users",authenticate,getAllUsersController)
userRoutes.put("/updateUser/:id",authenticate,updateUserController)
userRoutes.delete("/delete/:id",authenticate,deleteUserController)

userRoutes.post("/",authenticate,createAuthUserController)
userRoutes.put("/edit/:id",authenticate,updateAuthUserController)

export default userRoutes