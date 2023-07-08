import './App.css';
import Form from './Components/Form.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import {auth} from './firebase-config'
import {onAuthStateChanged} from 'firebase/auth'
import { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';
 

function App() {
  const [user,setUser]=useState('');
  onAuthStateChanged(auth,(user1)=>{
    console.log('hi',user1);
    if(user1){
      setUser(user1.auth.email);
    }
  })

  
  return (
    <Router>
      <Navbar />
      <Routes>
        {user && <Route path='/home' element={<Home />}></Route>}
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        {user && <Route path='/' element={<Home />}></Route>}

      </Routes>
    </Router>
  );
}

export default App;
