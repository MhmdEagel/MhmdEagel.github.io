import React from "react";
import ProjectItem from "./ProjectItem";

export default function ProjectList() {
  return (
    <div className="mt-16 p-4 grid grid-cols-3 justify-evenly gap-4">
      <ProjectItem
        title={"Gawr Gura Fanpage"}
        description={"A website about a popular vtuber from YouTube"}
        link={"https://gurafanpage.netlify.app/"}
      />
      <ProjectItem
        title={"Movie Explorer"}
        description={"A flutter aplication to search movie and tv series"}
        link={"https://github.com/MhmdEagel/movie_explorer_mobile"}
      />
      <ProjectItem
        title={"BookShelf"}
        description={"A website that store input of user book using vanila javascript"}
        link={"https://github.com/MhmdEagel/BookShelf"}
      />
      <ProjectItem
        title={"Tenzies"}
        description={"A website to play game called tenzies using React"}
        link={"https://github.com/MhmdEagel/tenzies-game"}
      />
      
    </div>
  );
}
