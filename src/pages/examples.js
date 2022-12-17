import React from 'react'
import { Link } from 'react-router-dom'

function Examples() {
    return (
        <div className="font-montserrat h-screen flex flex-col items-center">
            <h1 className="p-4 text-2xl text-blue">View Example Gardens</h1>

            <div className="flex text-blue w-9/12">
                <Link to="/garden/AnIH6DGQw3dLR35k66Y5Hjxq41K3" className="text-blue">Jake Dobler's Garden</Link>
            </div>
        </div>
    )
}

export default Examples
