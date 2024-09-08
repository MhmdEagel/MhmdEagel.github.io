import React from 'react'

export default function ProjectItem({title, description, link}) {
  return (
    <div className="bg-primaryCard relative h-[250px] p-4 rounded-lg">
        <h2 id="project-title" className="text-lg">{title}</h2>
        <p id="project-description" className="text-sm mt-4">
          {description}
        </p>
        <a
          href={link}
          target="_blank"
          className="group border border-white absolute bottom-5 right-5 p-3 rounded-lg cursor-pointer flex items-center gap-1 text-sm font-bold hover:bg-white hover:text-black "
        >
          <span>Open Link</span>
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            className="fill-white group-hover:fill-black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.5833 8.74996V11.6667L8.74992 11.6667V26.25H23.3333V20.4167H26.2499L26.2499 29.1667H5.83325V8.75L14.5833 8.74996ZM30.6249 4.375V16.0417H27.7083V9.35395L15.6144 21.4479L13.5521 19.3855L25.6458 7.29162L18.9583 7.29167V4.375H30.6249Z"
            />
          </svg>
        </a>
      </div>
  )
}
