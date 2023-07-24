import React, { useEffect, useState } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const [route, setroute] = useState('/');
  const location=useLocation()
  useEffect(()=>{
    setroute(location.pathname);

  } );
  return (
    // Navbar Parent
    <div className="container mx-auto flex px-4 pt-4 pb-2">
      {/*Navbar_brand  */}
      <div className="w-7 h-7 flex-1 my-auto pl-5  ">
        <img
          className="w-fit h-full  animate-spin-slow hover:animate-bounce "
          src={logo}
          alt="Brand_logo"
        />
      </div>

      {/* Navbar_Tabs */}
      <div className="flex-1 flex-end items-center h-fit ">
        <ul className="hidden   space-x-6 lg:flex text-lg font-normal ">
          <Link to="/">
            <li
              className={`${
                route === "/" ? "border-b-2 border-rose scale-110" : ""
              }hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300   `}
            >
              Home
            </li>
          </Link>
          <Link to="skills">
            <li
              className={`${
                route === "/skills" ? "border-b-2 border-rose scale-110" : ""
              }hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300   `}
            >
              Skills
            </li>
          </Link>
          <Link to="/experience">
            <li
              className={`${
                route === "/experience"
                  ? "border-b-2 border-rose scale-110"
                  : ""
              }hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300   `}
            >
              Experience
            </li>
          </Link>
          <Link to="/projects">
            <li
              className={`${
                route === "/projects" ? "border-b-2 border-rose scale-110" : ""
              }hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300   `}
            >
              Projects
            </li>
          </Link>
          {/* <li className="hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300 ">
            Testimonials
          </li> */}
          <Link to="/contact">
            <li
              className={`${
                route === "/contact" ? "border-b-2 border-rose scale-110" : ""
              }hover:border-b-2 hover:border-rose hover:scale-110 mt-2 transition-all hover:duration-300   `}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
