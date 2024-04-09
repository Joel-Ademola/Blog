import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard(
 { heading,
  title,
  description,
  detail,
  imageUrl,
  author,
  handleClick,
  date}
) {
  return (
    <div className=" flex flex-row border border-gray-200 rounded-md shadow-md overflow-hidden cursor-pointer" onClick={handleClick}>
      <img
        className=" w-40 h-40 hidden sm:block object-cover"
        src={imageUrl}
        alt="woman navigates business closure"
      />
      <div className=" p-4">
        <h3 className=" text-md mb-2 text-dark2-0 font-bold hover:underline">
            {title}

          
        </h3>
        <p className=" text-gray-700 mb-4">{description}</p>
        <div className=" flex justify-between items-center">
          <p className="text-gray-600">{author}</p>
          <p className="text-gray-600">
            <span className="text-xs">{date}</span>
          </p>
        </div>
      </div>
    </div>
    
  );
}
