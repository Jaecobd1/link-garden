import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBPiQzF_sOE4uLiMYAeqcT63CxbvW7LNtk",
  authDomain: "link-garden.firebaseapp.com",
  projectId: "link-garden",
  storageBucket: "link-garden.appspot.com",
  messagingSenderId: "824442928618",
  appId: "1:824442928618:web:7c9c3018c36810a7130693",
  measurementId: "G-Z8VG4Y72TE"
};


firebase.initializeApp(firebaseConfig);

export default firebase;


firebase.auth().onAuthStateChanged((user) => {
  
  if (user) {
    let uid = user.uid
    console.log(uid)

  } else {
    alert('Signed out')
  }
  

})

export const auth = firebase.auth()