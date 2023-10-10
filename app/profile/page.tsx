'use client'
import {useGetYourName} from "@/api/authorization/auth";
import {useActivityButtons} from "@/hooks/queryHooks";


function Page() {
    const data1 = useGetYourName()
    console.log(document.cookie)
    const {data,isLoading} = useActivityButtons()
    console.log(data)
    return (
        <div className="wrapper">Главная страница</div>
    );
}

export default Page;