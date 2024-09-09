import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="ml-7 mt-7 font-bold text-primaryGreen">
      <ul className="flex gap-4">
        <li>
          <NavLink
            to={"."}
            className={({ isActive }) =>
              isActive
                ? "relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-[75%] after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
                : "relative after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-0 after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-[75%] after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
                : "relative after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-0 after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
            }
            to={"about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-[75%] after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
                : "relative after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-0 after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
            }
            to={"projects"}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "relative after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-[75%] after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
                : "relative after:absolute after:-bottom-0.5 after:left-0 after:h-1 after:w-0 after:bg-primaryGreen after:transition-all after:duration-500 after:content-['']"
            }
            to={"contact"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
