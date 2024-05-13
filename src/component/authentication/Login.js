import React, { useEffect, useState } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import { toast } from 'react-toastify'
import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'
import { useCookies } from 'react-cookie'
// const url = 'http://localhost:8002/api/user/login_user'
const url = 'https://auth-pw4t.onrender.com/api/user/login_user'





const Login = () => {

    // useEffect(() => {
    //     Aos.init({
    //       duration: 2000,
    //     })
    //   }, [])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [cookies, setcookies] = useState(['access_token'])

  
  
    const loginUser = async (e) => {
      e.preventDefault();
        const userData = { email, password };
      try {
        const login = await axios.post( url , userData);
        console.log(login);
        if (login.status === 200) {
          setcookies('access_token', login.data.token)
          window.localStorage.setItem('userId', login.data.userid)
          toast.success('Logged in successfully');
          console.log('Logged in successfully');
          navigate('/product');
        } else {
          console.log('Login failed:', login.data);
        }
      } catch (error) {
        console.error('An error occurred during login:', error);
        toast.error('Not logged in');
      }
    
      setEmail('');
      setPassword('');
    };


  return (
        <div className="w-full max-w-xs mx-auto py-4">

  <form onSubmit={loginUser}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
  <h1 className='text-blue-500 font-bold text-xl mb-2'>Login</h1>

    <div className="mb-4">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
        Email
      </label> */}
      <input  onChange={(e)=>setEmail(e.target.value)} value={email}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      {/* <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label> */}
      <input onChange={(e)=>setPassword(e.target.value)} value={password}  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
      <p className="text-red-500 text-sm italic ">Don't have an account?<span className='px-2'><Link className='font-bold	no-underline bg-red-500 text-white rounded-full	px-2 py-1 hover:bg-red-700' id='link' to='/Register'>  Register</Link></span></p>
    </div>
    <div className="flex items-center justify-between">
      <button id='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Login
      </button>
      {/* <a className="inline-block align-baseline font-bold text-sm no-underline text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a> */}
      <Link className="inline-block align-baseline font-bold text-sm no-underline text-blue-500 hover:text-blue-800"  id='link' to='/Resetpassword'>Forgot Password?</Link>

    </div>
  </form>

</div>


    
  )
}

export default Login