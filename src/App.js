import './App.css';
import { Routes, Route,useNavigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import {GoogleAuthProvider,signInWithPopup, signOut} from 'firebase/auth';
import {auth, db} from './firebase'
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';


function App() {
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  

  const SignIn = () => {
    signInWithPopup(auth,googleProvider)
    .then(async(a) => {
      setDoc(
        doc(db,"users",a.user.uid),
        {
          name: a.user.displayName,
          email: a.user.email,
          uid: a.user.uid,
          photo: a.user.photoURL,
        },
        {merge: true}
      ).then(async() => {
        navigate('/home');
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: a.user.displayName,
            email: a.user.email,
            uid: a.user.uid,
            photo: a.user.photoURL,
          })
        );
        setUser({
            name: a.user.displayName,
            email: a.user.email,
            uid: a.user.uid,
            photo: a.user.photoURL,
        })
        console.log("adding new user");

      })
      
    })
    .catch((err) => console.log(err));
  }

  const onSignOut = () => {
    signOut(auth)
    .then(()=>{
      setUser(null);
      localStorage.removeItem("user");
      navigate('/');
    })
    .catch((err) => console.log(err));
  }
  return (
    <Routes>
      {
        !user?
        <Route path='/' element={<Landing SignIn={SignIn} />} />
        :
        <Route path='/home' element={<Home onSignOut={onSignOut} user={user}/>}/>
      }
    </Routes>
  );
}

export default App;

