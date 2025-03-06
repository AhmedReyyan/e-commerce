import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <div  className='w-full h-[100%] flex flex-col justify-center items-center'>
      Authentication
      <Outlet/>
    </div>
  )
}

export default Auth
