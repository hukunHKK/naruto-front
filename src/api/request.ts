import axios from "axios";

const instance = axios.create({
  baseURL:'/naruto'
})

instance.interceptors.response.use(async (response)=>{
  if(response.status === 200){
    return response.data
  }
})

export default instance