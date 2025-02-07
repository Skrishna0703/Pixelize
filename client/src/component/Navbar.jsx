import React, { useContext } from "react";
import { assets } from "../assets/assets.js";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>
    </div>
  );
};
export default Navbar;
