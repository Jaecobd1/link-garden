import React, { useEffect, useRef, useState } from 'react'
import firebase from '../utils/firebase'

function ForgotPassword() {
    const [email, setEmail] = useState("");

    const emailRef = useRef();
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    function handleForgotPassword() {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
            alert('Check your spam folder!')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                alert('Error:'  + errorMessage)
        })
    }
    return (
        <div className="h-screen flex items-center justify-center flex-col">
            <h1>Forgot your Password?</h1>
            <span>Enter your email below and check your inbox</span>
            <label htmlFor="email">Email:</label>
            <input type="text" className="email bg-slate-200 " ref={emailRef} onChange={((e)=>{setEmail(e.target.value)})} />
            <button onClick={handleForgotPassword} className="hover:bg-slate-200 p-5 rounded-xl">Submit</button>
        </div>
    )
}

export default ForgotPassword
