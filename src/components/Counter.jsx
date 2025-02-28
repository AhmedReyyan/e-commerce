import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Global/Counter'

const Counter = () => {

 const dispatch  = useDispatch()
  const selector =  useSelector(state=>state.count.value)

  return (
    <div className='flex'>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <p>{selector}</p>
      <button onClick={()=>dispatch(increment())}>+</button>
    </div>
  )
}

export default Counter
