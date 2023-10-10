import axios from "axios";
import instance from "@/api/api";


export const fetchData = async (url:string)=>{
    return await instance.get(url)
}