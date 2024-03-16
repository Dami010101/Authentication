import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { auth } from '../database/Config'
import { Link } from 'react-router-dom'
import Aos from 'aos'
import 'aos/dist/aos.css'



const Register = () => {

    useEffect(() => {
        Aos.init({
          duration: 2000,
        })
      }, [])

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [Cpassword,setCpassword] = useState('false')

    const registeruser = (e)=>{
        e.preventDefault()
        if (password !==Cpassword){
            console.log('Password does not match')
            toast.error('Password does not match')
        }
        if (password.length < 7){
            console.log('Password is less than 7 characters')
            toast.error('Password is less than 7 characters')
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            const user = userCredential.user
            console.log(user)
            toast.success('Registered successfully')

        })
        .catch((error)=> {
            console.log(error)
            toast.error('Registration Unsuccessful')
        })

        console.log(email);
        console.log(password);
        console.log(Cpassword);
        setEmail('')
        setPassword('')
        setCpassword('')
    }

  return (
    <div className='inputContainer' data-aos='flip-right' >
        <h1 className='authHeaderText'>Register</h1>
        <form onSubmit={registeruser}>
            <input id='inputstyle' type='email' placeholder='Enter your email address' onChange={(e)=>setEmail(e.target.value)} value={email} /><br/>
            <input  id='inputstyle'type='password' placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} value={password} /><br/>
            <input id='inputstyle' type='password' placeholder='Confirm your password' onChange={(e)=>setCpassword(e.target.value)} value={Cpassword} /><br/>
            <button id='submit'>Register</button>
            <p>Already have an account? <span><Link id='link' to='/'>Login</Link></span></p>

        </form>
    </div>
  )
}

export default Register