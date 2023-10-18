import instance from "@/api/api";
import {IActivityData} from "@/types/MyTypes";

export const fetchActivityData = async ({id, StatusView}: IActivityData)=>{
    const response = await instance.post('/data_for_chart',{id, StatusView})
    return response.data
}