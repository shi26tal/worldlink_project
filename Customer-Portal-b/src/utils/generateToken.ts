import jwt from "jsonwebtoken";


export const generateToken = (userId : number, userName : string ) => {
  const payload = {
    id: userId,
    userName: userName,
  };
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("Authentication not found");
  }

  const token = jwt.sign(payload,secretKey,{expiresIn:"10m"})

  return token
}
