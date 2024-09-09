import React from "react";
import { TypeAnimation } from "react-type-animation";

const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

export default function Hero() {
  return (
    <>
      <div className="mx-auto mt-14 flex w-fit flex-col">
        {/* Hero Text */}
        <div className="mb-4 min-w-[496px] text-5xl font-bold text-primaryGreen">
          <TypeAnimation
            className={CURSOR_CLASS_NAME}
            sequence={[
              500,
              "Hi, I'm Muhammad Eagel",
              1000,
              (el) => el.classList.remove(CURSOR_CLASS_NAME),
            ]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            speed={30}
          />
        </div>
        <div className="text-xl">
          <TypeAnimation
            className={CURSOR_CLASS_NAME}
            sequence={[
              2100,
              "Front-end Web Developer",
              1000,
              (el) => el.classList.remove(CURSOR_CLASS_NAME),
            ]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            speed={30}
          />
        </div>
      </div>
      <style global jsx>{`
        .custom-type-animation-cursor::after {
          content: "|";
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
