'use client'
import React, {useState} from 'react';
import {useActivityButtons, useGetActvityData} from "@/hooks/queryHooks";
import tb from '../ToolbarStyles/PCToolbar.module.scss'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Loader from "@/components/Loader/Loader";


function ActivityButtonsToolbar() {
    const {data,isSuccess} = useActivityButtons()
    const {mutateAsync:getActivityData, isLoading, isError:getActivityDataError, data:activityData,isSuccess:activityDataSuccess } = useGetActvityData()
    console.log(data)
    const buttonActivityHandleClick = async (key:string, value:string)=>{
       await getActivityData({id:key,StatusView:false})
    }
    if(isLoading ){
      console.log('Ждемссс')
    }
    if(activityDataSuccess){
        console.log('Урааа')
    }
    const ModalActivityHandleClick = ()=>{

    }
    const [visibleButtonsFirst, setVisibleButtonsFirst] = useState(0); // По умолчанию показываем первые 13 кнопок
    const [visibleButtonsLast, setVisibleButtonsLast] = useState(5)
    const handleMoreClick = () => {
        setVisibleButtonsFirst(visibleButtonsFirst + 5);
        setVisibleButtonsLast(visibleButtonsLast + 5)
    };
    const handleLessClick = () => {
        setVisibleButtonsFirst(visibleButtonsFirst - 5);
        setVisibleButtonsLast(visibleButtonsLast - 5)
    };
    console.log(activityData)

    if(data) {
        return (
            <div className={tb.toolbar_menu}>
                <div className={tb.title}><h2>Активности</h2></div>
                {visibleButtonsFirst >= 5 && (
                    <button className={tb.add_activity} onClick={handleLessClick}>
                        <img className={tb.add_activity_img} src="/images/blue-arrow-up-inside-the-circle.svg"
                             alt="Up"/>
                    </button>
                )}

                {Object.entries(data).slice(visibleButtonsFirst, visibleButtonsLast).map(([key, value]) => (
                    <button className={tb.activity_buttons}
                            onClick={() => buttonActivityHandleClick(key, value as string)}
                            key={key}>{`${value}`}</button>
                ))}

                {Object.entries(data).slice(visibleButtonsFirst, visibleButtonsLast).length <= 5 && Object.entries(data).length <= visibleButtonsLast ? '' : (
                    <button className={tb.add_activity} onClick={handleMoreClick}>
                        <img className={tb.add_activity_img} src="/images/blue-arrow-down-inside-the-circle4.svg"
                             alt="Down"/>
                    </button>
                )}
                <button className={tb.add_activity} onClick={ModalActivityHandleClick}><img
                    className={tb.add_activity_img} src="/images/add_activity.png" alt="add activity"/></button>
            </div>
        );
    }
}

export default ActivityButtonsToolbar;