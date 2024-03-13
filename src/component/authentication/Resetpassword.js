import { sendPasswordResetEmail } from 'firebase/auth'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../database/Config'
import { Link } from 'react-router-dom'


const Resetpassword = () => {
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
    <div className='inputContainer'>
        <form onSubmit={rPassword}>
          <h1>Reset Password</h1>
        <input id='inputstyle'type='email' placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} value={email} /><br/>
        <button id='submit'>Reset Password</button><br/>
        <Link id='link' to='/'>Go to Login page</Link>
        </form>
    </div>
  )
}

export default Resetpassword