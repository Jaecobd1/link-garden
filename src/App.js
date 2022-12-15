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


function App() {


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
        {<Route path="/create" element={<Create uid={uid} />} />}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/account" element={<Account />}/>
        </Routes>
        </UserProvider>


      </>
  );
}

export default App;
