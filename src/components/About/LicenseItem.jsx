import React from "react";
import { motion } from "framer-motion";

export default function LicenseItem({
  title,
  organization,
  issued,
  expires,
  credentialId,
  credentialLink,
  imgLink,
}) {
  return (
    <motion.div
      id="licence-item"
      className="relative mr-4 flex h-[265px] min-w-[500px] gap-4 rounded-lg bg-primaryCard p-4"
    >
      <div className="h-fit w-fit bg-white p-1">
        <img src={imgLink} alt="" />
      </div>
      <div>
        <h5 id="license-title" className="text-lg font-bold">
          {title}
        </h5>
        <p className="text-sm">{organization}</p>
        <p className="mt-4 text-sm text-white text-opacity-60">
          Issued {issued} . Expires {expires}
        </p>
        <p className="text-sm text-white text-opacity-60">{credentialId}</p>
      </div>
      <a
        href={credentialLink}
        target="_blank"
        className="group absolute bottom-10 right-10 flex cursor-pointer items-center gap-1 rounded-lg border border-white p-3 text-sm font-bold hover:bg-white hover:text-black"
      >
        <span>Show Credential</span>
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
    </motion.div>
  );
}
