"use client"; // ⚡ প্রয়োজন — কারণ useScroll client hook

import React from "react";
import { motion, useScroll } from "framer-motion"; // ✅ সঠিক import
import Navber from "./components/navber";
import Banner from "./components/banner";
import Portfolio from "./components/portfolio";
import ProjectIdea from "./components/projectIdea";
import Blog from "./components/blog";
import DoPart from "./components/doPart";
import ClientsPart from "./components/clientsPart";
import MySkill from "./components/mySkill";
import Testmonial from "./components/testmonial";
import Contact_Part from "./components/contact_Part";
import Footer from "./components/footer";
import Services from "./components/services";
import AboutPart from "./components/aboutPart";

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          originX: 0,
          backgroundColor: "#138086",
          zIndex: 50,
        }}
      />

      <Navber />
      <Banner />
      <AboutPart />
      <Services />
      <MySkill />
      <Portfolio />
      {/* <ProjectIdea/> */}
      <Blog />
      <DoPart />
      <ClientsPart />
      <Testmonial />
      <Contact_Part />
      <Footer />
    </>
  );
};

export default Home;
