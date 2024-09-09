import React from "react";
import HoverBorder from "./HoverBorder";
import { NavLink } from "react-router-dom";

export default function NavIcons() {
  return (
    <div className="mt-24 flex justify-center gap-4 *:cursor-pointer *:bg-primaryCard">
      <NavLink to={"about"}>
        <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center transition-all hover:scale-105">
          <img src="/assets/icons/User.svg" alt="" />
          <h5 className="mt-1 text-lg">About</h5>
          <p className="block text-center text-sm">
            Get to know more about my experience and skills
          </p>
          <HoverBorder />
        </div>
      </NavLink>
      <NavLink to={"projects"}>
        <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center transition-all hover:scale-105">
          <img src="/assets/icons/Project_icon.svg" alt="" />
          <h5 className="mt-1 text-lg">Projects</h5>
          <p className="text-center text-sm">Explore my recent projects</p>
          <HoverBorder />
        </div>
      </NavLink>
      <NavLink to={"contact"}>
        <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center transition-all hover:scale-105">
          <img src="/assets/icons/Contact_icon.svg" alt="" />
          <h5 className="mt-1 text-lg">Contact</h5>
          <p className="text-center text-sm">My social media contacts</p>
          <HoverBorder />
        </div>
      </NavLink>
    </div>
  );
}
