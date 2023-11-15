'use client'
import React, {useEffect, useState} from 'react';
import {useActivityButtons} from "@/hooks/queryHooks";
import tb from '../ToolbarStyles/PCToolbar.module.scss'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Loader from "@/components/Loader/Loader";
import {useUserData} from "@/store/store";


function ActivityButtonsToolbar() {
    const [visibleButtonsFirst, setVisibleButtonsFirst] = useState(0); // По умолчанию показываем первые 13 кнопок
    const [visibleButtonsLast, setVisibleButtonsLast] = useState(5)
    const {data,isLoading} = useActivityButtons()
    //const {mutateAsync:getActivityData, isLoading:activityDataLoading, isError:getActivityDataError, data:activityData,isSuccess:activityDataSuccess } = useGetActvityData()

    const {UserData, fetchUserData} = useUserData()
    const buttonActivityHandleClick = async (key:string, value:string)=>{
        fetchUserData({id: key, StatusView: false})
    }
    console.log(UserData)

    const ModalActivityHandleClick = ()=>{

    }

    const handleMoreClick = () => {
        setVisibleButtonsFirst(visibleButtonsFirst + 5);
        setVisibleButtonsLast(visibleButtonsLast + 5)
    };
    const handleLessClick = () => {
        setVisibleButtonsFirst(visibleButtonsFirst - 5);
        setVisibleButtonsLast(visibleButtonsLast - 5)
    };




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