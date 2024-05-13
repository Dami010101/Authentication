import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
// const url = 'http://localhost:8002/api/user/register_user'
const url = 'https://auth-pw4t.onrender.com/api/user/register_user'






const Register = () => {



    // const [email,setEmail] = useState('')
    // const [password,setPassword] = useState('')
    

    // const registeruser = async(e)=>{
    //     e.preventDefault()
    // const userData = {email, password}
    //   try {
    //     const registerUserAuth = await axios.post('http://localhost:8002/api/user/register_user', userData)
    //     toast.success('User registered successfully')
    //       if (registerUserAuth === 200) {
    //         console.log('User registered successfully')
            
    //       }else{
    //         console.log('User not registered')
    //         toast.error('User not registered')
    //       }
          
    //     } catch (error) {
    //   console.log('Error: ' + error)
    // }

    //     console.log(email);
    //     console.log(password);
    //     setEmail('')
    //     setPassword('')
    // }


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const registerUser = async (e) => {
    e.preventDefault();
      const userData = { email, password };
    try {
      const register = await axios.post( url , userData);
      console.log(register);
      toast.success('Created successfully');
      if (register.status === 200) {
        console.log('User registered successfully');
        navigate('/');
      } else {
        console.log('User registration failed:', register.data);
      }
    } catch (error) {
      console.error('An error occurred during registration:', error);
      toast.error('Not created');
    }
  
    setEmail('');
    setPassword('');
  };

  return (
    <div className="w-full max-w-xs mx-auto py-4">
    <form onSubmit={registerUser} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
    <h1 className='text-blue-500 font-bold text-xl mb-2'>Register</h1>
  
      <div className="mb-4">
        {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label> */}
        <input onChange={(e)=>setEmail(e.target.value)} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
      </div>
      <div className="mb-6">
        {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label> */}
        <input onChange={(e)=>setPassword(e.target.value)} value={password} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
        {/* <input  class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Confirm Password"/> */}
        <p className="text-red-500 text-sm italic ">Already have an account?<span className='px-2'><Link className='font-bold	no-underline bg-red-500 text-white rounded-full	px-3 py-1 ' id='link' to='/'>  Login</Link></span></p>
      </div>
      <div className="flex items-center justify-between">
        <button id='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
        {/* <a class="inline-block align-baseline font-bold text-sm no-underline text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
  
      </div>
    </form>
  
  </div>
  )
}

export default Register