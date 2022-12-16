import React from 'react'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="w-full h-full p-4 bg-lightBlue bottom-0 flex items-center font-montserrat justify-center">
            <div className="flex w-9/12 text-white justify-between flex-col md:flex-row">
                <div className="flex flex-col">
                    <Link to="/" >&copy; Link Garden 2022</Link>
                    <Link to="/examples">Examples</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/create">Create</Link>

                </div>
                <span>Created by Jake Dobler</span>
            </div>
        </div>
    )
}

export default Footer
