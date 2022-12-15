import React from 'react'
import LoginForm from '../components/login/loginForm'
import SignUp from '../components/signUp/signUp'



function Login() {

    return (
        <div className="w-screen h-full bg-blue flex font-montserrat md:flex-row flex-col items-center justify-start md:h-screen">
            <div className="left md:w-1/2">
                <SignUp />
            </div>
            <div className="right md:w-1/2">
                <LoginForm />
            </div>
        </div>
    )
}

export default Login
