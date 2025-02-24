import React from 'react'

const CheckOut = () => {
  return (
    <div className='w-[90%] h-96 p-5   bg-black text-white rounded-xl flex flex-col items-center justify-between gap-4'>
      <h1 className='text-lime-400'>Checkout </h1>
      <div className='w-full h-full flex flex-col gap-2'>

      <p className='w-full flex justify-between border-lime-400 border-b-2'><span>Price</span> <span className='text-lime-400'>$50 </span> </p>
      <p className='w-full flex justify-between border-lime-400 border-b-2'><span>Shipping Fee</span>  <span className='text-lime-400'>$50 </span> </p>
      <p className='w-full flex justify-between border-lime-400 border-b-2'><span>Tax</span> <span className='text-lime-400'>$50 </span> </p>
      <p className='w-full flex justify-between border-lime-400 border-b-2'><span>Total</span>  <span className='text-lime-400'>$50 </span> </p>
     
      </div>
      <button className='bg-lime-400 text-black'>Proceed To Checkout</button>
    </div>
  )
}

export default CheckOut
