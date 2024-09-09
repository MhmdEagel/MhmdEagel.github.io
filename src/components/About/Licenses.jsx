import React, { useRef, useState } from "react";
import LicenseList from "./LicenseList";
import SkillList from "./SkillList";

export default function Licenses() {
  return (
    <>
      <h5 className="mb-10 ml-12 mt-8 text-lg font-bold text-primaryGreen">
        Licenses & Certifications
      </h5>
      <div className="ml-12">
        <LicenseList />
      </div>
      <SkillList />
    </>
  );
}
