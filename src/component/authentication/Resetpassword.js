import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../database/Config'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'


const Resetpassword = () => {


  useEffect(() => {
    Aos.init({
      duration: 2000,
    })
  }, [])


    const [email,setEmail] = useState('')
    const rPassword =   (e)=>{
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
        
       .then(() => {
            toast.success('Check your email for reset link')
          })

          .catch(() => {
            toast.error('Email not sent.')
          })

    }
  return (
    <div className='inputContainer' data-aos='flip-up'>
        <form onSubmit={rPassword}>
          <h1 className='authHeaderText'>Reset Password</h1>
        <input id='inputstyle'type='email' placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} value={email} /><br/>
        <button id='submit'>Reset Password</button><br/>
        <Link id='link' to='/'>Go to Login page</Link>
        </form>
    </div>
  )
}

export default Resetpassword