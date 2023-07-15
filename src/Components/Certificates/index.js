import React from 'react';

import { Fade } from 'react-reveal';
import './style.css'
const Certificate = () => {
  return (
    <div id="achievement-section" className="text-center  sm: mb-12 pt-12 ">
      <Fade top><h1 className="text-center mb-10 relative text-4xl text-medium text-red-500 mt-10">ACHIEVEMENTS</h1></Fade>
      <Fade bottom>
        <div className='card mx-auto sm:ml-16 '>
          <div className='info'>
            <h1 className='title'>AWS Cloud Technical Essentials</h1>
            <p className='description'>I've completed this course and gain the fundamental knowledge about AWS. It's the first one of AWS DevOps Specialization Course <span className='block mt-2 '><a className=' no-underline bg-red-500 text-white font-bold py-2 px-2 rounded' target='_blank' href="https://coursera.org/verify/2D42XP87DUHP" rel='noreferrer'>Verify Certificate</a></span></p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Certificate;