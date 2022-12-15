import { Link } from "react-router-dom";
import firebase from '../../utils/firebase'
import { useState, useContext, useEffect } from 'react'
import UserContext from '../../utils/UserContext';

export default function NavBar() {
    //State Management

    const user = useContext(UserContext);

    useEffect(() => {
        console.log( user)
    }, [])
     


    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            alert('Signed Out')
        }).catch((error) => {
            alert('Error Signing out... \n' + error.message )
        })
    }

    return (
        <nav className="nav bg-blue h-10 items-center flex justify-between text-white font-montserrat  font-normal">
            <div className="p-2">
                <Link to="/" >
                    <h1>Link Garden</h1>
                    </Link>
            </div>
            <ul className="flex  justify-around p-2 space-x-2">
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/create">Create a Garden</Link>
                </li>
                <li>
                   {!user? (<Link to="/login">Sign in</Link>):( <button onClick={handleSignOut}>Sign Out</button>)}
                </li>
            </ul>
        </nav>
    )
}