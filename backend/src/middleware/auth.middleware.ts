import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type JWTPayload = {
    id:number,
    userName:string,
    iss?:string,
}

export const authenticate = (
  req: Request,
  res: Response,
  next:NextFunction,
) => {

    const authorization = req.headers.authorization

    if(!authorization){
        throw new Error("no authorization")
    }

  const token = authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  try {
    const secretKey = process.env.JWT_SECRET
    if(!secretKey){
        throw new Error("secret key not found")
    }
    // is this token valid ? Yes - allow req
    const payload = jwt.verify(token, secretKey) as JWTPayload

    // console.log("PAYLOAD:", payload);
    
    req.headers["x-auth-user"] = payload.userName

    next();
  } catch (error) {
    return res.status(401).json({ message: "invalid token" });
  }
};
