
import axios from "axios";
import {IAuthParams} from "@/types/MyTypes";
import {useMutation, useQuery} from "@tanstack/react-query";
import {fetchData} from "@/api";
import instance from "@/api/api";


export const loginRegister = async ({username, password, name}:IAuthParams) =>{
    const response = await instance.post(`/${name}`,{username,password})
    return response.data
}



