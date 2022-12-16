import React, {useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utils/UserContext'
import firebase from '../utils/firebase'

import Links from '../components/create/links';
import LinkList from '../components/create/linkList';


function Create() {
    useEffect(() => {
        if (uid) {
         console.log('User Logged in')
        } else {
            alert('Please log in')
     } 
    }, [])

    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    


    const { user } = useContext(UserContext)
    const uid = user.uid
    const linkRef = firebase.database().ref(uid);

    

    const createLink = () => {
        const link = {
            title,
            url
        }
        console.log(link)
        linkRef.push(link).then(
            console.log('Added to Db')
        )

    }

    const gardenLink = "/garden/" + uid;
    return (
        <>
            <div className="min-h-screen h-full bg-slate-500 flex flex-col items-center">
             <div className="flex justify-between items-center h-[200px] px-5 w-screen">
            
            <h1 className="text-2xl font-bold capitalize underline text-white">{user.displayName}'s Garden</h1>
                    <Link to="/profile">Edit profile</Link>
                    <Link to={gardenLink}>View Garden</Link>




                </div>
                <div>
                    <input type="url" onChange={((e) => { setUrl(e.target.value) })} placeholder="URL" />
                    <input type="text" onChange={((e) => { setTitle(e.target.value) })} placeholder="Title" />
                    <button onClick={createLink}>Submit</button>
                    
                </div>
            <LinkList />
                
                
            </div>
            </>
    )
}

export default Create
