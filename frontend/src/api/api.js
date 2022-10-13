import axios from '../helper/axios'

const url = 'http://localhost:8000/api/v1'

// auth
export const login = async (user) =>{
    const res = await axios.post(`${url}/auth/login` , user)
    localStorage.setItem('authToken' , res.data.token)
    return res
}

export const signup = async (user) =>{
    const res = await axios.post(`${url}/auth/signup` , user)
    return res
}