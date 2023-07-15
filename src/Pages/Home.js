//react arrow function component
import React from 'react'
import About from "../Components/About/About";
import Certificate from "../Components/Certificates";
import Footer from "../Components/Footer/Footer";
import Intro from "../Components/Intro/Intro";
import Project from "../Components/Project/Project";
import Skill from "../Components/Skills/Skill";

export const  Home = () => {
    return (
        <div>
       <Intro/>
      <About/>
      <Skill/>
      <Certificate/>
      <Project/>
      <Footer/>
        </div>
    );
}


