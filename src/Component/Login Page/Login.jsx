import React from 'react'
import Header from './Header'
const Login = () => {
  return (
    <>
    <div>
      <Header/>
    </div>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_small.jpg' alt='banner'/>
    </div>
    <div className='bg-black w-full absolute h-[400px] bg-opacity-65'>
          <p className='text-white'>Questions? Call <p>000-800-919-1694</p></p>
          <ul>
            <li>FAQ</li>
            <li>Cookie Preference</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Corporate Information</li>
          </ul>
          <ul>
            <li>Terms of use</li>
            <li>Privacy</li>
          </ul>
    </div>
    <form className='p-12 bg-black bg-opacity-70 absolute w-4/12 my-32 mx-auto right-0 left-0 rounded-md'>
      <p className='text-white font-bold text-3xl mb-8'>Sign In</p>
      <input type='text' placeholder='email' className='p-4 m-2 rounded-sm'/>
      <input type='text' placeholder='email' className='p-4 m-2 rounded-sm'/>
      <button className='text-white font-semibold bg-red-600 hover:bg-red-700 p-2 m-4 w-52 rounded-sm' type='submit'>Sign In</button>
      <p className='text-gray-400'>OR</p>
      <button className='font-semibold text-white bg-gray-500 hover:bg-opacity-25 bg-opacity-40 p-2 m-4 w-52 rounded-sm' type='submit'>Use a sign-in code</button>
      <p className='text-white hover:text-gray-400 hover:underline border-b-emerald-50'>Forgot Password ?</p>
      <p className='text-white'>Remember me</p>
      <span className='text-gray-400 mt-8'>New to Netflix ? <span className='hover:underline font-semibold text-white'>Sign-up now</span></span>
      <p className='text-gray-400 text-xs mt-4 mb-14'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='text-blue-500 hover:underline' href='#'>Learn more.</a></p>
    </form>
    
    </>
  )
}

export default Login
