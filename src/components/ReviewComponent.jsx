import React from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa'
import { FaStarHalfStroke } from 'react-icons/fa6'

const ReviewComponent = () => {
  return (
     <div className="w-full rounded-2xl bg-black text-white flex p-4 mt-2 relative ">
              <img src={'/vite.svg'} alt="product image" />
              <div className="w-max h-full ml-6">
                <p> Review :thi is one of the best products i have ever used</p>
                <p className="flex justify-start gap-1 items-center">
                  Rating : 
                  <FaStar  color="yellow"/>
                  <FaStar  color="yellow"/>
                  <FaStar  color="yellow"/>
                  <FaStar  color="yellow"/>
                 
                  <FaStarHalfStroke     color="yellow"/>
                  
                </p>
              </div>
              <FaArrowAltCircleRight className="absolute right-5" />
            </div>
  )
}

export default ReviewComponent
