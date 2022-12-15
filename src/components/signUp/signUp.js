import React, {useState, useRef} from 'react'
import firebase from '../../utils/firebase'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const confirmPasswordRef = useRef();


    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handleConfirmPasswordChange(e) {
        setConfirmPassword(e.target.value);
    }

    function handleSignUp() {
        if (password === confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    var user = userCredential.user;
                    console.log('Account has been created')
                    console.log(username)
                    user.updateProfile({
                        displayName: username,
                    }).then(() => {
                        console.log(user.displayName)
                    })
                    
                    emailRef.current.value = ""
                    usernameRef.current.value = ""
                    passwordRef.current.value = ""
                    confirmPasswordRef.current.value = ""
                    
                    
                })
            
            
        } else {
            alert('Password and password confirmation must be the same')
        }
    }

   


    return (
            <div className="flex flex-col space-y-2 w-96 m-auto h-full  justify-center mt-48 md:mt-0 text-white">
                <h1 className="text-4xl text-center">Sign Up</h1>
            <div className="flex flex-col">
                <label htmlFor="Username" >Username:</label>
                <input type="text" placeholder="Username" className="Username" onChange={handleUsernameChange} ref={ usernameRef}/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" className="email" onChange={handleEmailChange} ref={emailRef}/>
                <label htmlFor="password" >Password:</label>
                <input type="password" placeholder="Password" className="password" onChange={handlePasswordChange} ref={passwordRef} />
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" placeholder="Confirm Password" className="confirmPassword" onChange={handleConfirmPasswordChange} ref={ confirmPasswordRef}/>
                
                <button onClick={handleSignUp} className="btn btn-white">Sign Up</button>
                </div>
           </div> 
    )
}

export default SignUp
