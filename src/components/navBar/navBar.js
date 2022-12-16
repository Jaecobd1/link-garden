import { Link } from "react-router-dom";
import firebase from '../../utils/firebase'
import { useState, useContext, useEffect } from 'react'
import UserContext from '../../utils/UserContext';

export default function NavBar() {
    //State Management

    
    const user = firebase.auth().currentUser;
    useEffect(() => {
        console.log( user )
    }, [])
     


    function handleSignOut() {
        firebase.auth().signOut().then(() => {
            alert('Signed Out')
        }).catch((error) => {
            alert('Error Signing out... \n' + error.message )
        })
    }

    return (
        <nav className="nav bg-blue h-full items-center flex justify-between text-white font-montserrat  font-normal sticky top-0">
            <div className="p-2">
                <Link to="/" >
                    <h1>Link Garden</h1>
                    </Link>
            </div>
            <ul className="flex  justify-around p-5 space-x-2 flex-col text-center md:flex-row gap-2 items-center">
                <li>
                    <Link to="/examples">Examples</Link>
                </li>
                <li>
                    <Link to="/create">Create a Garden</Link>
                </li>
                <li>
                   {!user? (<Link to="/login">Sign in</Link>):( <button onClick={handleSignOut} className="border-white border-2 rounded-xl p-1 hover:bg-white hover:border-blue hover:text-blue">Sign Out</button>)}
                </li>
            </ul>
        </nav>
    )
}