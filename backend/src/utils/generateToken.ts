import jwt from "jsonwebtoken";


export const generateAccessToken = (userId : number, userName : string ) => {
  const payload = {
    id: userId,
    userName: userName,
    iss: userName
  };
  const secretKey = process.env.JWT_SECRET;

  if (!secretKey) {
    throw new Error("Authentication not found");
  }

  const accessToken = jwt.sign(payload,secretKey,{expiresIn:"10m"})
  

  return {accessToken}
}

// export const generateRefreshToken = (userId : number,userName:string) => {
//   const payload ={
//     id:userId,
//     userName:userName,
//     iss:userName
//   }
//   const secretRefreshKey = process.env.JWT_REFRESH_TOKEN

//   if(!secretRefreshKey){
//     throw new Error("Authentication not found")
//   }

//   const refreshToken = jwt.sign(payload,secretRefreshKey,{expiresIn:"7d"})

//   return refreshToken


// }
