import React from "react";
import { SkillItem, logoList } from "./SkillItem";

export default function SkillList() {
  return (
    <>
      <h5 className="ml-12 text-primaryGreen font-bold text-lg mt-12">
        Technologies I Use
      </h5>
      <div className="flex flex-wrap max-w-5xl mt-10 justify-center gap-4 mx-auto">
        {logoList.map((logoItem) => (
          <SkillItem
            logoSrc={logoItem.logo}
            desc={logoItem.desc}
            key={logoItem.desc}
          />
        ))}
      </div>
    </>
  );
}
