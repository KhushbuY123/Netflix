import React, { useRef, useState } from 'react';
import Header from './Header';
import {checkValidate} from '../../utils/validate'
import { Banner_URL } from '../../utils/constant';
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import {auth} from '../../utils/firebase'

const Login = () => {

   // In-page form changing.................
  const[isSignInform,setisSignInform]=useState(true);

  // Error message State variable...........
  const[errormessage,seterrormessage]=useState(null)

  // Setting sign-in and sign-up form.......
  const toggleSignInform=()=>{
      setisSignInform(!isSignInform);
  }
  // Refrences of inputs.....................
  const email=useRef(null)
  const password=useRef(null)
  // const name=useRef(null)

  // from-validation refrencing from util....
  const handlesubmit=()=>{
    const message=checkValidate(email.current.value,password.current.value)
      seterrormessage(message) 
  }

  return (
    <>
      <Header/>
      <div className='relative h-screen'>
        {/* bg-image */} <img
          src={Banner_URL}
          alt='banner'
          className='object-cover w-full h-full absolute inset-0'
        />
       
         {/* form */}
        <form className='bg-black bg-opacity-70 absolute w-4/5 md:w-4/12 my-32 mx-auto right-0 left-0 rounded-md p-8 md:p-12'>
        <p className='text-white font-bold text-3xl mb-8'>{isSignInform?"Sign In":"Sign Up"}</p>
        <input ref={email} type='text' placeholder='Email or mobile number' className='text-white bg-gray-900 bg-opacity-35 border border-white p-4 m-2 rounded-md w-full' />
       {!isSignInform && <input type='text' placeholder='Name' className='text-white bg-gray-900 bg-opacity-35 border border-white p-4 m-2 rounded-md w-full' />}
        <input ref={password} type='password' placeholder='Password' className='text-white bg-gray-900 bg-opacity-35 border border-white p-4 m-2 rounded-md w-full' />
        <p className='text-red-500'>{errormessage}</p>
        <button className='text-white font-semibold bg-red-600 hover:bg-red-700 p-2 m-4 w-full rounded-md' type='submit' onClick={handlesubmit} onSubmit={(e)=>{e.preventDefault()}}>{isSignInform?"Sing In":"Sign Up"}</button>
        <p className='text-gray-400'>OR</p>
        <button className='font-semibold text-white bg-gray-500 hover:bg-opacity-25 bg-opacity-40 p-2 m-4 w-full rounded-md' type='button'>Use a sign-in code</button>
        <p className='text-white hover:text-gray-400 hover:underline border-b-emerald-50'>Forgot Password ?</p>
        <div className='flex items-center'>
          <input type='checkbox' className='mr-2' />
          <p className='text-white'>Remember me</p>
        </div>
        <p className='text-gray-400 mt-8 cursor-pointer'>{isSignInform?"New to Netflix?":"Already Registered?"} <span className='hover:underline font-semibold text-white' onClick={toggleSignInform}>{isSignInform?"Sign-Up":"Sign-In"}</span></p>
        <p className='text-gray-400 text-xs mt-4 mb-6'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-blue-500 hover:underline' href='#'>Learn more.</a></p>
      </form>
      </div> 
    </>
  );
};
export default Login;
