import React from "react";

export default function Footer() {
  return (
    <section
      id="news"
      className="py-16 px-20 bg-dark-0 justify-center text-black"
    >
      <div className=" bg-light-0 border rounded-xl border-none sm:w-12/12 self-center flex-row  p-4 lg:p-5">
        <div className=" text-center  py-3 py-lg-1">
          <h2 className=" font-bebas font-bold text-3xl mb-4">
            SIGN UP FOR MY WEEKLY NEWSLETTER
          </h2>
        </div>
        <form
          className="flex justify-items-center justify-center  flex-wrap lg:flex-nowrap"
          method="post"
        >
          <div className="my-2">
            <input
              className="  rounded-full bg-light-0 outline-1  border border-dark-0 text-black p-3 mr-6 shadow-sm md:w-96 w-full"
              type="email"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="block rounded-full bg-[#f43737] px-4 py-3 text-center text-sm font-bold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
      {/* <div className="w-full flex bg-[#ffffff] md:justify-center border rounded-lg border-black justify-between items-center flex-col p-4 "> */}
      <div className="w-full flex sm:flex-row flex-col justify-between items-center">
        <div className="flex flex-[0.5] justify-center items-center">
          {/* <img src={cipherlogo2} alt="logo" className=" rounded-xl w-7/12" /> */}
        </div>
      </div>

      <div className=" w-full h-[0.25px] bg-gray-400 mt-5 " />

      <div className=" w-full flex justify-between items-center mt-3">
        <p className="text-white text-right text-xs">All rights reserved</p>
        <p className="text-white text-left text-xs">
          © 2024 by Joel Ademola.
        </p>
      </div>
      {/* </div> */}
    </section>
  );
}
