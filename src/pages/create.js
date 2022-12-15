import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import {UserContext} from '../utils/UserContext'

import Links from '../components/create/links';


function Create() {


    


    const {user} = useContext(UserContext)
    console.log(user)

    return (
        <>
            <div className="min-h-screen h-full bg-slate-500 flex flex-col items-center">
        <div className="flex justify-between items-center h-[200px] px-5 w-screen">
            
            <h1 className="text-2xl font-bold capitalize underline text-white">{user.displayName}'s Garden</h1>
            <Link to="/profile">Edit profile</Link>




            </div>
            <Links />
                
                
            </div>
            </>
    )
}

export default Create
