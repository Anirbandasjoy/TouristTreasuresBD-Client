import axios from "axios"

const axiosSecure = axios.create({
    // baseURL: "http://localhost:5000/api/v1",
    baseURL: "https://touristtreasuresbd.vercel.app/api/v1",
    withCredentials: true
})
const useAxios = () => {

    return { axiosSecure }

}

export default useAxios