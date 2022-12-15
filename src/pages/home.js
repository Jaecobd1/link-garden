import React from 'react'
import { FaSeedling } from 'react-icons/fa'
import {Link} from 'react-router-dom'
export default function Home() {
    return (
        <div className="h-screen w-screen bg-blue flex md:flex-row flex-col justify-around items-center">
            <div className="left text-white font-montserrat p-5 z-10">
                <h1 className="text-4xl mb-4">Welcome to Link Garden</h1>
                <span className="w-52 text-2xl flex mb-4">
                    Sign in or Login to Start planting your garden of links today!
                </span>
                <div className="flex">
                    <Link to="/login" className="btn btn-white hover:btn-white-hover">Login</Link>
                <Link to="/create" className="btn btn-white hover:btn-white-hover">Create Garden</Link>
                </div>
            </div>
            <div className="right absolute md:relative z-0">
                <FaSeedling className="md:seedlingMd seedling" />

            </div>
        </div>
    )
}


