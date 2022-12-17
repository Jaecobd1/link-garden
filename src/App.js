import {useEffect, useState} from 'react'
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
import Profile from './pages/profile';
import Examples from './pages/examples';
import Footer from './components/footer/footer';


function App() {
  const [linksList, setLinkList] = useState([])

  useEffect(() => {
        const dbRef = firebase.database().refFromURL('https://link-garden-default-rtdb.firebaseio.com/')
    dbRef.on('value', (snapshot => {
          const _linkList = []
        const links = snapshot.val()
            for (let id in links) {
                _linkList.push({id, ...links[id]}) 
            }
          setLinkList(_linkList)

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
        <Route path="/create" element={<Create uid={linksList.id} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/account" element={<Account />} />
          {
            
            linksList.map((links) => {
              console.log(links.id)
              const currentPath = "/garden/" + links.id;
              console.log(currentPath);
              return (
                <Route path={currentPath} element={<Garden links={links.id} key={ links.id}/>} />
              )
             
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
