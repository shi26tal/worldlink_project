import axios from "axios"

 const API_URL = "http://localhost:5002"


export const loginApi = async (userName:string,password:string) => {
    const response = await axios.post(`${API_URL}/auth/login`, {
        userName,
        password
    })

    return response.data
}