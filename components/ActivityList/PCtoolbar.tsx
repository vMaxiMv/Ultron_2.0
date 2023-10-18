"use client"
import PCtb from './ToolbarStyles/PCToolbar.module.scss'
import {useEffect, useState} from "react";
import ActivityButtonsToolbar from "@/components/ActivityList/innerToolbarComponent/ActivityButtonsToolbar";
function PCToolbar() {
    const [visible,setVisible] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setVisible(false);
        }, 3000);
        return ()=>{
            setVisible(true);
        }
    }, [])
    return (
        <div className={`${PCtb.menu} ${visible ? PCtb.menuVisible : ''}`}>
            <ActivityButtonsToolbar/>
        </div>
    );
}

export default PCToolbar;