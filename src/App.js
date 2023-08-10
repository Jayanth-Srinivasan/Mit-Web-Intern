import './App.css';
import { Routes, Route,useNavigate } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import {auth} from './firebase'


function App() {
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  

  const SignIn = () => {
    signInWithPopup(auth,googleProvider)
    .then((a) => {
      console.log("Logged in");
      console.log(a);
      navigate('/home');
    })
    .catch((err) => console.log(err));
  }
  return (
    <Routes>
      <Route path='/' element={<Landing SignIn={SignIn} />} />
      <Route path='/home' element={<Home/>}/>
    </Routes>
  );
}

export default App;

