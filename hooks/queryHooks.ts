import {useMutation, useQuery} from "@tanstack/react-query";
import {loginRegister} from "@/api/authorization/auth";
import {fetchActivityButtons} from "@/api/activityData/mainData";


export const useLoginRegister = () => {
    return useMutation(['/loginRegister'], loginRegister)
}

export const useActivityButtons = ()=>{
    return useQuery(['activityButtons'], fetchActivityButtons)
}