import React from 'react'
import { BiCircle } from 'react-icons/bi'
import { CiCircleList } from 'react-icons/ci'
import { FaArrowAltCircleDown } from 'react-icons/fa'

const ListItem = () => {
  return (
   <div className='w-full '> 
    <div className='w-full rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
        <li>342435252</li>
        <li>3-feb-25</li>
        <li className='flex justify-center items-center gap-3'><BiCircle fill='yellow '/> pending</li>
        <li>$45.60</li>
        <li>34</li>
        <FaArrowAltCircleDown className='absolute right-5'/>
        
        
        
    </div>

    
    
    </div>
  )
}

export default ListItem
