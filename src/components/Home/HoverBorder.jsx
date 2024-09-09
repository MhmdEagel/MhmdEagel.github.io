import React from "react";

export default function HoverBorder() {
  return (
    <>
      <div className="absolute left-0 top-0 h-1 w-full origin-top-left scale-x-0 bg-primaryGreen transition-all duration-300 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 left-0 h-1 w-full origin-bottom-right scale-x-0 bg-primaryGreen transition-all duration-300 group-hover:scale-x-100"></div>
      <div className="absolute bottom-0 left-0 h-full w-1 origin-bottom-left scale-y-0 bg-primaryGreen transition-all duration-300 group-hover:scale-y-100"></div>
      <div className="absolute bottom-0 right-0 h-full w-1 origin-top-right scale-y-0 bg-primaryGreen transition-all duration-300 group-hover:scale-y-100"></div>
    </>
  );
}
