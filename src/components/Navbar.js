import React, { useState, useEffect } from "react";
import Logo from './img/logo.png';

const Navbar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []);

  return (
    
    <div className="bg-[#ff3e4e] py-4 px-4 sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">

          <a href="/">
            <img src={Logo} alt="" className="w-20 " />
          </a>
          <div className="">
            <a href="/about" className={`text-white mr-4 ${active === "/about" ? "border-b-2 border-white" : ""}`} activeClassName="border-b-2 border-white">About</a>
            <a href="/" className={`text-white ${active === "/" ? "border-b-2 border-white" : ""}`} activeClassName="border-b-2 border-white">Pokemons</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

