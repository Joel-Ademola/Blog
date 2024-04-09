// import React, { useContext } from "react";
import { Navbar, Footer } from "./components";
import { Route, Routes } from "react-router-dom";
import { Home, PBlog, SBlog, EBlog, TBlog, BBlog, ContactPage,BlogDetails } from "./pages";

const App = () => {
  return (
    // <div className="min-h-screen">
    <div className=" relative isolate lg:px-0 sm:p-8 p-4 bg-[#ffffff] min-h-screen flex flex-row">
      {/* <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className=" relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div> */}
      {/* <div className="sm:flex hidden relative">
      <Sidebar /> </div> */}
      <div className="flex-1 max-sm:w-full max-w-full mx-auto ">
        <Navbar />

        {/* <div className="gradient-bg-welcome"><Navbar /></div> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/blog/politics" element={<PBlog />} />
          <Route path="/blog/entertainment" element={<EBlog />} />
          <Route path="/blog/technology" element={<TBlog />} />
          <Route path="/blog/business" element={<BBlog />} />
          <Route path="/blog/sports" element={<SBlog />} />
          <Route path="/blog/blog-details/:id" element={<BlogDetails />} />
          
        </Routes>
        {/* <Services />
      <Voting />
       */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
