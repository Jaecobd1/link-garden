import React, {useState, useContext, useEffect} from 'react'
import firebase from '../../utils/firebase'
import {UserContext} from '../../utils/UserContext'

function Links({ link }) {
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const { user } = useContext(UserContext)
    
    const uid = user.uid

    const linkRef = firebase.database().ref(uid).child(link.id)
    
    const deleteItem = () => {
        linkRef.remove();
    }

    const updateItem = () => {
        linkRef.update({
            title: title,
            url: url
        })
    }

    return (
        <div className="bg-white w-9/12 flex items-center justify-around">
            <input onChange={((e) => { setTitle(e.target.value) })} placeholder={link.title} />
            <input type="url" onChange={((e) => { setUrl(e.target.value) })} placeholder={ link.url}/>
            <button onClick={updateItem}>Update</button>
            <button onClick={deleteItem}>Delete</button>
        </div>
    )
}

export default Links
