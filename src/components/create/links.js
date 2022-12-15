import React, {useState, useContext} from 'react'
import firebase from '../../utils/firebase'
import {UserContext} from '../../utils/UserContext'

function Links() {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    const {user} = useContext(UserContext)
    const uid = user.uid

    const handleOnChange = (e) => {
        setTitle(e.target.value)
    }
    const createLink = () => {
        const linkRef = firebase.database().ref(uid);
        const link = {
            title,
            url
        }

        linkRef.push
    }

    return (
        <div>
            hello
             <input type="text" />
        </div>
    )
}

export default Links
