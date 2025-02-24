import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-max p-6 bg-black text-white flex items-center justify-between '>
        <div className="logo">
            <h2>Logo</h2>
        </div>
       <ul className='flex justify-center items-center gap-8'>
       <Link to={'/home'}>Home </Link>
       <Link to={'/home/cart'}>Cart </Link>
            <Link>Contact us</Link>
            <Link>Services</Link>
            <Link>Login/Signup</Link>
       </ul>
    </div>
  )
}

export default Navbar
