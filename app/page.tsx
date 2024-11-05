"use client";
import React from "react";
import About from "./about/page";
import Contact from "./contact/page";
// import Footer from "./components/footer";
// import Navbar from "./components/navbar";
import Home from "./components/home";
const Page = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />
      <About />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};

export default Page;
