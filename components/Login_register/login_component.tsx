'use client'
import Link from "next/link";
import HC from "@/components/HelloPage/HelloComp.module.scss";
import lr from "@/app/login/login_register.module.scss";
import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IAuthParams} from "@/types/loginRegisterTypes";
import {useLoginRegister} from "@/api/authorization/auth";
import {useRouter} from "next/navigation";

interface IProps {
    title: string;
    name:string
    button:string;
    isRegisterFlag:boolean;
}

function LoginComponent({title,name, button,isRegisterFlag}:IProps) {
    const {register, handleSubmit, formState:{errors}} = useForm<IAuthParams>()
    const mutation = useLoginRegister()
    const router = useRouter()

    const onSubmit: SubmitHandler<IAuthParams> = async (data: IAuthParams)=>{
        const {username, password} = data;
       // const name = props.name

        try {
            const response = await mutation.mutateAsync({username,password,name})
        } catch (error){
            console.error("Ошибка при авторизации", error)
        }
    }
    if(mutation.isLoading){
        return <div className="loader_container">
            <div className="loader"></div>
        </div>
    }
    if(mutation.isSuccess){
          router.push('/profile')
        return null
    }

    return (
        <>
            <Link href="/"> <img src="/images/robot-logo-in-circle.svg" alt="logo" className={HC.logo} /></Link>

            <form className={lr.form_box} onSubmit={handleSubmit(onSubmit)}>

                <img src="/images/form_robot.svg" alt="Robot" className={lr.user}/>
                <h1>{title}</h1>

                <input type="text" placeholder="Username" {...register("username")}/>
                <input type="password" placeholder="Password" {...register("password")}/>
                <input type="submit" name="" value={button}/>

                {isRegisterFlag && (
                    <div>
                    <Link href="/" className={lr.forgot_link}>Забыли пароль?</Link>
                    <Link href="/register" className={lr.forgot_link}>Зарегистрироваться</Link>
                    </div>
                )}
            </form>
        </>
    );
}

export default LoginComponent;