import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { BiCart } from 'react-icons/bi'

const SingleProduct = () => {

   const  {id } = useParams()
   const {data , error ,isPending } = useQuery({
         queryKey :['products'],
         queryFn: ()=>
              fetch(`https://fakestoreapi.com/products/${id}`).then(res=>res.json()
              )
         
   })
    console.log(id);
    console.log(data);
    
  return (
    data&& <div className='w-[84%] h-[95%] mt-4  overflow-scroll no-scrollbar'>
          <div className='w-[100%]  pl-2 h-[80%] flex '>
               <div className="productimages w-[48%] min-h-[100%] ">
                     <div className="singleimage w-[100%] h-[80%]">
                         
                         <img className='w-full h-[100%] object-contain' src={data.image} alt="product" />
                     </div>
               </div>
               <div className="productdata w-[50%] pl-3 flex flex-col gap-2">
                    <p className='text-3xl  flex text-wrap'>{data.title}</p>
                    <p className='bg-black w-max rounded-xl p-2 text-white'>Price: <span className='text-lime-400'>$ {data.price}</span></p>
                     <p className='bg-black w-max rounded-xl p-2 text-white'>Rating : <span className='text-lime-400'>{data.rating.rate}</span></p>
                     <p className='bg-black w-max rounded-xl p-2 text-white'>Reviews : <span className='text-lime-400'>{data.rating.count}</span></p>
                     <p className='bg-black w-max rounded-xl p-2 text-white'>Category : <span className='text-lime-400'>{data.category}</span></p>
                    <div className='w-full flex flex-col gap-4 justify-center items-center'>
                         <button className='w-[50%]'>Buy Now</button>
                         <button className='w-[50%] flex items-center justify-center gap-2'>Add to Cart <BiCart size={26}/></button>
                    </div>
               </div>
          </div>
          <div className="additionaldata">
                 {data.description}
          </div>

     </div>
   )
    
  
}

export default SingleProduct




{/* <div className='w-full h-[100%] flex flex-wrap  no-scrollbar overflow-scroll'>
<div className='w-[50%] h-[80%]  m-4 flex flex-col gap-2 '>
 <img className='w-[100%] h-[80%] object-contain' src={data?.image} alt="" />
 
</div>
<div className='w-[40%] h-max'>
 <h2>Name : {data?.title}</h2>
 <h3>Price: ${data?.price}</h3>
 <h2>Rating : {data?.rating.rate}</h2>
 <h2>reviews : {data?.rating.count}</h2>
 <button>Add TO Cart</button>
 <button>Buy Now</button>
</div>


<div>

 <p>Description : {data?.description}</p>

</div>

</div> */}