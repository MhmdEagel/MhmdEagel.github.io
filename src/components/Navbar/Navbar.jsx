import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="font-bold text-primaryGreen ml-7 mt-7">
      <ul className="flex gap-4">
        <li>
          <NavLink to={"."} className={({isActive}) => (isActive ? "relative after:content-[''] after:w-[75%] after:h-0.5 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0" : "relative after:content-[''] after:w-0 after:h-1 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0")} >Home</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "relative after:content-[''] after:w-[75%] after:h-0.5 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0" : "relative after:content-[''] after:w-0 after:h-1 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0")}  to={"about"}>About</NavLink>
        </li>
        <li>
          <NavLink className={({isActive}) => (isActive ? "relative after:content-[''] after:w-[75%] after:h-0.5 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0" : "relative after:content-[''] after:w-0 after:h-1 after:bg-primaryGreen after:absolute after:-bottom-0.5 after:transition-all after:duration-500 after:left-0")} to={"projects"}>Projects</NavLink>
        </li>
      </ul>
    </nav>
  );
}
