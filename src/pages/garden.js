import React, { useEffect, useState } from 'react'
import firebase from '../utils/firebase'
import { Link } from 'react-router-dom'

function Garden(user) {
    const [linkList, setLinkList] = useState();

    const uid = user.user


    var linkRef = firebase.database().ref(uid);

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
                linkList?.map((link) => {
                    
                    const newLinkRef = firebase.database().ref(uid).child(link.id)
                    
                    newLinkRef.on('value', (snapshot) => {
                        const link = snapshot.val()
                        console.log(link)
                        
                    })

                    const currentUrl = "https://" + link.url
                    return (
                        <div className="" key={link.id}>
                            {console.log()}
                            <a href={currentUrl} target="_blank" rel="noopener"
                            className="underline">{link.title}</a>
                        </div>
                    )
                })
           }

        </div>
    )
}

export default Garden
