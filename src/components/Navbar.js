import React from "react";

const Navbar = () => {

  return (
    <div className="bg-red-500 py-4 px-4 sticky top-0">
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="/">
            <h2 className="text-white text-4xl">Pokedex</h2>
          </a>
    
        </div>
      </div>
    </div>
  );
};

export default Navbar;
