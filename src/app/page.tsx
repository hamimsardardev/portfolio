"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import Banner from "./components/banner";
import ProjectIdea from "./components/projectIdea";
import Blog from "./components/blog";
import DoPart from "./components/doPart";
import ClientsPart from "./components/clientsPart";
import MySkill from "./components/mySkill";
import Contact_Part from "./components/contact_Part";
import Services from "./components/services";
import AboutPart from "./components/aboutPart";
import Experiance from "./components/experiance";
import Testmonial from "./components/testmonial";
import Portfolio_part from "./components/portfolio";

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          height: "8px",
          originX: 0,
          backgroundColor: "#FFFFFF",
          zIndex: 50,
        }}
      />

      <Banner />
      <AboutPart />
      <Services />
      <MySkill />
      <Portfolio_part/>
      <Experiance />
      <ProjectIdea />
      <Blog />
      <DoPart />
      <ClientsPart />
      <Testmonial />
      <Contact_Part />
    </>
  );
};

export default Home;
