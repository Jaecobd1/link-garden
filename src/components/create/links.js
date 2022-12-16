import React, {useState, useContext, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase'
import {UserContext} from '../../utils/UserContext'

function Links({ link }) {
    // States
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const { user } = useContext(UserContext)



    // REFS
    const titleRef = useRef();
    const urlRef = useRef();

    // Fire Base consts
    
    const uid = user.uid
    const linkRef = firebase.database().ref(uid).child(link.id)
    
    // Firebase Functions
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

    // First Render change values to firebase values
    useEffect(() => {
        // console.log()
        linkRef.on('value', (snapshot) => {
            const link = snapshot.val();
            console.log(link.title)
            // const linkTitle = link.title
            // urlRef.current.value = link.url;
            setTitle(link.title)
            setUrl(link.url)
            urlRef.current.value = url;
            titleRef.current.value = title;
            
            
        })


        
    }, [url, title])

    return (
        <div className="bg-white w-9/12 flex items-center justify-around h-full flex-col rounded-xl shadow-xl mb-4 md:flex-row p-2 flex-wrap">
            <div className="flex items-center">
                <label htmlFor="url">URL:</label>
            <input type="url" onChange={((e) => { setUrl(e.target.value) })} placeholder={link.url} className="url" ref={urlRef }/>
            </div>

            <div className="flex">
                <a href={ 'https://' + link.url } target="_blank">Test {link.title}</a>
            </div>
            
            <button onClick={updateItem}
            className="btn bg-blue text-white">Update</button>
            <button onClick={deleteItem}
            className="btn bg-white border-blue border-2 text-blue">Delete</button>
        </div>
    )
}

export default Links
