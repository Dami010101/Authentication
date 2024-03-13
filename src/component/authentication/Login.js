import React, { useState } from 'react'
import { Link,  } from 'react-router-dom'
import { auth } from '../database/Config'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    // const navigate = useNavigate()

    const loginuser = (e)=>{
        e.preventDefault()
        signInWithEmailAndPassword( auth, email,password)
        .then((userCredential)=> {
            const user = userCredential.user
            console.log(user)
            toast.success('Login successfully')
            // navigate('/Product')

        })
        .catch((error)=> {
            console.log(error)
            toast.error('Login Unsuccessful')
        })

        setEmail('')
        setPassword('')

    }


  return (
    <div>
        <div className='inputContainer'>
            <h1>Login</h1>
            <form onSubmit={loginuser} >
            <input id='inputstyle' type='email' placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} value={email} /><br/>
            <input id='inputstyle' type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password} /><br/>
                <button id='submit'>Login</button><br/>
                <Link id='link' to='/Resetpassword'>Reset Password</Link>
                <p>Don't have an account? <span><Link id='link' to='/Register'>Register</Link></span></p>
            </form>
        </div>
    </div>
  )
}

export default Login