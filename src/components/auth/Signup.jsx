import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div  className='w-[40%] flex flex-col justify-center items-center  border-2  border-lime-900 bg-black text-white  rounded-xl'>
      <h1>SignUp</h1>
      <form  className='w-[80%] flex flex-col gap-3 justify-center'>
      <div>
        <h2>first Name</h2>
        <input type="text" />
      </div>
      <div>
        <h2>Last Name</h2>
        <input type="text" />
      </div>
      <div>
        <h2>E-mail</h2>
        <input type="email" />
      </div>
      <div>
        <h2>password</h2>
        <input type="password" />
      </div>
      <div>
        <h2>Username</h2>
        <input type="text" />
      </div>
      <button className='bg-lime-400 text-black'>Submit</button>
      </form>
      <p>Already have a Account? <Link to={'login'}>Sign in </Link></p>
    </div>
  )
}

export default Signup
