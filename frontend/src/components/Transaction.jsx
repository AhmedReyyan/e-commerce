import React from 'react'
import PaymentCard from './PaymentCard'
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from 'react-icons/fa'
import { BiCircle } from 'react-icons/bi'

const Transaction = () => {
  return (
    <div className='w-[84%] h-full flex flex-col items-center  overflow-scroll no-scrollbar  '>
      
      <div className='w-[95%] mt-4 h-full'>
             <div className='w-full  ' >
                  <h1 className='font-semibold text-lg'>Payment Methods</h1>
                  <div className='w-full flex no-scrollbar relative overflow-x-scroll justify-start items-center'>
                        <PaymentCard/>
                        <PaymentCard/>
                        <div className='min-w-[350px] m-2 h-[250px] rounded-xl flex  flex-wrap justify-center items-center font-semibold text-xl bg-black text-lime-400'>
                               
                               + Add another Method
                          </div>
                      
                        
                  </div>
             </div>
             <div className='w-[95%] mt-3'>
          <h1 className='text-2xl font-bold'>Transaction</h1>
                </div>
             <div className='w-full flex flex-col justify-center items-center mt-4'>
                 <div className='w-full bg-black text-lime-400 flex p-3 rounded-xl'>
                   <li>Transaction Id</li>
                   <li>Transaction date</li>
                   <li>Account No</li>
                   <li>Payment Method</li>
                   <li>Amount</li>
                 </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
              <div className='w-[100%] rounded-2xl bg-black text-white flex p-4 mt-2 relative'>
                      <li>342435252</li>
                      <li>3-feb-25</li>
                      <li className='flex justify-center items-center gap-3'>5198741313114648652344</li>
                      <li>PayPal</li>
                      <li className='text-red-500'> - $34</li>
                      <FaArrowAltCircleRight className='absolute right-5'/>
                      
                      
                      
                  </div>
             </div>
      </div>
      
    </div>
  )
}

export default Transaction
