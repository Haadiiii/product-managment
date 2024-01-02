import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-sm bg-pink-900 flex flex-col justify-center items-center px-16 py-7 max-md:px-5">
      <div className="flex w-full max-w-[1214px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
        <div className="text-white text-3xl font-bold uppercase">Logo</div>
        <div className="flex justify-between gap-5 self-start items-start">
          <Link to="/">
            <div className="text-zinc-50 text-sm cursor-pointer">Home</div>
          </Link>
          <Link to="/listing">
            <div className="text-white text-sm self-stretch cursor-pointer">
              Product Listing
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
