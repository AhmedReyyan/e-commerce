import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-[100vh] bg-lime-400'>
       <Outlet/>
    </div>
  )
}

export default App
