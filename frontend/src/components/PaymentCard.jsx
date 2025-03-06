import React from 'react'
import { CgPaypal } from 'react-icons/cg'

const PaymentCard = () => {
  return (
    <div className='min-w-[350px] m-2 h-[250px] rounded-xl flex  flex-col bg-black justify-start items-start text-white'>
        <div className='w-max h-max flex gap-3 p-2 justify-center items-center text-white '>

         <CgPaypal size={34} fill=''/>
         <h1 className='text-lg font-bold'>PayPal</h1>
        </div>
        <div className='w-max ml-4  mt-2'>
              <p>Card Number</p>
              <p>42535****************3434</p>
        </div>
        <div className='w-max ml-4  mt-2'>
              <p>Expiry Date</p>
              <p>11/34</p>
        </div>
    </div>
  )
}

export default PaymentCard
