'use client'

import {useGetYourName} from "@/hooks/queryHooks";
import ActivityButtonsToolbar from "@/components/ActivityList/ActivityButtonsToolbar";


function Page() {
    const data1 = useGetYourName()


    return (
        <>
        <div className="wrapper">Твоя, {data1} главная страница </div>
        <ActivityButtonsToolbar/>
            </>
    );
}

export default Page;