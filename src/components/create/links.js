import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import firebase from '../../utils/firebase'
import { UserContext } from '../../utils/UserContext'

function Links({ link }) {
    // States
    const [url, setUrl] = useState();
    const [title, setTitle] = useState();
    const [desc, setDesc] = useState();
    const { user } = useContext(UserContext)



    // REFS
    const titleRef = useRef();
    const urlRef = useRef();
    const descRef = useRef();

    // Fire Base consts

    const uid = user.uid
    const linkRef = firebase.database().ref(uid).child(link.id)

    // Firebase Functions
    const deleteItem = () => {
        linkRef.remove();
    }

    const updateItem = () => {
        if (titleRef.current.value === "") {

            linkRef.update({
                url: url,
                desc: desc,
            })
        } else if (urlRef.current.value === "") {
            linkRef.update({
                title: title,
                desc: desc,
            })
        } else if (descRef.current.value === "") {
            linkRef.update({
                title: title,
                url: url,
            })
        }
        else {
            linkRef.update({
                title: title,
                url: url,
                desc: desc,
            }).then(() => {
                alert('Successful update')
            }).catch((error) => {
                console.log(error.message)
                alert('Please enter both spaces')
            })
        }
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
            setDesc(link.desc)
            // urlRef.current.value = url;
            // titleRef.current.value = title;


        })



    }, [])



    return (
        <div className="bg-white w-9/12 flex items-center justify-around h-full flex-col rounded-xl shadow-xl mb-4 md:flex-row p-2 flex-wrap">
            <div className="flex items-center">
                <label htmlFor="url">URL:</label>
                <input type="url" onChange={((e) => { setUrl(e.target.value) })} placeholder={link.url} className="url input placeholder:input-placeholder" ref={urlRef} />

            </div>
            <div className="flex items-center">
                <label htmlFor="title">Title:</label>
                <input type="text" onChange={((e) => { setTitle(e.target.value) })} placeholder={title} className="title input placeholder:input-placeholder" ref={titleRef} />
            </div>
            <div className="flex items-center">
                <label htmlFor="title">Description:</label>
                <input type="text" onChange={((e) => { setDesc(e.target.value) })} placeholder={desc} className="title input placeholder:input-placeholder" ref={descRef} />
            </div>

            <div className="flex w-1/2 justify-center">
                <a href={'https://' + link.url} target="_blank" rel="noreferrer" >Test {link.title}</a>
            </div>

            <div className="flex">
                <button onClick={updateItem}
                    className="btn bg-blue text-white">Update</button>
                <button onClick={deleteItem}
                    className="btn bg-white border-blue border-2 text-blue">Delete</button>
            </div>
        </div>
    )
}

export default Links
