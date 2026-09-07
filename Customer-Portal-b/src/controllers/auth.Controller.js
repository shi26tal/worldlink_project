import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req,res)=> {
    try {

        // user enters email and password in the login form, we will get those values from req.body
        const {email,password} = req.body


        // check if email and password are provided, if not return 400 bad request
        if(!email || !password){
            return res.status(400).json({message: "Please provide email and password"})
        }

        // check if user exists in the database, if not return 400 bad request
        const user = await User.findOne({where : {email}})

        if(!user){
            return res.status(400).json({message: "User not found"})
        }

        // compare the password provided by the user with the hashed password stored in the database
        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message: "Invalid password"})
        }

        const payload = {
            id: user.id,
            email: user.email
        }

        const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn: "1h"})

        res.status(200).json({token})


        
    } catch (error) {

        return res.status(500).json({message: "Server error", error: error.message})
        
    }
}