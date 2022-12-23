import { useEffect, useState } from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home';
import Create from './pages/create';
import Nav from './components/navBar/navBar'
import Login from './pages/login';
import ForgotPassword from './pages/forgotPassword'
import firebase from './utils/firebase'
import UserProvider from './utils/UserContext'
import Garden from './pages/garden'
import Profile from './pages/profile';
import Examples from './pages/examples';
import Footer from './components/footer/footer';


function App() {
  const [userIDList, setUserIdList] = useState([])

  // creating blank user
  var uid = '';
  // If firebase senses a change then user id is changed to the user ID
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      displayName = user.displayName
      uid = user.uid;
      console.log(displayName + " logged in")


    }
  })

  // Pull from the database each value, create a list of the userIds, 
  useEffect(() => {

    const dbRef = firebase.database().refFromURL('https://link-garden-default-rtdb.firebaseio.com/')

    dbRef.on('value', (snapshot => {
      const _useridList = []
      const users = snapshot.val()
      for (let id in users) {
        _useridList.push({ id, ...users[id] })
      }
      setUserIdList(_useridList)
      console.log(userIDList)

    }))
  }, [])


  var displayName = '';





  return (
    <>
      <UserProvider>
        <Nav />


        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          {

            userIDList.map((users) => {
              console.log(users.id)
              const currentPath = "/garden/" + users.id;
              console.log(currentPath);
              return (
                <Route path={currentPath} element={<Garden user={users.id} key={users.id} />} />
              )

            })
          }
          <Route path="/profile" element={<Profile />} />
          <Route path="/examples" element={<Examples />} />

        </Routes>
        <Footer />
      </UserProvider>


    </>
  );
}

export default App;
