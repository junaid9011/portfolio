import React, { useEffect } from 'react';
import jnd from '../../image/Junaid.JPG'
import Aos from "aos";
import './About.css'
const About = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, [])
    return (
        <div id="about-section" data-aos="fade-up" className='pt-2'>
            <div className="  md:pt-50 md:mt-40 block">
                <h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10 ">ABOUT ME</h1>
                <div className="md:flex justify-evenly md:mt-4">
                    <div className="items-center">
                        <img src={jnd} data-aos="zoom-out" className=" mx-auto mb-4  w-1/2" alt="" />
                    </div>
                    <div data-aos="zoom-out" className="md:w-2/3 text-center md:mt-0 ">
                        <h1 className=" md:text-left font-large text-2xl ml-4">I'm Junaid Ahmed</h1>
                        <br />
                        <div className="text-xl">
                            <p className=" mr-4 md:text-justify px-3 ">A <span className="highlight"> Full Stack Web Developer at NetsoftUK</span></p>
                            <p className=" md:w-1/2 mr-4 md:text-justify px-3 " >I love to work with my passion. I'm dedicated to my job. I love to face new things and explore them. Problem Solving while working attracts me a lot.</p>
                            <p className="md:w-1/2 mr-4 md:text-justify px-3 " >Besides, I'm a Traveler and Photographer</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;