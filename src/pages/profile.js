import React, {useState, useContext, useEffect} from 'react'
import firebase from '../utils/firebase'
import {UserContext} from '../utils/UserContext'

function Profile() {
    const { user } = useContext(UserContext);

    const uid = user.uid
    const _username = user.displayName;
    const _photoURL = user.photoURL;


    const [username, setUsername] = useState(_username);
    const photoURL = useState(_photoURL)
    

    const updateProfileDisplayName = () => {
        user.updateProfile({
            displayName: username,

        }).then(() => {
            alert("Username update Saved")
        })
    }

    const updateUserProfileImage = () => {
        user.updateProfile({
            photoURL: photoURL

        })
    }

    const getUserInfo = () => {
    }

    return (
        <div>
            <div className="flex p-5">
                <h1 className="text-2xl">{username}'s Profile</h1>
            </div>
            <div className="flex items-center p-10">
                {/* <div className="rounded-full bg-blue w-24 h-24 overflow-hidden m-5 relative">
                    <input type="file" name="profileImage" id="profileImage" className="w-full h-full bg-blue file:bg-blue rounded-full absolute top-0 left-0 right-0 file:border-none" onChange={updateUserProfileImage} />
                    {console.log(user.displayName)}
                </div> */}

                <label htmlFor="username">Change Username</label>
                <input type="text" placeholder={username} onChange={((e) => {setUsername(e.target.value)}) }/>
                <button onClick={updateProfileDisplayName}>Save</button>
            </div>
        </div>
    )
}

export default Profile
