import React, {useContext, useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../utils/UserContext'
import firebase from '../utils/firebase'
import Links from '../components/create/links';
import LinkList from '../components/create/linkList';


function Create() {
    const { user } = useContext(UserContext)
    const uid = user.uid
    // useEffect(() => {
    //     if (uid) {
    //      console.log('User Logged in' + uid)
    //     } else {
    //         alert('Please log in')
    //  } 
    // }, [])

    const [title, setTitle] = useState();
    const [url, setUrl] = useState();
    

    
    
    const linkRef = firebase.database().ref(uid);


    // Validation of Https
        // Removes https:// from users input
    const httpsValidation = () => {
        const regEx = /([https://])/g;
        url = url.replace(regEx, "");
    };
    

    const createLink = () => {
        const regEx = '/(https://)/gy';
        setUrl(url.replace(regEx, ""));
        console.log(url)
        const link = {
            title,
            url
        }
        console.log(link)
        linkRef.push(link).then(
            console.log('Added to Db')
        )

    }
    console.log(uid)
    const gardenLink = "/garden/" + uid;
    return (
        <>
            <div className="min-h-screen h-full bg-grey flex flex-col items-center">
             <div className="flex justify-between items-center h-full  p-5 w-screen">
            
            {user ? (<h1 className="text-2xl font-bold  text-blue">{user.displayName}'s Garden</h1>) : (
                <h1>Please Login</h1>
            )}
                    <Link to="/profile">Edit profile</Link>
                    <Link to={gardenLink}>View Garden</Link>




                </div>
                <div className="border-blue border-2 rounded-xl p-4 m-2 flex flex-col md:flex-row bg-white">
                    <input type="url" className="input placeholder:input-placeholder" onChange={((e) => { setUrl(e.target.value) })} placeholder="URL"  />
                    <input type="text" onChange={((e) => { setTitle(e.target.value) })} placeholder="Title" className="input placeholder:input-placeholder" />
                    <button onClick={createLink}>Submit</button>
                    
                </div>
            <LinkList />
                
                
            </div>
            </>
    )
}

export default Create
