'use client'
import React, {useState} from 'react';
import HC from "./HelloComp.module.scss"
import Slider from "@/components/HelloPage/Slider/Slider";

function HelloComponent() {
    return (
        <div className={HC.wrapper}>
            <img src="/images/main_logo.svg" alt="logo" className={HC.logo} />
            <div className={HC.main_block}>
            <Slider/>
            </div>
            <div className={HC.user_img}>
                <img src="images/strong-kind-robot.svg" alt="Image" />
            </div>
        </div>
    );
}

export default HelloComponent;