import React from 'react'
import CheckOut from './CheckOut'
import Counter from './Counter'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Global/Counter'

const Cart = () => {


  const dispatch  = useDispatch()
  const selector =  useSelector(state=>state.count.value)
  const count =  useSelector(state=>state.count.initial)




  return (
    <div className='w-[84%]  h-[100%]  flex flex-col items-center mt-2 overflow-hidden'>
      <div className='w-[95%]'>
      <h1 className='text-3xl font-bold'>Cart</h1>
        
      </div>
      <div className='w-[100%] mt-4 flex flex-wrap justify-between'>
        <div className="w-[70%] flex justify-center">
           <table className='bg-black h-max text-white w-[95%]'>
            <tbody >
                <tr className='text-lime-400'>
                    <td>Name</td>
                    <td>Id</td>
                    <td>Amount</td>
                    <td>Price</td>
                </tr>
                <tr>
                    <td><img src="" alt="" />shirt</td>
                    <td>09898</td>
                    <td>
                     <button onClick={()=>dispatch(decrement())}>-</button>
                      
                      {selector}
                      <button onClick={()=>dispatch(increment())}>+</button>

                      
                      </td>
                    <td>$30</td>
                </tr>
                <tr>
                    <td>shirt</td>
                    <td>09898</td>
                    <td>
                     <button onClick={()=>dispatch(decrement())}>-</button>
                      

                      
                      </td>

                    <td>$30</td>
                </tr>
                <tr>
                    <td>shirt</td>
                    <td>09e2348</td>
                    <td>3</td>
                    <td>$30</td>
                </tr>
            </tbody>
           </table></div>
           <div className='w-[30%] flex justify-center'>
            
           <CheckOut/>
           </div>
      </div>
    </div>
  )
}

export default Cart
