import axios from "axios";

const instance = axios.create({
    baseURL:'https://ultronmotivaiton.ru/api',
    withCredentials: true
})
export default instance