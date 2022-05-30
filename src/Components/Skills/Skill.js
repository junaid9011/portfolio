import React from 'react';
import './Skill.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Skill = () => {
    const skills = [
        { id: 0, name: "C/C++", percentage: 85 },
        { id: 1, name: "HTML", percentage: 90 },
        { id: 2, name: "CSS", percentage: 90 },
        { id: 3, name: "BOOTSTRAP", percentage: 80 },
        { id: 4, name: "TAILWIND CSS", percentage: 85 },
        { id: 5, name: "REACT", percentage: 85 },
        { id: 6, name: "REDUX", percentage: 80 },
        { id: 7, name: "NODE JS", percentage: 80 },
        { id: 7, name: "EXPRESS JS", percentage: 90 },
        { id: 9, name: "MONGO DB", percentage: 80 },
        { id: 10, name: "FIREBASE", percentage: 75 },
        { id: 11, name: "MATERIAL UI", percentage: 70 },

    ]
    return (
        <div id='skill-section' className='mt-20 pt-12 bg-gray-100 pb-8'>
            <h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10">SKILLS</h1>
            <div className="md:flex skills">
                {
                    skills.map(item =>
                        <div className=" my-4 mx-auto  w-32 md:w-1/8 text-center">
                            <CircularProgressbar value={item.percentage} text={`${item.percentage}%`} styles={buildStyles({
                                textColor: "red",
                                pathColor: "tomato",
                                
                            })} />
                            <p className='my-4'>{item.name}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Skill;