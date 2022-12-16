import React, {useState, useContext, useEffect} from 'react'
import firebase from '../../utils/firebase'
import {UserContext} from '../../utils/UserContext'

function Links({ link }) {
    

    return (
        <div className="bg-white w-9/12 flex items-center justify-around">
            <h1>{link.title}</h1>
            <h1>{link.url}</h1>
            <button>Delete</button>
        </div>
    )
}

export default Links
