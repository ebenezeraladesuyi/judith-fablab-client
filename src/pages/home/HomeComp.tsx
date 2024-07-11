// import React from 'react'

import Action from "./Action";
import Features from "./Features";
import Hero from "./Hero";
import Inventory from "./Inventory";
import LastCom from "./LastCom";
import Member from "./Member";
import Mentor from "./Mentor";
import Projects from "./Projects";

const HomeComp = () => {
  return (
    <div className='font-pop'>
      <Hero />
      <Inventory />
      <Projects />
      <Action />
      <Features />
      <LastCom />
      <Mentor />
      <Member />
    </div>
  );
};

export default HomeComp;
