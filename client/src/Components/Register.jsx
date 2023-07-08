import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';


// import React from 'react'
import './style.css'
// import { Link } from 'react-router-dom'
const Register = () => {
    const [firstName,setFirstName]=useState('');
    const [secName,setSecName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const nav=useNavigate();
    
    const register=async(e)=>{
      e.preventDefault();
      try{
        console.log(email, password);
        const res=await createUserWithEmailAndPassword(auth,email,password);
        nav('/home')
        console.log('btn tapped');

      } 
      catch(e){
        console.log(e);
      } 
    }

    return (
        <div className="signup template d-flex justify-content-center align-items-center minvh-100 bg-primary">
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={register}>
                    <h3 className='text-center'>Sign Up</h3>
                    <div className='mb-2'>
                        <label htmlFor="fname">First Name</label>
                        <input type="text" placeholder='Enter First Name' className='form-control' onChange={(e)=>{setFirstName(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="lname">Last Name</label>
                        <input type="text" placeholder='Enter Last Name' className='form-control' onChange={(e)=>{setSecName(e.target.value)}}/>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter Email' className='form-control' onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div classame="mb-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='Enter Password' className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>
                    <div className='d-grid mt-2'>
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <p className="text-end mt-2">
                        Already Registered? <Link to="/login" className='ms-2'>Sign in</Link>
                    </p>
                </form>
            </div>
        </div>

    )
}

export default Register
