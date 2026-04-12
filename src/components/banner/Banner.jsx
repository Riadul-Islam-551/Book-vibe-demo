import React from "react";
import heroImg from "../../assets/hero_img.jpg"
import { Link } from "react-router";

const Banner = () => {
  return (
    
    <div className="max-w-300 mx-auto">
        <div className="hero bg-base-200 min-h-[70vh] my-12 rounded-2xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-5 max-w-125">
          <h1 className="text-4xl md:text-5xl font-bold mt-6">
            Books to freshen up your bookshelf
          </h1>
          <Link to="/listedBooks" className="btn btn-success shadow-none text-white">View The List</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
