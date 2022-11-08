import React from 'react';
import { Fade } from 'react-reveal';
import jnd from '../../image/Junaid.JPG'

import './About.css'
const About = () => {
    
    return (
        <div id="about-section" data-aos="fade-up" className='pt-2'>
            <div className="  md:pt-50 md:mt-32 block">
                <Fade bottom className="">
                <h1 className="text-center shadows relative text-4xl text-medium text-red-500  mb-10  ">ABOUT ME</h1>
                </Fade>
                <div  className="md:flex justify-evenly md:mt-4">
                    <div className="items-center">
                        <Fade left>
                        <img src={jnd}  className=" mx-auto mb-4 rounded w-1/2" alt="" />
                        </Fade>
                    </div>
                    <div data-aos="zoom-out" className="md:w-2/3 text-center md:mt-0 ">
                        <Fade right>
                        <h1 className=" md:text-left font-large text-2xl ml-4">I'm Junaid Ahmed</h1>
                        
                        <div className="text-xl">
                            <p className=" mr-4 md:text-justify px-3 "><span className="highlight"> Full Stack Web Developer,<span className='block'>NETSOFTUK</span></span></p>
                            <p className=" md:w-1/2 mr-4 md:text-justify px-3 " >I love to work with my passion. I'm dedicated to my job. I love to face new things and explore them. Problem Solving while working attracts me a lot.</p>
                            <p className="md:w-1/2 mr-4 md:text-justify px-3 " >Besides, I'm a Traveler and Photographer</p>
                        </div>
                        </Fade>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;