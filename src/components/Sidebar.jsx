import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=' w-[16%] min-h-[100%]  flex flex-col gap-10 bg-black text-white'>
          <div className=" mt-4 w-full flex flex-col justify-center items-center">
            <h2>Username</h2>
            <h2>userId</h2>
          </div>
          <ul className=' w-[100%] sidebar justify-center items-center    flex flex-col gap-2'>
            <NavLink to={'products'}>Products</NavLink>
            <NavLink to={'orders'}>Orders</NavLink>
            <NavLink to={'reviews'}>Reviews</NavLink>
            <NavLink to={'transaction'}>Transaction</NavLink>
          </ul>

          <div className='flex flex-col gap-[12px]'>
            <h2 className='pl-4'>Account Management</h2>
            <NavLink to={'profile'}>Profile</NavLink>
            <NavLink to={'/auth'}>Logout</NavLink>
          </div>
    </div>
  )
}

export default Sidebar
