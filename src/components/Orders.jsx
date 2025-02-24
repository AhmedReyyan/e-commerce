import React from "react";
import ListItem from "./ListItem";

const Orders = () => {
  return (
    <div className="w-[84%]  h-[90%] flex flex-col items-center ">
         <div className="w-[95%] h-max  ">
          <h1 className="text-3xl">Orders</h1>
         </div>

         <div className=" w-[95%] h-full mt-2  ">
            <div className="w-[100%] h-max  flex ">
             
                <li className="bg-black text-lime-400 rounded-l-2xl">OrderId</li>
                <li className="bg-black text-lime-400">Date</li>
                <li className="bg-black text-lime-400">Status</li>
                <li className="bg-black text-lime-400">Price</li>
                <li className="bg-black text-lime-400  rounded-r-2xl">Items</li>
             
            </div>
            <div className="w-full h-full   overflow-scroll no-scrollbar">
                 <ListItem/>
                 <ListItem/>
                 <ListItem/>
                 <ListItem/>
                 <ListItem/>
            </div>
         </div>
    </div>
  );
};

export default Orders;
