import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-[100vh] overflow-hidden'>
       <Navbar/>
       <div className='w-[100%] h-[90%] flex items-center justify-between '>
         <Sidebar/>
         <Outlet/>
       </div>
    </div>
  )
}

export default Home
