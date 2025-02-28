import React from 'react'

const Profile = () => {
  return (
    <div className='w-[84%] h-full flex flex-col items-center'>
      <div className='w-[95%] mt-4 '> 
        <h1 className='font-bold text-3xl'>Profile</h1>
      </div>
      <div className='w-[95%] h-full flex flex-wrap justify-between items-between mt-4'>
        <div className='w-[60%] h-full  gap-4 '>

          <div className='flex flex-wrap gap-4'>

          
            <div className='flex flex-col gap-2'>
              <label htmlFor="">First Name</label>
              <input  className='rounded-lg' type="text" />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="">Last Name</label>
              <input  className='rounded-lg' type="text" />
            </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="">User Name</label>
              <input  className='rounded-lg' type="text" />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="">Email</label>
              <input  className='rounded-lg'  type="email" />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="">Address</label>
              <input  className='rounded-lg'  type="text" />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor="">Contact No</label>
              <input  className='rounded-lg'  type="text" />
            </div>
            {/* <div className='flex flex-col gap-2'>
              <label htmlFor="">Email</label>
              <input  className='rounded-lg'  type="email" />
            </div> */}
            <button className='mt-4'>Save details</button>
            
        </div>
        <div className='w-[35%] h-full '>
           <div className='w-full flex flex-col items-center gap-4'>
            <img className='w-full min-w-[150px]' src="/vite.svg" alt="fwkfmlw" />
            <button>Select Image</button>
           </div>
        </div>

      </div>
    </div>
  )
}

export default Profile
