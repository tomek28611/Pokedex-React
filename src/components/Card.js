
import React from "react";
import { Link } from 'react-router-dom'

const Card = ({ id, image, name, types, onClick }) => {
  return (
    <div className="bg-white shadow-2xl cursor-pointer hover:bg-gray-200">
    <Link to={`/pokemon/${id}`}>
    <img className="" src={image} alt="" />
    <h2 className="bg-[#ff3e4e] text-gray-300 text-2xl p-6 text-center capitalize">{name}</h2>
    </Link>

    </div>
  );
}; 

export default Card;