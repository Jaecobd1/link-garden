import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase'
import { UserContext } from '../../utils/UserContext';

export default function LoginForm() {
    
    // States
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    // Refs
    const emailRef = useRef();
    const passwordRef = useRef();

    const user = useContext(UserContext)
    function handleSignIn() {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // setUser(userCredential.user);
                emailRef.current.value = ""
                passwordRef.current.value = ""
                
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode)
                alert(errorMessage)
        })
    }
    
    return (
<>
    <div className="flex flex-col space-y-2 w-96 m-auto h-full justify-center -mt-5 mb-20">
        
        <h1 className="text-white text-center text-4xl">Login</h1>
        <div className="flex flex-col text-white space-y-1">
        <label htmlFor="email" >Email:</label>
                    <input type="text" placeholder="Email" className="email" onChange={((e) => { setEmail(e.target.value) })} ref={emailRef}/>
        <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="Password" className="password" onChange={((e) => { setPassword(e.target.value) })} ref={passwordRef}/>
        <Link to="/forgotPassword" className="text-white">Forgot Password?</Link>
                    <button onClick={handleSignIn} className="btn-white btn "> Log In</button>
                    {/* {user && <h1> {user.displayName}</h1>} */}
                </div>
                
    </div>
        
</>
    )
}