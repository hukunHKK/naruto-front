import axios from "axios";
import { useUser } from "@/store";

const instance = axios.create({
  baseURL: '/naruto'
})

instance.interceptors.request.use(async (requset) => {
  requset.headers.Authorization = useUser().authorization
  return requset
})

instance.interceptors.response.use(async (response) => {
  if (response.status === 200) {
    return response.data
  }
})

export default instance