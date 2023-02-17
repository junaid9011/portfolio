import React from 'react';
import Typical from 'react-typical'
import { CgFacebook } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { Fade } from 'react-reveal';
import './intro.css';
const Intro = () => {
    return (
        <div className="body">
            <div className="intro">
            <Fade top>
                    <h1 className="name" >I'm Junaid</h1>
                    
                    <h1 className="typical">a{''}
                        <Typical
                            steps={[
                                " Web Developer",
                                3000,
                                " Traveler",
                                3000,
                                " Programmer",
                                3000,
                                " Blogger",
                                3000,
                                " Photographer",
                                3000,
                            ]}
                            loop={Infinity}
                            wrapper="b"
                        />
                    </h1>
                </Fade>
                <div className="links MT-10">
                    <Fade up>
                        <a href="https://www.facebook.com/2a6m9x" rel="noreferrer" target="_blank"><CgFacebook className="m-1 md:m-2 text-xl md:text-3xl" /></a>
                        <a href="https://github.com/junaid9011" rel="noreferrer" target="_blank"><BsGithub className="m-1 md:m-2 text-xl md:text-3xl" /></a>
                        <a href="https://www.linkedin.com/in/junaid-ahmed-aab938225/" rel="noreferrer" target="_blank"><AiFillLinkedin className="m-1 md:m-2 text-xl md:text-3xl" /></a>
                        {/* <a href=""><CgFacebook className="m-2 text-2xl" /></a> */}
                    </Fade>
                </div>

            </div>

        </div>
    );
};

export default Intro;