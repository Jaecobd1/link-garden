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
                userList.push({ id, ...links[id] })
            }
            setUserList(userList)
        })

        console.log('shareLink: ' + shareLink)


    }, [])
    const shareLink = 'https://link-garden.dobler.studio/garden/' + uid


    const copyLink = () => {
        navigator.clipboard.writeText(shareLink).then(() => {
            alert('Copied to clipboard');

        })
    }

    return (
        <div className="flex flex-col items-center gap-4 p-4 text-2xl font-montserrat min-h-screen">
            <button className="text-sm border-2 border-blue p-4 rounded-xl text-blue self-end" onClick={copyLink}>Copy Sharable Link</button>

            {
                userList?.map((user, index) => {

                    const currentUrl = "https://" + user.url

                    console.log("link: ", user)
                    return (
                        <div className="w-screen flex justify-center" key={user.id}>
                            <a href={currentUrl} target="_blank" rel="noopener"
                                className="w-9/12 flex border-2 border-blue rounded-xl p-4 justify-around items-center shadow-xl flex-col">
                                <div className="flex flex-col md:flex-row justify-around w-full">
                                    <h1 className="capitalize">{user.title}</h1>
                                    <span className="text-sm text-lightBlue">https://{user.url}</span>
                                </div>
                                <span className="text-sm p-2">
                                    {user?.desc}
                                </span>
                            </a>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Garden
