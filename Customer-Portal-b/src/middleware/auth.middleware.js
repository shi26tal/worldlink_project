import jwt from "jsonwebtoken"

export const authenticate = (req,res,next)=> {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
        try {
            token = req.headers.authorization.split(" ")[1]
        } catch (error) {
            return res.status(401).json({ message: "Unauthorized" })
        }
    } else {
        return res.status(401).json({ message: "Unauthorized" })
    }

    if(!token){
        return res.status(401).json({message:"Unauthorized"})
    }

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        next()
    } catch (error) {
        return res.status(401).json({ message: "invalid token" })
    }

    next()
}