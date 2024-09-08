import React from "react";
import { TypeAnimation } from "react-type-animation";
import Contact from "./Contact";


const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';


export default function Hero() {
  return (
    <>
    <div className="flex flex-col mx-auto mt-14 w-fit">
        {/* Hero Text */}
        <div className="font-bold text-5xl min-w-[496px] text-primaryGreen">
          <TypeAnimation
            className={CURSOR_CLASS_NAME}
            sequence={[500, "Hi, I'm Muhammad Eagel", 1000, (el) => el.classList.remove(CURSOR_CLASS_NAME)]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            speed={30}
          />
        </div>
        <div className="text-xl">
          <TypeAnimation
            className={CURSOR_CLASS_NAME}
            sequence={[2100, "Front-end Web Developer", 1000, (el) => el.classList.remove(CURSOR_CLASS_NAME)]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            speed={30}
          />
        </div>
        <Contact />
    </div>
    <style global jsx>{`
      .custom-type-animation-cursor::after {
        content: '|';
        animation: cursor 1.1s infinite step-start;
      }
      @keyframes cursor {
        50% {
          opacity: 0;
        }
      }
    `}</style>
    </>
  );
}
