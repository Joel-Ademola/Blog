import React from "react";
import Slider from "react-slick";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { DM, DM2, DM3, DM4, DM5, DM6, DM7 } from "../assets";
const icons = [
  {
    name: <FaFacebookF />,
    href: "https://web.facebook.com/officialabiodunmustapha/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0",
  },
  { name: <FaTwitter />, href: "https://twitter.com/" },
  {
    name: <FaYoutube />,
    href: "https://www.youtube.com/",
  },
  {
    name: <FaInstagram />,
    href: "https://www.instagram.com/",
  },
  {
    name: <FaLinkedin />,
    href: "https://www.linkedin.com/",
  },
];
const sliderData = [
  {
    url: "https://th.bing.com/th/id/R.81e205c89e582f7c265fa3a77abedfb1?rik=E%2fkhgwhKlvUrHA&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://static.vecteezy.com/system/resources/previews/000/228/916/original/breaking-news-tv-concept-backdrop-banner-vector.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://th.bing.com/th/id/R.eabc8d71caa9759b83b4bcbd7ece1944?rik=5xteUB3gfjJ%2fFg&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://th.bing.com/th/id/R.ae7e7a60681856a6b4c49db409f714da?rik=X%2fI4AjrfWhHf7g&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://th.bing.com/th/id/R.d79be262833d0ad4e2341702efcd0943?rik=eEMjvfWEcple9A&pid=ImgRaw&r=0",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://www.myzeo.com/wp-content/uploads/2019/03/Political-News-1-1024x465.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
  {
    url: "https://profiletree.com/wp-content/uploads/2019/11/Business-News-Articles-_-How-to-Keep-Readers-Coming-Back.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure recusandae ex inventore, odit nam debitis saepe, adipisci nobisconsequuntur consectetur dolorum molestias totam quisquamvoluptate? Ea autem eum recusandae excepturi.",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const MySlider = () => {
  return (
    <>
      {/* <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
        <div className=" absolute inset-0 sm:pl-20 sm:py-96 sm:self-center w-full pl-2 py-40 text-left text-[#ffffff] sm:mt-10">
          <h1 className="font-bebas text-4xl font-bold tracking-wide sm:text-6xl">
            Abiodun Mustapha
          </h1>
          <h1 className="font-bebas text-3xl mt-6 font-medium tracking-normal  sm:text-3xl">
            Entrepreneur, Speaker, Consultant, Author, Founder: Growth Hub
            Africa
          </h1>
          <div className="mt-6 max-w-[1080px] flex items-center justify-start gap-x-6">
            {icons.map((icon) => (
              <Link
                key={icon.name}
                className="rounded-md border-none p-2.5 text-xl font-semibold shadow-sm hover:bg-black hover:text-[#ffffff] text-black bg-[#ffffff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                to={icon.href}
              >
                {icon.name}
              </Link>
            ))}
          </div>
        </div>
      </div> */}
      <Slider {...settings}>
        {sliderData.map((sliderData, index) => (
          <div key={index} className=" relative">
            <img
              src={sliderData.url}
              alt="logo"
              className=" saturate-150 object-cover w-full h-[100vh] object-top rounded-lg"
            />
            {/* <div
          style={{
            backgroundImage: `url(src/assets/img3.jpg)`,
            backgroundSize: "cover",
            height: "90vh", // Set your desired height
          }}
        /> */}{" "}
            {/* <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Sara Lamalo
                </h5>
                <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                  20 July 2022
                </p>
              </div>
              <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Growth
              </h5>
            </figcaption> */}
            <div className="  absolute inset-0  sm:pt-80 sm:self-center w-full  pt-80 text-left text-[#ffffff]  sm:mt-12 mt-12">
              {/* <h1 className="font-bebas text-4xl font-bold tracking-wide sm:text-7xl">
                Abiodun Mustapha
              </h1> */}
              <h1 className=" font-catamaran text-xl mt-6 font-medium bg-[#00000066] text-primaryHover-0  text-center tracking-tighter  sm:text-4xl">
                {sliderData.description}
              </h1>
              <div className="mt-6 max-w-[1080px] mx-20 flex items-center justify-start gap-x-6">
                {icons.map((icon) => (
                  <Link
                    key={icon.name}
                    target="_blank"
                    className="rounded-md border-none p-2.5 text-xl font-semibold shadow-sm hover:bg-black hover:text-[#ffffff] text-black bg-[#ffffff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    to={icon.href}
                  >
                    {icon.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
        {/* bg-[url(/src/assets/img3.jpg)] */}
        {/* Add more slides here with similar structure */}
      </Slider>
    </>
  );
};

export default MySlider;
