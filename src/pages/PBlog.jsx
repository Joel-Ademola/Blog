import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { BlogCard } from "../components";
import { politicsNews } from "./data";

import { useNavigate } from "react-router-dom";
export default function PBlog() {
  //   const { state } = useLocation();
  const navigate = useNavigate();
  const handleNavigate = (post) => {
    navigate(`/blog/blog-details/${post.heading}${post.title}`, { state: post });
  };
  return (
    <>
    

      <div className="  snap-y snap-mandatory  rounded-lg   flex justify-center flex-col sm:p-10 p-4 ">
        <div className="flex rounded-lg bg-[url('https://www.myzeo.com/wp-content/uploads/2019/03/Political-News-1-1024x465.jpg')] py-40 justify-center">
          <div className="w-full  bg-[#0000007a] text-light-0 text-center z-30">
            <h3 className=" font-light my-3 text-3xl">
              Latest Politics News and Blog
            </h3>
            <h6 className=" font-thin text-md ">
              You can rely on our amazing news, stay informed, stay inspired –
              your go-to source for the latest news and insights!
            </h6>
          </div>
        </div>
        <div className=" flex justify-center">

        <div className="grid w-9/12 grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 pt-12">
          {politicsNews.map((post, index) => (
            <BlogCard key={index} {...post} handleClick={()=>handleNavigate(post)} />
          ))}
        </div>
        </div>
      </div>
    </>
  );
}
