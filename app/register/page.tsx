import React from 'react';
import LoginComponent from "@/components/Login_register/login_component";

function Register() {
    return (
        <div className="wrapper">
            <LoginComponent title={'Регистрация'} name={'register'} button={'Зарегистрироваться'} isRegisterFlag={false}/>
        </div>
    );
}

export default Register;