import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { LuChevronLeftCircle } from "react-icons/lu";
export default function BlogDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="flex-1   rounded-xl shadow-stone-400 shadow-xl mb-10 flex-col">
        <img
          src={state.imageUrl}
          alt="vote"
          className="w-full h-[410px] object-cover rounded-xl"
        />
      </div>

      <div className="px-4 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">{state.title}</h1>
        <p className="text-gray-600 mb-4">
          Published on {new Date(state.date).toLocaleString()}
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          {state.description}
        </p>
        <p className="text-lg lg:text-xl leading-relaxed mb-8">
          {state.detail}
        </p>

        {/* Your blog content goes here */}
      </div>
      <span
        className=" font-bebas cursor-pointer flex px-6 py-3  text-dark-0 underline  transition duration-300 ease-in-out "onClick={() => navigate(-1)}
      >
        <LuChevronLeftCircle className=" mr-2 mt-[3.5px]" />
        Go Back
      </span>
      <div className="px-4 lg:px-0 flex items-center justify-between border-t border-gray-300 py-4">
        <div className="flex items-center">
          {/* <img
            src={
              "https://www.wbw.org/wp-content/uploads/2016/03/Male-Avatar.png"
            }
            alt="Author"
            className="w-10 border-2 border-green-600 h-10 object-cover rounded-full mr-4"
          /> */}
          <div>
            <p className="font-semibold">{state.author}</p>
            {/* <p className="text-gray-600">{state.profession}</p> */}
          </div>
        </div>
        <div>
          {/* Other necessary information (e.g., share buttons, tags, etc.) */}
        </div>
      </div>
    </div>
  );
}
