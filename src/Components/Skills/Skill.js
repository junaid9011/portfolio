import React from 'react';
import './Skill.css'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useState } from 'react';
const Skill = () => {

    
    const skills = [
        { id: 0, skillType: "programming", name: "C/C++", percentage: 85 },
        { id: 1, skillType: "web", name: "HTML", percentage: 90 },
        { id: 2, skillType: "web", name: "CSS", percentage: 90 },
        { id: 3, skillType: "web", name: "BOOTSTRAP", percentage: 80 },
        { id: 4, skillType: "web", name: "TAILWIND CSS", percentage: 85 },
        { id: 5, skillType: "programming", name: "JavaScript", percentage: 85 },
        { id: 6, skillType: "programming", name: "TypeScript", percentage: 60 },
        { id: 7, skillType: "tool", name: "NEXT JS", percentage: 60 },
        { id: 8, skillType: "tool", name: "REACT", percentage: 85 },
        { id: 9, skillType: "tool", name: "REDUX", percentage: 80 },
        { id: 10, skillType: "tool", name: "NODE JS", percentage: 80 },
        { id: 11, skillType: "tool", name: "EXPRESS JS", percentage: 90 },
        { id: 12, skillType: "tool", name: "MONGO DB", percentage: 80 },
        { id: 13, skillType: "tool", name: "FIREBASE", percentage: 75 },
        { id: 14, skillType: "web", name: "MATERIAL UI", percentage: 70 },

    ]
    let skill = skills.filter(item => item.skillType === 'programming');
    const [selectedSkills, setSelectedSkills] = useState(skill);
    const [isActive, setisActive] = useState('programming');


    const handleSkill = (type) => {

        let skill = skills.filter(item => item.skillType === type);
        setSelectedSkills(skill)
        setisActive(type)

    }
    // useEffect(()=>{
    //     setSelectedSkills(skill)
    // },[skill])
    // console.log(selectedSkills)
    return (
        <div id='skill-section' className='mt-20 pt-12 bg-gray-100 pb-8'>
            <h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10">SKILLS</h1>
            <div className="skill-box">
                <div className="text center mx-auto "><button onClick={() => handleSkill('programming')} className={isActive==='programming'?'text-green-500 font-medium text-xl':'text-red-500 font-medium'}>Programming</button></div>
                <div className="text center mx-auto"><button onClick={() => handleSkill('web')} className={isActive==='web'?'text-green-500 font-medium text-xl':'text-red-500 font-medium'}>Web</button></div>
                <div className="text center mx-auto"><button onClick={() => handleSkill('tool')} className={isActive==='tool'?'text-green-500 font-medium ':'text-red-500 font-medium'}>Tools</button></div>
            </div>
            <div className="md:flex justify-center skills">
                {
                    selectedSkills.map(item =>
                        <div className=" my-4 mx-auto   w-32 md:w-1/8 text-center">
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