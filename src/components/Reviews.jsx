import React from "react";
import ListItem from "./ListItem";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import ReviewComponent from "./ReviewComponent";

const Reviews = () => {
  return (
    <div className="w-[84%] h-[100%] flex flex-col items-center  ">
      <div className="w-[90%] mt-4 ">
        <h1 className="text-3xl">Reviews</h1>
      </div>
      <div className="w-[90%]   mt-4">
       <ReviewComponent />
       <ReviewComponent />
       <ReviewComponent />
       <ReviewComponent />
      </div>
    </div>
  );
};

export default Reviews;
