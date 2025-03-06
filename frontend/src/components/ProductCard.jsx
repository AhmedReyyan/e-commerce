import React from 'react'
import { BiCart } from 'react-icons/bi'
import { SlStar } from 'react-icons/sl'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const ProductCard = (props) => {
    const {title, id , price ,rating, count, image , des} = props
    
    const navigate  = useNavigate()
  return (
    <Link to={`/home/product/${id}`}
    //  onClick={()=>{navigate(`/home/product/${id}`)}} 
     className='w-72 h-72 relative text-white mt-3 p-2 rounded-xl bg-black'>
        <div className='w-full h-[60%]'>
            <img  className='w-full h-full object-cover' src={image} alt={id} />
        </div>
        <div className='flex flex-col justify-start w-full'>
            <span className='w-[100%]'> {title}</span>
            <p>Price : ${price}</p>
            <p className='flex items-center gap-2'><SlStar fill='yellow'  />{rating}</p>
            <p>({count})</p>
        </div>
      {/* <Link to={'cart'} > */}
        <BiCart  className='absolute bottom-2 right-2' size={34}/>
      {/* </Link> */}
    </Link>
  )
}

export default ProductCard
