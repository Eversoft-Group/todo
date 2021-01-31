import axios from "axios"
import Env from "./environment"

const axiosInstance = axios.create({
    baseURL: Env.BASE_URL,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
    }
})

export default axiosInstance