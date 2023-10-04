import axios from "axios";
import {IAuthParams} from "@/types/loginRegisterTypes";
import {useMutation} from "@tanstack/react-query";

const baseUrl:string = "https://ultronmotivaiton.ru/api";

export const loginRegister = async ({username, password, name}:IAuthParams) =>{
    const response = await axios.post(`${baseUrl}/${name}`,{username,password})
    return response.data
}

export const useLoginRegister = () => {
    return useMutation(['/loginRegister'], loginRegister)
}