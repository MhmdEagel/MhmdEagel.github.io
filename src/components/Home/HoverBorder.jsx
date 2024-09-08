import React from 'react'

export default function HoverBorder() {
  return (
    <>
        <div className="h-1 w-full absolute top-0 bg-primaryGreen left-0 origin-top-left scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        <div className="h-1 w-full absolute bottom-0 bg-primaryGreen left-0 origin-bottom-right scale-x-0 group-hover:scale-x-100 transition-all duration-300"></div>
        <div className="h-full w-1 absolute bottom-0 bg-primaryGreen left-0 origin-bottom-left scale-y-0 group-hover:scale-y-100 transition-all duration-300"></div>
        <div className="h-full w-1 absolute bottom-0 bg-primaryGreen right-0 origin-top-right scale-y-0 group-hover:scale-y-100 transition-all duration-300"></div>
    </>
  )
}
