import jwt from "jsonwebtoken"

export const authenticate = (req,res,next)=> {
    const token = req.headers.authorization.split(" ")[1];

    // if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    //     try {
            
    //     } catch (error) {
    //         return res.status(401).json({ message: "Unauthorized token" })
    //     }
    // } else {
    //     return res.status(401).json({ message: "token not found" })
    // }

    if(!token){
        return res.status(401).json({message:"token not found"})
    }

    try {
        jwt.verify(token,process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ message: "invalid token" })
    }
}