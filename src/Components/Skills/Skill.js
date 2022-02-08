import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
        <div id='skill-section' className='mt-20 pt-12 bg-gray-100 pb-8'>
                <h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10">SKILLS</h1>
            
            <div className=" md:w-1/2 mx-auto skills shadow-md   ">
                <div className="skill-container">
                <h3 className="skill html my-4 relative">HTML <small className="ml-4 text-sm text-red-500">90%</small></h3>
                <h3 className="skill css my-4 relative">CSS  <small className="ml-4 text-sm text-red-500">90%</small></h3>
                <h3 className="skill js my-4 relative ">JavaScript  <small className=" ml-4 text-sm text-red-500">70%</small></h3>
                <h3 className="skill react my-4 relative">React JS <small className=" ml-4 text-sm text-red-500">65%</small></h3>
                <h3 className="skill redux my-4 relative">Redux <small className=" ml-4 text-sm text-red-500">60%</small></h3>
                <h3 className="skill node my-4 relative">Node JS  <small className=" ml-4 text-sm text-red-500">60%</small></h3>
                <h3 className="skill express my-4 relative">Express JS  <small className="ml-4 text-sm text-red-500">65%</small></h3>
                <h3 className="skill mongo my-4 relative">MongoDb  <small className="ml-4 text-sm text-red-500">70%</small></h3>
                
            
                </div>
                </div>
        </div>
    );
};

export default Skill;