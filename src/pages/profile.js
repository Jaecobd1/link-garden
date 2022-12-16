import React, {useState, useContext, useEffect} from 'react'
import firebase from '../utils/firebase'
import { UserContext } from '../utils/UserContext'
import { Link } from 'react-router-dom'

function Profile() {
    const { user } = useContext(UserContext);

    const uid = user.uid
    const _username = user.displayName;
    const _photoURL = user.photoURL;
    const _bio = user.bio;

    // States
    const [username, setUsername] = useState(_username);
    const [photoURL, setPhotoUrl] = useState(_photoURL)
    const [bio, setBio] = useState(_bio);
    

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

    const updateUserBio = () => {
        user.updateProfile({
            bio: bio
        }).then(() => {
            alert('new bio saved')
        })
    }

    return (
        <div className="font-montserrat">
            <div className="flex p-5 justify-between items-center text-blue">
                <h1 className="text-2xl">{username}'s Profile</h1>
                <Link to='/create'>Edit Garden</Link>
            </div>
            <div className="flex flex-col items-start p-10">
                {/* <div className="rounded-full bg-blue w-24 h-24 overflow-hidden m-5 relative">
                    <input type="file" name="profileImage" id="profileImage" className="w-full h-full bg-blue file:bg-blue rounded-full absolute top-0 left-0 right-0 file:border-none" onChange={updateUserProfileImage} />
                    {console.log(user.displayName)}
                </div> */}

                <div className="flex items-center">
                    <label htmlFor="username">Change Username</label>
                <input type="text" placeholder={username} onChange={((e) => {setUsername(e.target.value)}) }/>
                <button onClick={updateProfileDisplayName}>Save</button>
                </div>

                {/* <div className="flex items-center">
                    <label htmlFor="bio">Bio:</label>
                    <input type="text" className="bio" placeholder={bio ? (bio) : "Write a Bio"}
                        onChange={((e) => { setBio(e.target.value)})}
                        
                    />
                    <button onClick={updateUserBio}>Save</button>
                </div> */}
            </div>
        </div>
    )
}

export default Profile
