import React, { useEffect } from 'react';
import img from '../../image/cover.jpg';
import jnd from '../../image/Junaid.JPG'
import Aos from "aos";
import './About.css'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
       <div id="about-section" data-aos="fade-up">
            <div className="  md:pt-50 md:mt-40 block">
            <h1 className="text-center head relative text-4xl text-medium  mt-10 mb-4 ">About</h1>
            <div  className="md:flex justify-evenly md:mt-4">
                <div className="items-center">
                <img src={jnd} data-aos="zoom-out" className="mx-auto mb-4  w-1/2" alt=""  />
                </div>
                <div data-aos="zoom-out" className="md:w-2/3 text-center md:mt-0 ">
                <h1 className=" md:text-left font-large ml-4">I'm Junaid Ahmed</h1>
                <br />
                 <div className="text-xl">
                 <p className=" mr-4 md:text-justify px-3 ">A <span className="highlight">Front-end Web Developer.</span>
                 <br />
                 <br />
                  Expertise at <span className="highlight">HTML, CSS, BOOTSRAP, TailWindCSS,MATERIAL UI</span>
                  <br />
                  <br />    
                  Comfortable at <span className="highlight">JavaScript, React JS,Redux</span>
                  <br />
                  <br />
                  Familer With <span className="highlight">Node JS, Experss JS, MongoDB, Mongoose</span> etc.
                  <br />
                  
                 </p>
                 </div>
            </div>
            </div>  
            
        </div>
       </div>
    );
};

export default About;