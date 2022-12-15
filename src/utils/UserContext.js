import React, { useState, createContext, useEffect } from 'react';
import { auth } from './firebase'


const UserContext = createContext()



const UserProvider = ({children}) => {
    const [user, setUser] = useState();
    useEffect(() => {
        auth.onAuthStateChanged((userCredentials) => {
            if (userCredentials) {
                setUser(userCredentials)

            } else {
                console.log('no user')
                setUser({});
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{ user: user }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
export { UserContext };