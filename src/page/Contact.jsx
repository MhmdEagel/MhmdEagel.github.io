import React from "react";
import { motion } from "framer-motion";
import HoverBorder from "../components/Home/HoverBorder";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className="pb-52"
    >
      <h1 className="mt-[5.5rem] text-center text-xl font-bold text-primaryGreen">
        Let's start the conversation and create something remarkable together!
      </h1>
      <div className="mt-24 flex justify-center gap-4 *:cursor-pointer *:bg-primaryCard">
        <a href="mailto:muhammadeagel@gmail.com">
          <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center gap-4 transition-all hover:scale-105">
            <img src="/assets/icons/MailContact.svg" alt="" />
            <h5 className="mt-1 text-lg">Email</h5>
            <HoverBorder />
          </div>
        </a>
        <a href="https://github.com/MhmdEagel">
          <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center gap-4 transition-all hover:scale-105">
            <img src="/assets/icons/GithubContact.svg" alt="" />
            <h5 className="mt-1 text-lg">Github</h5>
            <HoverBorder />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/mhmdtma/">
          <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center gap-4 transition-all hover:scale-105">
            <img src="/assets/icons/LinkedinContact.svg" alt="" />
            <h5 className="mt-1 text-lg">Linkedin</h5>
            <HoverBorder />
          </div>
        </a>
        <a href="https://www.instagram.com/mh_eagel/">
          <div className="group relative flex h-[248px] w-[250px] scale-100 flex-col items-center justify-center gap-4 transition-all hover:scale-105">
            <img src="/assets/icons/InstagramContact.svg" alt="" />
            <h5 className="mt-1 text-lg">Instagram</h5>
            <HoverBorder />
          </div>
        </a>
      </div>
    </motion.div>
  );
}
