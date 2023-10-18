'use client'

import {useGetActvityData, useGetYourName} from "@/hooks/queryHooks";
import PCToolbar from "@/components/ActivityList/PCtoolbar";
import {useEffect} from "react";



function Page() {
    const data1 = useGetYourName()

    // const {mutateAsync, isLoading, isError, data} = useGetActvityData()
    //
    // useEffect(()=>{
    //     mutateAsync({id:'', StatusView:false})
    // },[])

    return (
        <>
        <div className="wrapper"> <PCToolbar/> </div>

            </>
    );
}

export default Page;