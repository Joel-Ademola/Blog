import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  politicsNews,
  businessNews,
  techNews,
  sportNews,
  entertainmentNews,
} from "./data";
import { LuChevronRightCircle } from "react-icons/lu";
// import {
//   collection,
//   addDoc,
//   getDocs,
//   doc,
//   deleteDoc,
//   query,
//   onSnapshot,
// } from "firebase/firestore";
// import { db } from "../firebase";
import { MySlider, Contact, BlogCard } from "../components";
import { DM2 } from "../assets";

const Home = () => {
    const handleNavigate = (post) => {
      navigate(`/blog/blog-details/${post.heading}${post.title}`, { state: post });
    };
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const fetchBlogs = async () => {
  //       const querySnapshot = await getDocs(collection(db, "blogs"));
  //       const fetchedBlogs = [];
  //       querySnapshot.forEach((doc) => {
  //         fetchedBlogs.push({ id: doc.id, ...doc.data() });
  //       });
  //       const sortedBlogs = fetchedBlogs.sort((a, b) => b.time - a.time);
  //       setBlogs(sortedBlogs);
  //     };

  //     fetchBlogs();
  //   }, []);

  //   const handleNavigate = (post) => {
  //     navigate(`/blog-details/${post.title}`, { state: post });
  //   };
  // const blogPosts = [
  //   {
  //     title: "Example Blog Post 2",
  //     description:
  //       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     detail:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eos molestias obcaecati eius consequuntur, quisquam porro quam cumque amet repellendus soluta fuga nulla, possimus exercitationem nisi maiores. Dolor, sint error.",
  //     imageUrl:
  //       "https://files.selar.co/product-images/2022/products/AbiodunMustapha/mind-shift-selar.co-6394632a7d773.jpg",
  //     author: {
  //       name: "Jane Doe",
  //       bio: " Co-Founder",
  //       avatarUrl:
  //         "https://th.bing.com/th/id/OIP.huFB2RHw8SDeY3660LhHVQHaE7?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     },
  //     date: "February 1, 2024",
  //   },
  //   {
  //     title: "Example Blog Post 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     detail:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eos molestias obcaecati eius consequuntur, quisquam porro quam cumque amet repellendus soluta fuga nulla, possimus exercitationem nisi maiores. Dolor, sint error.",

  //     imageUrl:
  //       "https://files.selar.co/product-images/2023/products/AbiodunMustapha/courage-how-ordinary-peop-selar.co-654b59080a534.jpg",
  //     author: {
  //       name: "John Doe",
  //       bio: " Co-Founder",
  //       avatarUrl:
  //         "https://th.bing.com/th/id/OIP.4wvQHbA5nCaNuhUlUF6ejgHaE7?w=276&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     },
  //     date: "January 30, 2024",
  //   },
  //   {
  //     title: "Example Blog Post 2",
  //     description:
  //       "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //     detail:
  //       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eos molestias obcaecati eius consequuntur, quisquam porro quam cumque amet repellendus soluta fuga nulla, possimus exercitationem nisi maiores. Dolor, sint error.",

  //     imageUrl:
  //       "https://files.selar.co/product-images/2022/products/AbiodunMustapha/mind-shift-selar.co-6394632a7d773.jpg",
  //     author: {
  //       name: "Jane Doe",
  //       bio: " Co-Founder",
  //       avatarUrl:
  //         "https://th.bing.com/th/id/OIP.huFB2RHw8SDeY3660LhHVQHaE7?w=275&h=184&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //     },
  //     date: "February 1, 2024",
  //   },

  //   // Add more blog post objects as needed
  // ];
  return (
    <>
      {/* <img src={DM} className=" w-full  object-cover absolute "  alt="" /> */}
      <div className=" snap-y snap-mandatory  rounded-lg min-h-screen  flex justify-center flex-col sm:p-10 p-4 ">
        <MySlider />

        <section className=" animate-[wiggle_1s_ease-in-out_infinite] rotate-3 bg-[#151515] flex flex-col w-full flex-1 items-center justify-start py-10 my-10 transition-transform duration-300 ease-in-out transform hover:scale-105 ">
          <h1 className="font-bebas  text-7xl flex justify-center   sm:text-7xl text-white  py-1">
            {'"STOP EXISTING'}
          </h1>
          <h1 className="font-bebas text-7xl flex justify-center   sm:text-7xl text-white  py-1">
            {' Start Living"'}
          </h1>
          <h1 className=" text-md flex justify-center text-red-600 -rotate-3  py-1">
            {" Abiodun Mustapha"}
          </h1>
        </section>

        {/* <PodBook /> */}
        <div
          id="book"
          className="flex flex-wrap justify-start overflow-auto items-center"
        >
          <h1 className=" bg-primary-0 w-6 font-catamaran text-2xl font-medium text-dark-0  p-2">
            Politics
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-6">
            {politicsNews.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post}  handleClick={() => handleNavigate(post)}/>
            ))}

            {/* {blogs.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              handleClick={() => handleNavigate(post)}
            />
          ))} */}
          </div>
          <button className=" mb-10 text-xs w-40 font-catamaran rounded-md bg-primaryHover-0 text-primary-0 font-bold p-2 pl-4 ">
            <Link to="/blog/politics" className="flex">
              READ MORE HERE
              <LuChevronRightCircle className=" ml-4 mt-[3.5px]" />
            </Link>
          </button>
        </div>

        <div
          id="book"
          className="flex flex-wrap justify-start overflow-auto items-center"
        >
          <h1 className=" bg-primary-0 w-6 font-catamaran text-2xl font-medium text-dark-0  p-2">
            Business
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-6">
            {businessNews.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post} handleClick={() => handleNavigate(post)} />
            ))}
            {/* {blogs.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              handleClick={() => handleNavigate(post)}
            />
          ))} */}
          </div>
          <button className=" mb-10 text-xs w-40 font-catamaran rounded-md bg-primaryHover-0 text-primary-0 font-bold p-2 pl-4 ">
            <Link to="/blog/business" className="flex">
              READ MORE HERE
              <LuChevronRightCircle className=" ml-4 mt-[3.5px]" />
            </Link>
          </button>
        </div>
        <div
          id="book"
          className="flex flex-wrap justify-start overflow-auto items-center"
        >
          <h1 className=" bg-primary-0 w-6 font-catamaran text-2xl font-medium text-dark-0  p-2">
            Technology
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-6">
            {techNews.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post} handleClick={() => handleNavigate(post)}/>
            ))}
            {/* {blogs.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              handleClick={() => handleNavigate(post)}
            />
          ))} */}
          </div>
          <button className=" mb-10 text-xs w-40 font-catamaran rounded-md bg-primaryHover-0 text-primary-0 font-bold p-2 pl-4 ">
            <Link to="/blog/technology" className="flex">
              READ MORE HERE
              <LuChevronRightCircle className=" ml-4 mt-[3.5px]" />
            </Link>
          </button>
        </div>
        <div
          id="book"
          className="flex flex-wrap justify-start overflow-auto items-center"
        >
          <h1 className=" bg-primary-0 w-6 font-catamaran text-2xl font-medium text-dark-0  p-2">
            Sports
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-6">
            {sportNews.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post} handleClick={() => handleNavigate(post)} />
            ))}
            {/* {blogs.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              handleClick={() => handleNavigate(post)}
            />
          ))} */}
          </div>
          <button className=" mb-10 text-xs w-40 font-catamaran rounded-md bg-primaryHover-0 text-primary-0 font-bold p-2 pl-4 ">
            <Link to="/blog/sports" className="flex">
              READ MORE HERE
              <LuChevronRightCircle className=" ml-4 mt-[3.5px]" />
            </Link>
          </button>
        </div>
        <div
          id="book"
          className="flex flex-wrap justify-start overflow-auto items-center"
        >
          <h1 className=" bg-primary-0 w-6 font-catamaran text-2xl font-medium text-dark-0  p-2">
            Entertainment
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 p-6">
            {entertainmentNews.slice(0, 3).map((post, index) => (
              <BlogCard key={index} {...post} handleClick={() => handleNavigate(post)}/>
            ))}
            {/* {blogs.slice(0, 3).map((post, index) => (
            <BlogCard
              key={index}
              {...post}
              handleClick={() => handleNavigate(post)}
            />
          ))} */}
          </div>
          <button className=" mb-10 text-xs w-40 font-catamaran rounded-md bg-primaryHover-0 text-primary-0 font-bold p-2 pl-4 ">
            <Link to="/blog/entertainment" className="flex">
              READ MORE HERE
              <LuChevronRightCircle className=" ml-4 mt-[3.5px]" />
            </Link>
          </button>
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Home;
