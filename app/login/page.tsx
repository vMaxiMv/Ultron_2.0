"use client"
import React from 'react';
import lr from './login_register.module.scss'
import Link from "next/link";
import HC from "@/components/HelloPage/HelloComp.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";

interface ILogin {
    username: string;
    password: string;
}
function Login() {
    const {register, handleSubmit, formState:{errors}} = useForm<ILogin>()
    const onSubmit: SubmitHandler<ILogin> = async (data: ILogin)=>{
        const {username, password} = data;
        const name = 'login'
        console.log(data)
    }

    return (
        <div className="wrapper">
            <img src="/images/robot-logo-in-circle.svg" alt="logo" className={HC.logo} />

            <form className={lr.form_box} onSubmit={handleSubmit(onSubmit)}>

                <img src="/images/form_robot.svg" alt="Robot" className={lr.user}/>
                <h1>Вход</h1>

                <input type="text" placeholder="Username" {...register("username")}/>
                <input type="password" placeholder="Password" {...register("password")}/>
                <input type="submit" name="" value="Войти"/>

                <Link href="/" className={lr.forgot_link}>Забыли пароль?</Link>
                <Link href="/register" className={lr.forgot_link}>Зарегистрироваться</Link>
            </form>
        </div>
    );
}

export default Login;