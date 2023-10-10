import instance from "@/api/api";

export const fetchActivityButtons = async ()=>{
    const response = await instance.get('/data_for_chart')
    return response.data
}