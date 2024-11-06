"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [searchTerm,setSearchTerm] =useState("");
  const handleSearch =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
   console.log("Search term:", searchTerm);
   setSearchTerm("");
  };
  return (
    <nav className="stylenavbar">
      <button onClick={() => router.push("/")} className="link">
        Home
      </button>
      <button onClick={() => router.push("/about")} className="link">
        About
      </button>
      <button onClick={() => router.push("/contact")} className="link">
        Contact
      </button>
      {/* serch bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) =>setSearchTerm(e.target.value)}
        className="search-input"
        aria-label="Search"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
