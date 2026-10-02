import axios from "axios"

 const API_URL = "http://localhost:5002"

 type JWTPayload = {
    id: string
 }

export const getUser = async ()=> {

    const token = localStorage.getItem('token')
    if(!token){
        throw new Error("token not found")
    }

    const payload = JSON.parse(atob(token.split(".")[1])) as JWTPayload;

  const response = await axios.get(`${API_URL}/user/${payload.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("data:",response)

  return response.data

}