import React, { useEffect, useContext, useState } from 'react'
import firebase from '../../utils/firebase'
import Links from './links'
import { UserContext } from '../../utils/UserContext'


function LinkList() {
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
            console.log(linkList)
        })
    }, [])
    return (
        <>
            {linkList ? linkList.map((link, index) => <Links link={link} key={ link.title}/>):''}
            </>
    );
}
export default LinkList