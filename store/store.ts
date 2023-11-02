import { create } from 'zustand'
import {IActivityData, TUserDataStore} from "@/types/MyTypes";
import instance from "@/api/api";


export const useUserData = create <TUserDataStore>((set) =>({
    UserData: {},
    fetchUserData:  async ({id, StatusView}: IActivityData)=> {
        try {
            const response = await instance.post('/data_for_chart', {id, StatusView})
            set({UserData: response.data})}
    catch (error) {
        console.error('Something wrong', error)
    }
    }
}))