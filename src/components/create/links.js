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
        }).then(() => {
            console.log('Successful update')
        }).catch((error) => {
            console.log(error.message)
            alert('Please enter both spaces')
        })
    }

    return (
        <div className="bg-white w-9/12 flex items-center justify-around h-full flex-col rounded-xl shadow-xl mb-4 md:flex-row">
            <input onChange={((e) => { setTitle(e.target.value) })} placeholder={link.title} />
            <input type="url" onChange={((e) => { setUrl(e.target.value) })} placeholder={link.url} />
            <button onClick={updateItem}
            className="btn bg-blue text-white">Update</button>
            <button onClick={deleteItem}
            className="btn bg-white border-blue border-2 text-blue">Delete</button>
        </div>
    )
}

export default Links
