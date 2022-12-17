import React, { useEffect, useState, useContext } from 'react'
import firebase from '../utils/firebase'
import { Link } from 'react-router-dom'
import Links from '../components/garden/links';


function Garden(user) {
    const [userList, setUserList] = useState();

    const uid = user.user
    console.log(uid)


    useEffect(() => {
        const linkRef = firebase.database().ref(uid);
        linkRef.on('value', (snapshot) => {
            const links = snapshot.val();
            const userList = [];
            for (let id in links) {
                userList.push({ id, ...links[id]})
            }
            setUserList(userList)
        })
    }, [])

    
    return (
        <div className="flex flex-col items-center gap-4 p-4 text-2xl font-montserrat min-h-screen">
            {
                userList?.map((user, index) => {

                    const currentUrl = "https://" + user.url

                    console.log("user: " , user)
                    return (
                        <div className="w-screen flex justify-center" key={user.id}>
                            <a href={currentUrl} target="_blank" rel="noopener"
                                className="w-9/12 flex border-2 border-black rounded-xl p-4 justify-around items-center">
                                <h1>{user.title}</h1>
                                <span className="text-sm">{user.url}</span>
                            </a>
                        </div>
                    )
                })
           }

        </div>
    )
}

export default Garden
