import React from 'react';
import './Skill.css'
const Skill = () => {
    return (
        <div>
                <h1 className="text-center head relative text-4xl text-medium  mt-10">Skills</h1>
            
            <div className=" md:w-1/2 mx-auto skills shadow-md   ">
                <h3 className="skill html my-4 relative">HTML <small className="ml-4 text-red-400">90%</small></h3>
                <h3 className="skill css my-4 relative">CSS  <small className="ml-4 text-red-400">90%</small></h3>
                <h3 className="skill js my-4 relative ">JavaScript  <small className=" ml-4 text-red-400">70%</small></h3>
                <h3 className="skill react my-4 relative">React JS <small className=" ml-4 text-red-400">65%</small></h3>
                <h3 className="skill node my-4 relative">Node JS  <small className=" ml-4 text-red-400">60%</small></h3>
                <h3 className="skill express my-4 relative">Express JS  <small className="ml-4 text-red-400">65%</small></h3>
                <h3 className="skill mongo my-4 relative">MongoDb  <small className="ml-4 text-red-400">70%</small></h3>
            </div>
        </div>
    );
};

export default Skill;