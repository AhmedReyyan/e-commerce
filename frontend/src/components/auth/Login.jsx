import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-[30%] bg-black text-white  rounded-xl flex flex-col items-center'>
      <h1>Login</h1>
      <form  className='w-[80%] flex flex-col items-center gap-7 p-4'>
        <div>
          <h2>username</h2>
          <input type="text" />
        </div>
        <div>
          <h2>password</h2>
          <input type="text" />
        </div>
        <Link to={'/home'}><button className='bg-lime-400 text-black'>Submit</button></Link>
      </form>
      <p>New Member?<Link to={'/auth'}> Register here</Link></p>
    </div>
  )
}

export default Login
