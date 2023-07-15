import React from 'react';
import { Fade } from 'react-reveal';
import cv from '../../image/cv.pdf'
import './About.scss'
const About = () => {
const handleClick=()=>{
    console.log('clicked')
}

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

                            <div class="desc"> A Full Stack Web Developer at <span className='text-red-500 font-bold'>DREAMMATE</span>. <span className='hidden md:block'> I love to work with my passion. I love to face new things and explore them. Problem Solving while working attracts me a lot.I'm dedicated to my job

                                Besides, I'm a Traveler and Photographer</span>
                            </div>
                            <div class=" md:ml-4 md:mt-2">
                                <a href='mailto:junaid.cou@gmail.com' class="block md:inline no-underline bg-red-500 text-white font-bold py-2 px-4 rounded-full">
                                    Hire me
                                </a>
                                <div className='block md:hidden mx-4 px-4'></div>
                                <a href={cv} download="resume" class=" hover:text-red-500 no-underline block md:inline mt-4 md:mt-0 md:ml-4 bg-transparent hover:bg-red-500 text-red-500 border-1 border-red-500 font-bold py-2 px-4 rounded-full">
                                    Resume
                                </a>
                            </div>
                        </div>

                    </div>



                </div>

            </div>
        </div>
    );
};

export default About;