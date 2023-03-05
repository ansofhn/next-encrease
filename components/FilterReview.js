import React from "react";
import { AiFillStar } from "react-icons/ai";

const FilterReview = ({handleChange}) => {

  const reviewsStars = [1,2,3,4,5]
  return (
    <div className="p-5 mx-6 my-10 border rounded-md md:mx-2 lg:mx-5 border-background/20">
      <div className="mb-4 font-bold uppercase text-background">
        Filter Review
      </div>
      {reviewsStars?.map(review =>{
        return( <div className="flex items-center my-2">
        <input
          type="checkbox"
          value={review}
          onChange={(e)=>handleChange(e)}
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-background"
        />
        <label
          htmlFor="default-checkbox"
          className="flex items-center gap-1 ml-2 text-sm font-medium text-background/80"
        >
          <div>
            <AiFillStar style={{ color: "orange" }} className="text-lg" />
          </div>
          {review}
        </label>
      </div>)
      })}
    </div>
  );
};

export default FilterReview;
