import React from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Mouse />
      <div className="home">
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              dragConstrenits={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              YUMMY's FOOD
            </motion.h1>
            <motion.h2
              drag
              dragConstrenits={{
                left: -250,
                right: 950,
                top: -200,
                bottom: 250,
              }}
            >
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <Buttons right={"/projet-1"} />
      </div>
    </div>
  );
};

export default Home;
