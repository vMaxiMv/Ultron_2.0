
import React from 'react';
import lr from './login_register.module.scss'
import Link from "next/link";
import HC from "@/components/HelloPage/HelloComp.module.scss";
import {SubmitHandler, useForm} from "react-hook-form";
import LoginComponent from "@/components/Login_register/login_component";


function Login() {


    return (
        <div className="wrapper">
            <LoginComponent title={'Вход'} name={'login'} button={'Войти'} isRegisterFlag={true}/>
        </div>
    );
}

export default Login;