import React from "react";
import reactLogo from "/assets/icons/React.svg";
import htmlLogo from "/assets/icons/HtmlIcon.svg";
import cssLogo from "/assets/icons/CSS.svg";
import tailwindLogo from "/assets/icons/Tailwindcss.svg";
import javascriptLogo from "/assets/icons/JS.svg";
import flutterLogo from "/assets/icons/Flutter.svg";
import githubLogo from "/assets/icons/WhiteGithub.svg";
import sqlLogo from "/assets/icons/MySql.svg";

function SkillItem({ logoSrc, desc }) {
  return (
    <div className="flex h-[160px] w-[150px] translate-x-0 flex-col items-center justify-center rounded-[30px] bg-primaryCard transition-all duration-300 hover:-translate-y-3 hover:scale-105">
      <img src={logoSrc} alt="" />
      <p className="mt-4">{desc}</p>
    </div>
  );
}

let logoList = [
  {
    logo: reactLogo,
    desc: "React",
  },
  {
    logo: htmlLogo,
    desc: "HTML5",
  },
  {
    logo: cssLogo,
    desc: "CSS3",
  },
  {
    logo: tailwindLogo,
    desc: "Tailwind",
  },
  {
    logo: javascriptLogo,
    desc: "Javascript",
  },
  {
    logo: flutterLogo,
    desc: "Flutter",
  },
  {
    logo: githubLogo,
    desc: "Git & Github",
  },
  {
    logo: sqlLogo,
    desc: "Mysql",
  },
];

export { SkillItem, logoList };
