'use client'
import React, {useState} from 'react';
import {useActivityButtons} from "@/hooks/queryHooks";
import tb from "./ActivityToolbar.module.scss"


function ActivityButtonsToolbar() {
    const {data,isLoading} = useActivityButtons()
    console.log(Object.entries(data))
    const buttonActivityHandleClick = async (key:string, value:string)=>{

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
    return (
        <div className={tb.toolbar_menu}>
            <div className={tb.title}>Активности</div>
            {visibleButtonsFirst >= 5 &&(
            <button className={tb.add_activity} onClick={handleLessClick}>
                <img className={tb.add_activity_img} src="/images/blue-arrow-up-inside-the-circle.svg" alt="Up"/>
            </button>
                )}

            {Object.entries(data).slice(visibleButtonsFirst, visibleButtonsLast).map(([key,value])=>(
                <button className={tb.activity_buttons} onClick={()=>buttonActivityHandleClick(key,value)} key={key}>{`${value}`}</button>
            ))}

            {Object.entries(data).slice(visibleButtonsFirst, visibleButtonsLast).length <= 5  && Object.entries(data).length <= visibleButtonsLast ? '' : (
            <button className={tb.add_activity} onClick={handleMoreClick}>
            <img className={tb.add_activity_img} src="/images/blue-arrow-down-inside-the-circle4.svg" alt="Down"/>
            </button>
                )}
        </div>
    );
}

export default ActivityButtonsToolbar;