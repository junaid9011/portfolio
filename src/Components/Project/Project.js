import React from 'react';
import rb from '../../image/rb.jpg'
import todo from '../../image/todo.jpg'
import EC from '../../image/Ecommerce Site.png'
const project=[
    {id:1, name:'Ecommerce',img:EC,url:"https://ecommerce-x5.netlify.app/",description:"An MERN Stack  E-commerce website"},
    {id:2, name:'RongginBakso',img:rb,url:"https://rongginbakso.netlify.app/",description:"A Social Organization website"},
    {id:3, name:'To-do List',img:todo,url:"https://to-do-x5.netlify.app",description:" A Productive To do List Website "}
]
const Project = () => {
    return (
        <div id="project-section" className="text-center mt-20 pt-12">
        <h1 className="text-center  relative text-4xl text-medium text-red-500 mt-10">PROJECTS</h1>        
        <div className="container  md:flex item-center justify-center my-4 mx-8">
            {
                project.map(project=>
                    <div key={project.id} className=" h-full mx-auto  md:m-4 grid-cols-1 grid-rows-3  rounded-md w-80 shadow hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110">
                <div className="  relative">
                    <img src={project.img} className=" image w-80 h-60" alt="" />
                </div>
                <div className=" w-80 my-2">
                    <h1 className=" text-3xl font-medium text-gray-600">{project.name}</h1>
                    <small>{project.description}</small>
                </div>
                <div className="">
                  <button className=" text-white bg-red-500 h-10 w-11/12 text-align-center  rounded-md mb-4 border "><a className='text-white no-underline' target="_blank" rel="noreferrer" href={project.url}>Live Site </a></button>
                    
                </div>
            </div>)
            }
            
    </div>
</div>
    );
};

export default Project;