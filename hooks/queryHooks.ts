import {useMutation, useQuery} from "@tanstack/react-query";
import {loginRegister} from "@/api/authorization/auth";
import {fetchActivityButtons} from "@/api/activityData/activityName";
import {fetchData} from "@/api";



export const useLoginRegister = () => {
    return useMutation(['/loginRegister'], loginRegister)
}

export const useActivityButtons = ()=>{
    return useQuery(['activityButtons'], fetchActivityButtons,{refetchOnWindowFocus:false})
}
export const useGetYourName = ()=>{
    const url = `/get_username`;
    const {data} =
        useQuery(
            ['userName'],
            ()=>fetchData(url),
            {refetchOnWindowFocus:false}
        )
    return data?.data.userName
}
