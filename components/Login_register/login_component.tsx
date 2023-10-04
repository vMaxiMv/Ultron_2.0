'use client'
import Link from "next/link";
import HC from "@/components/HelloPage/HelloComp.module.scss";
import lr from "@/app/login/login_register.module.scss";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthParams} from "@/types/loginRegisterTypes";
import {useNavigate} from "react-router";
import {useLoginRegister} from "@/api/authorization/auth";
import {useMutation} from "@tanstack/react-query";


function LoginComponent() {
    //const navigate = useNavigate()
    const {register, handleSubmit, formState:{errors}} = useForm<IAuthParams>()
    const {mutate} = useLoginRegister()
    const onSubmit: SubmitHandler<IAuthParams> = async (data: IAuthParams)=>{
        const {username, password} = data;
        const name = 'login'
        mutate({username,password,name})

        console.log(data)
    }
    return (
        <>
            <Link href="/"> <img src="/images/robot-logo-in-circle.svg" alt="logo" className={HC.logo} /></Link>

            <form className={lr.form_box} onSubmit={handleSubmit(onSubmit)}>

                <img src="/images/form_robot.svg" alt="Robot" className={lr.user}/>
                <h1>Вход</h1>

                <input type="text" placeholder="Username" {...register("username")}/>
                <input type="password" placeholder="Password" {...register("password")}/>
                <input type="submit" name="" value="Войти"/>

                <Link href="/" className={lr.forgot_link}>Забыли пароль?</Link>
                <Link href="/register" className={lr.forgot_link}>Зарегистрироваться</Link>
            </form>
        </>
    );
}

export default LoginComponent;