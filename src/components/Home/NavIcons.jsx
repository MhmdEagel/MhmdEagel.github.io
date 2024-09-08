import React from "react";
import HoverBorder from "./HoverBorder";
import { NavLink } from "react-router-dom";

export default function NavIcons() {
  return (
    <div className="flex justify-center gap-4 mt-24 *:bg-primaryCard *:cursor-pointer ">
      <NavLink to={"about"}>
        <div className="group w-[250px] h-[248px] flex items-center justify-center flex-col hover:scale-105 scale-100 transition-all relative group">
          <img src="/assets/icons/User.svg" alt="" />
          <h5 className="text-lg mt-1">About</h5>
          <p className="text-sm block text-center">
            Get to know more about my experience and skills
          </p>
          <HoverBorder />
        </div>
      </NavLink>
      <NavLink to={"projects"}>
        <div className="group relative w-[250px] h-[248px] flex items-center justify-center flex-col hover:scale-105 scale-100 transition-all">
          <img src="/assets/icons/Project_icon.svg" alt="" />
          <h5 className="text-lg mt-1">Projects</h5>
          <p className="text-sm text-center">Explore my recent projects</p>
          <HoverBorder />
        </div>
      </NavLink>
      <NavLink to={"contact"}>
        <div className="group relative w-[250px] h-[248px] flex items-center justify-center flex-col hover:scale-105 scale-100 transition-all">
          <img src="/assets/icons/Contact_icon.svg" alt="" />
          <h5 className="text-lg mt-1">Contact</h5>
          <p className="text-sm text-center">
            Let's create something remarkable together!
          </p>
          <HoverBorder />
        </div>
      </NavLink>
    </div>
  );
}
