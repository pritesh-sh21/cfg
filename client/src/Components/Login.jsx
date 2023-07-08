import { signInWithEmailAndPassword } from 'firebase/auth';
import React,{useEffect, useState} from 'react'
import { auth } from '../firebase-config';
import {onAuthStateChanged} from 'firebase/auth'
// import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const login=async()=>{
    try{
      await signInWithEmailAndPassword(auth,email,password);
    }
    catch(e){
      console.log(e);
    } 
  }
    return (
        <div className="login template d-flex justify-content-center align-items-center 100-w 100-vh bg-primary">
            <div className='40-w p-5 rounded bg-white'>
                <form onSubmit={login}>
                    <h3>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}} />
                    </div>
                    <div classame="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <input type="checkbox" className="custom-control custom-checkbox" id="check" />
                        <label className="custom-input-label" htmlFor="check">
                            Remember Me
                        </label>
                    </div>
                    <div className='d-grid'>
                        <button className="btn btn-primary">Sign in</button>
                    </div>
                    <p className="text-right">
                        Forgot <a href="#">Password?</a>
                        <a href="/register">Sign up</a>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Login

// export default Login