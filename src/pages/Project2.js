import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import Project from "../components/Project";

const Project2 = () => {
  return (
    <div>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/projet-1"} right={"/projet-3"} />
      </div>
    </div>
  );
};

export default Project2;
