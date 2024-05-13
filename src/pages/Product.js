import React from 'react'
import { Link } from 'react-router-dom'


const Product = () => {
  return (
    <div>Product details
      <p className='px-2'><Link className='font-bold	no-underline bg-red-500 text-white rounded-full	px-3 py-1 ' id='link' to='/'>  Login</Link></p>
    </div>
  )
}

export default Product