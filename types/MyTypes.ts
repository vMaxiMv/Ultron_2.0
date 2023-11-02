import {useUserData} from "@/store/store";

export interface IAuthParams { // Типизация данных, которые летят на сервер при авторизации/регистрации
    username: string,
    password: string,
    name: string
}
export interface IActivityData { // Типизация данных, которые летят на сервер, когда пользователь выбирает активность
    id: string,
    StatusView: boolean
}

export type TUserDataObj = { // Типизация главного объекта в котором лежат все данные об активности
    amount:{
        userId: Array<number>
    },
    date: Array<string>,
    description: {
        userId:Array<string>
    },
    entry_id:{
        userId:Array<string>
    }
    name: {
        userId: string
    },
    user_id: Array<number>
}
export type TUserDataStore = { // Типизация Store для получения и обновления UserData
    UserData: Partial<TUserDataObj>,
    fetchUserData:(data:IActivityData)=>Promise<void>
}