import { Request, Response } from "express";
import { createAuthUserService, deleteUserService, getAllUsersService, updateAuthUserService, updateUserService } from "../services/user.service.js";


export const getAllUsersController = async(req:Request,res:Response) => {

    try {
        const result = await getAllUsersService()

        return res.status(200).json({
            users:result
        })
        
    } catch (error) {
        res.status(500).json({message:"Failed to get all users"})
    }

}

export const updateUserController = async (req:Request,res:Response) => {
    try {
        
        const id = Number(req.params.id)
        console.log("id",id)

        const updateData = req.body

        console.log("data",updateData)

        const user = await updateUserService(id,updateData)

        console.log("user from service",user)

        return res.status(200).json({
            message: "updated user successfully",
            result: user,
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({message:"update failed"})
    }
}

export const deleteUserController = async(req : Request,res:Response) => {
    try {
        
        const id = Number(req.params.id)

        const user = await deleteUserService(id)

        return res.status(200).json({
            message:"deleted user successfully",
            result : user
        })

    } catch (error) {
        console.error(error)
        res.status(400).json({
            message:"delete failed"
        })
    }
}

export const createAuthUserController = async (req:Request,res:Response) => {
    try {
        
        const {userName,name,email,password} = req.body

        //yoh middleware bata aauxa
        const createdBy = req.user?.userName;

        // console.log("created by",createdBy)

        const user = await createAuthUserService({userName,name,email,createdBy,password})

        return res.status(200).json({
            message:"user created",
            result: user
        })

    } catch (error) {
        res.status(400).json({message:"user creation failed"})
    }
}

export const updateAuthUserController = async (req:Request,res:Response) => {
    try {
        
        const id = Number(req.params.id)
        // console.log("id",id)

        const updateData = req.body

        const updatedBy = req.user?.userName

        // console.log("data",updateData)

        const user = await updateAuthUserService(id,{...updateData,updatedBy})

        // console.log("user from service",user)

        return res.status(200).json({
            message: "updated user successfully",
            result: user,
        })

    } catch (error) {
        console.error(error)
        return res.status(400).json({message:"update failed"})
    }
}