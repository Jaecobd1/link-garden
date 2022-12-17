import React, { useEffect, useState } from 'react'
import firebase from '../utils/firebase'
import { Link } from 'react-router-dom'
import Links from '../components/garden/links';

function Garden(user) {
    const [linkList, setLinkList] = useState();

    const uid = user.user



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
                        console.log('new' + link)
                        
                    })


                    
                    return (
                        <Links link={link} />
                    )
                })
           }

        </div>
    )
}

export default Garden
