import React, { useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase'
import { UserContext } from '../../utils/UserContext';

export default function LoginForm() {
    
    // States
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    

    var {user} = useContext(UserContext)

    const handleSignIn = () => {
        console.log(email, password)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
            user = userCredential.user
            console.log(user)
            alert("signed in")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    
    return (
<>
    <div className="flex flex-col space-y-2 w-96 m-auto h-full justify-center -mt-5 mb-20">
        
        <h1 className="text-white text-center text-4xl">Login</h1>
        <div className="flex flex-col text-white space-y-1">
        <label htmlFor="email" >Email:</label>
        <input type="text" placeholder="Email" className="email" onChange={((e) => { setEmail(e.target.value) })} />
        <label htmlFor="password">Password:</label>
        <input type="password" placeholder="Password" className="password" onChange={((e) => { setPassword(e.target.value) })} />
        <Link to="/forgotPassword" className="text-white">Forgot Password?</Link>
        <button onClick={handleSignIn} className="btn-white btn "> Log In</button>
                    {/* {user && <h1> {user.displayName}</h1>} */}
    </div>
                
</div>
        
</>
    )
}