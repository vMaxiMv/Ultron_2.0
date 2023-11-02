'use client'


import PCToolbar from "@/components/ActivityList/PCtoolbar";
import {useEffect} from "react";
import EmptyActivity from "@/components/EmptyActivity/EmptyActivity";
import ProfileStyles from "./profilePageStyles.module.scss"
import {useUserData} from "@/store/store";



function Page() {
    //const data1 = useGetYourName()

    // const {mutateAsync, isLoading, isError, data} = useGetActvityData()
    //
    // useEffect(()=>{
    //     mutateAsync({id:'', StatusView:false})
    // },[])
    const UserData = useUserData(state => state.UserData)

    console.log('Zustand', UserData)

    return (

        <div className="wrapper">
            <PCToolbar/>
            <div className={ProfileStyles.EmptySelect}><EmptyActivity/></div>
        </div>

    );
}

export default Page;