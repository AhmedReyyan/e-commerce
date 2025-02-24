import React, { useState } from 'react'
import ProductCard from './ProductCard'

const Products = () => {
     const [products , setproducts] = useState()
    const data = fetch('https://fakestoreapi.com/products').then(res=>res.json()).then(res=>{
    console.log(res)
        if (!products) {
            
            return setproducts(res)}
        }
        
    
)
console.log(products);


  return (
    <div className='w-[84%] h-[100%] flex flex-wrap justify-center items-center'>
      <div className='w-[95%] flex justify-between items-center border-b-2 border-black'>
        <h1 className='font-bold text-2xl'>Products</h1>
           <div className='flex gap-4 w-max h-max'>
            <select className='rounded-xl'>
              <option value="">Price</option>
              <option value="">Category</option>
              <option value="">sales</option>
              <option value="">reviews</option>
              <option value="">Date</option>
            </select>
           <button className='h-max p-2'>Apply Filter</button>
           </div>
        </div>
      <div className='w-[100%] h-[90%] flex  flex-wrap  overflow-scroll no-scrollbar justify-around  pt-6'>
        
      {
        products?.map((item,index)=>{
        
         return  <ProductCard count={item.rating.count} rating={item.rating.rate} key={item.id} id={item.id}  image={item.image} title={item.title.length>30?item.title.slice(0,30)+"....":item.title} price={item.price} />}
        )
      }
     
     </div>
    </div>
  )
}

export default Products
