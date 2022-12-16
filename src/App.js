import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Create from './pages/create';
import Nav from './components/navBar/navBar'
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword'
import firebase from './utils/firebase'
import Account from './pages/account'
import UserProvider from './utils/UserContext'
import Garden from './pages/garden'
import {useEffect, useState} from 'react'
import Profile from './pages/profile';
import Examples from './pages/examples';
import Footer from './components/footer/footer';


function App() {
  const [usersList, setUserList] = useState([])

  useEffect(() => {
        const dbRef = firebase.database().refFromURL('https://link-garden-default-rtdb.firebaseio.com/')
    dbRef.on('value', (snapshot => {
          const _usersList = []
        const users = snapshot.val()
            for (let id in users) {
                _usersList.push({id, ...users[id]})
            }
          setUserList(_usersList)

    }) )
    },[])


  var displayName = '';
  var uid = '';

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      displayName = user.displayName
      uid = user.uid;
      console.log(displayName + " logged in")


    }
  })



  return (
    <>
      <UserProvider>
      <Nav />

        
      <Routes>
      
      <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create uid={uid} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          {
            usersList.map((user) => {
              console.log(user.id)
              const currentPath = "/" + user.id;
              console.log(currentPath);
              <Route path={currentPath} element={<Garden user={user} />} />
             
            })
          }
          <Route path="/profile" element={<Profile />} />
          <Route path="/examples" element={<Examples />}/>
          
        </Routes>
        <Footer />
        </UserProvider>


      </>
  );
}

export default App;
