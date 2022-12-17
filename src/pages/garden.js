import React, { useEffect, useState, useContext } from 'react'
import firebase from '../utils/firebase'
import { Link } from 'react-router-dom'
import Links from '../components/garden/links';
import {UserContext} from '../utils/UserContext'


function Garden() {
    const [linkList, setLinkList] = useState();

    const { user } = useContext(UserContext)
    const uid = user.uid



    useEffect(() => {
        const linkRef = firebase.database().ref(uid);
        linkRef.on('value', (snapshot) => {
            const links = snapshot.val();
            const linkList = [];
            for (let id in links) {
                linkList.push({ id, ...links[id]})
            }
            setLinkList(linkList)
        })
    }, [])

    
    return (
        <div className="flex flex-col items-center gap-4 p-4 text-2xl font-montserrat min-h-screen">
            {
                linkList?.map((link, index) => {

    const currentUrl = "https://" + link.url

                    console.log(link)
                    return (
                        <div className="w-screen flex justify-center" key={link.id}>
                            <a href={currentUrl} target="_blank" rel="noopener"
                                className="w-9/12 flex border-2 border-black rounded-xl p-4 justify-around items-center">
                                <h1>{link.title}</h1>
                                <span className="text-sm">{link.url}</span>
                            </a>
                        </div>
                    )
                })
           }

        </div>
    )
}

export default Garden
