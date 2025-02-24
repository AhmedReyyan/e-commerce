import React from 'react'
import ListItem from './ListItem'

const Reviews = () => {
  return (
    <div className='w-[84%] h-[100%] flex flex-col items-center  '>
      <div className='w-[90%] mt-4 '>
             <h1 className='text-3xl'>Reviews</h1>
      </div>
      <div className='w-[90%]   mt-4'>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>

      </div>
    </div>
  )
}

export default Reviews
