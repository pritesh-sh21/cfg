// import React from 'react';
import React,{useEffect, useState} from 'react'
// import './Home.css';
import { auth } from '../firebase-config';
import {onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [user,setUser]=useState('');
  onAuthStateChanged(auth,(user1)=>{
    if(user1){
      setUser(user1.uid);
    }
  })
  const nav=useNavigate();

  useEffect(()=>{
    if(!user){
      nav('/register')
    }

  },[]);

  return (
    <div className="home">
      <header>
        <h1>Welcome to My Website</h1>
      </header>
      <section>
        <p>This is the home page of my React.js website.</p>
      </section>
      <footer>
        <p>© 2023 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;