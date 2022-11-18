import React from 'react';
import { Fade } from 'react-reveal';
import jnd from '../../image/Junaid.JPG'

import './About.scss'
const About = () => {

    return (
        <div id="about-section" className='pt-12'>
            <div className="  md:pt-50 md:mt-10 mb-16 block">
                <Fade bottom className="">
                    <h1 className="text-center shadows relative text-4xl text-medium text-red-500  mb-10  ">ABOUT ME</h1>
                </Fade>
                <div class="card1 mx-auto">
                    {/* <div class="img-avatar">
                    </div> */}
                    <div class="card-text">
                        <div class="portada  hidden sm:block">

                        </div>
                        <div class="title-total ">
                            <p class="title">Full Stack Web Developer</p>
                            <h2>Junaid Ahmed</h2>

                            <div class="desc"> A Full Stack Web Developer at <span className='text-red-500 font-bold'>NETSOFTUK</span>. I love to work with my passion. I love to face new things and explore them. Problem Solving while working attracts me a lot.I'm dedicated to my job

                                Besides, I'm a Traveler and Photographer
                                </div>
                            <div class="actions">
                                <button>Hire me</button>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;