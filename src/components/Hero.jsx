import React from "react";
import Heroimage from "../assets/Heroimage.png";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-center bg-cover h-screen p-32">
      <div className="flex-column items-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gary-700 leading-tight">
          Elevate your{" "}
          <span className="text-indigo-600 block text-8xl">
            Developer career
          </span>
        </h1>
        <p className="mt-8 font-semibold text-gray-800 text-justify w-90 text-xl">
          Track your skills, set meaningful goals, and visualize your growth —
          all in one smart platform designed for passionate developers.
        </p>
        <div className="mt-8 sm:mt-8">
          <Link to="/signup">
            <button className="bg-indigo-600 rounded-md px-8 py-4 shadow-xl text-white font-semibold mr-8 ">
              Get Started
            </button>
          </Link>
          <Link to="/login">
            <button className="border-2 border-indigo-600 px-8 py-4 rounded-md font-semibold  text-indigo">
              Login <CiLogin style={{ fontSize: "2px" }} />
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center">
        <img src={Heroimage} />
      </div>
    </div>
  );
};

export default Hero;
