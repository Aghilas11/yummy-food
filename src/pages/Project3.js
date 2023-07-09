import React from "react";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "./Logo";
import Project from "../components/Project";

const Project3 = () => {
  return (
    <div>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={2} />
        <Buttons left={"/projet-2"} right={"/projet-4"} />
      </div>
    </div>
  );
};

export default Project3;
