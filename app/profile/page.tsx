'use client'
import PCToolbar from "@/components/ActivityList/PCtoolbar";
import EmptyActivity from "@/components/EmptyActivity/EmptyActivity";
import ProfileStyles from "./profilePageStyles.module.scss"
import {useUserData} from "@/store/store";
import SwitchGraphic from '@/components/ChartLogic/SwitchGraphic';




function Page() {
    //const data1 = useGetYourName()

    // const {mutateAsync, isLoading, isError, data} = useGetActvityData()
    //
    // useEffect(()=>{
    //     mutateAsync({id:'', StatusView:false})
    // },[])
   // const UserData = useUserData(state => state.UserData)

    //console.log('Zustand', UserData)
  const UserData = useUserData(state => state.UserData)
  console.log('Common Charts', UserData)
    return (

        <div className="wrapper">
            <PCToolbar/>
            <div className={ProfileStyles.EmptySelect}><EmptyActivity/></div>
          {/*{ UserData  ? <SwitchGraphic/> : ""}*/}
          <SwitchGraphic/>
        </div>

    );
}

export default Page;