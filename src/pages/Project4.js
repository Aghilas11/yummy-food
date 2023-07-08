import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import Project from "../components/Project";

const Project4 = () => {
  return (
    <div>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/projet-4"} right={"/contact"} />
      </div>
    </div>
  );
};

export default Project4;
