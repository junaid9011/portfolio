import React from 'react';
import rb from '../../image/rb.jpg'
// import todo from '../../image/todo.jpg'
import EC from '../../image/Ecommerce Site.png'
import IC from '../../image/icche.jpg'
import { Fade } from 'react-reveal';
import './Project.css'
const project = [
    { id: 1, name: 'Dream Store', img: EC, url: "https://ecommerce-x5.netlify.app/", code: "https://github.com/xunaid5/ecommerce-site", description: "A MERN Stack  E-commerce website" },
    { id: 2, name: 'RongginBakso', img: rb, url: "https://rongginbakso.netlify.app/", code: "https://github.com/xunaid5/ronginbakso", description: "A Social Organization website" },
    // { id: 3, name: 'To-do List', img: todo, url: "https://to-do-x5.netlify.app", code: "https://github.com/xunaid5/To-Do", description: " A Productive To do List Website " },
    { id: 4, name: 'Icche Shop BD', img: IC, url: "https://iccheshopbd.com/", description: " A Live Ecommerce company website " }
]
const Project = () => {
    return (
        <div id="project-section" className="text-center md:mt-20 sm: mb-12 pt-12">
            <Fade top><h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10">PROJECTS</h1></Fade>
            <div className="container  mb-20 my-10 mx-8">
               <Fade bottom>
               {
                    project.map(project =>
                        <div key={project.id} className="  h-full mx-auto  md:m-4 grid-cols-1 grid-rows-3 my-10 rounded-md w-80 shadow /*hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110*/">
                            <div className="  relative">
                                <img src={project.img} className=" image w-80 h-60" alt="" />
                            </div>
                            <div className=" w-80 my-2">
                                <h1 className=" text-3xl font-medium text-gray-600">{project.name}</h1>
                                <small>{project.description}</small>
                            </div>
                            <div className="">
                                <button className=" text-white bg-red-500 h-10 w-1/3 text-align-center text-xs  rounded-md mb-4 border "><a className='text-white no-underline' target="_blank" rel="noreferrer" href={project.url}>Live Site </a></button>
                                {
                                    project.code && <button className=" text-white bg-red-500 h-10 w-1/3 text-align-center text-xs rounded-md mb-4 border "><a className='text-white no-underline' target="_blank" rel="noreferrer" href={project?.code}>github </a></button>

                                }
                            </div>
                        </div>)
                }
               </Fade>

            </div>
        </div>
    );
};

export default Project;