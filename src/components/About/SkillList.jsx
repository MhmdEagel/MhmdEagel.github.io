import React from "react";
import { SkillItem, logoList } from "./SkillItem";

export default function SkillList() {
  return (
    <>
      <h5 className="ml-12 mt-12 text-lg font-bold text-primaryGreen">
        Technologies I Use
      </h5>
      <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-4">
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
