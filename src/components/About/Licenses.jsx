import React, { useRef, useState } from "react";
import LicenseList from "./LicenseList";
import SkillList from "./SkillList";

export default function Licenses() {
  return (
    <>
      <h5 className="text-primaryGreen text-lg font-bold ml-12 mt-8 mb-10">
        Licenses & Certifications
      </h5>
      <div className=" ml-12 ">
        <LicenseList />
      </div>
      <SkillList />
    </>
  );
}
