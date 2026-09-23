import axios from "axios"

 const API_URL = "http://localhost:5002"

export const getUser = async (id : number)=> {

    const token = localStorage.getItem('token')
    if(!token){
        throw new Error("token not found")
    }
    const response = await axios.get(`${API_URL}/user/${id}`,{
        headers:{
            Authorization : `Bearer ${token}`
        }
    })

    return response.data
}