'use client'
import React, {AriaAttributes, DOMAttributes, useState} from 'react';
import sl from './/Slider.module.scss'
import Link from "next/link";
import {useSwipeable} from "react-swipeable";

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        // Добавьте атрибуты для ion-icon, если они отсутствуют
        // Например, для некоторых атрибутов ion-icon
        name?: string;
        size?: string;
    }
}

const Slider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const texts = [
        'Приветственный текст, который вводит в курс дела, что это за продукт, какие функции, что может дать пользователю',
        'Еще один текст, который также вводил в курс дела и что-то рассказывает пользователю',
        'Финальный текст-инструкция, еще о чем-то информирующая пользователя',
    ];
    const handlePrev = () => {
        setCurrentIndex((currentIndex) => (currentIndex === 0 ? texts.length - 1 : currentIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((currentIndex) => (currentIndex === texts.length - 1 ? 0 : currentIndex + 1));
    };
    const handlers = useSwipeable({
        onSwipedLeft: handleNext, // Переключаемся на следующий слайд при свайпе влево
        onSwipedRight: handlePrev // Переключаемся на предыдущий слайд при свайпе вправо
    })
    return (
        <>
        <div className={sl.text_block}>
            <div className={sl.slider_text}> <p {...handlers}>{texts[currentIndex]}</p></div>
            <div className={sl.slider_btns}>
                <div> <img onClick={handlePrev} src="/images/leftSliderArrow.png" alt="Left arrow"/>  </div>
                <div> <img onClick={handleNext} src="/images/rightSliderArrow.png" alt="Right arrow"/>  </div>
            </div>

        </div>

    <div className={sl.buttons}>
        <Link href="/login" className={sl.first_btn}>Вход</Link>
        <Link href="/register" className={sl.second_btn}>Регистрация</Link>
    </div>
        </>
    );
};

export default Slider;
