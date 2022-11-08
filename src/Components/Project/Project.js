import React from 'react';
import rb from '../../image/rbm.jpg'
// import todo from '../../image/todo.jpg'
import EC from '../../image/dcm.jpg'
import IC from '../../image/iccheshop.jpg'
import { Fade } from 'react-reveal';
import './Project.scss'
// import { AiFillGithub } from "react-icons/ai";
const project = [
    { id: 0, name: 'Dream Store', img: EC, url: "https://ecommerce-x5.netlify.app/", code: "https://github.com/xunaid5/ecommerce-site", description: "A MERN Stack  E-commerce website",details:"Dream Store is the e commerce website which is a demo project.",tech:["React","TailwindCSS","Express.js", "MongoDB"] },
    { id: 1, name: 'Icche Shop BD', img: IC, url: "https://iccheshopbd.com/", description: " A Live Ecommerce company website ",details:" IccheShopBD is a women clothing based e-commerce site. It's the updated and new feature added site of dream store",
    tech:["React","TailwindCSS","Express.js", "MongoDB"] },
    
    { id: 2, name: 'Ronggin Bakso', img: rb, url: "https://rongginbakso.netlify.app/", code: "https://github.com/xunaid5/ronginbakso", description: "A Social Organization website",details:"Ronggin Bakso is a not profitable social organization works for treatment of the rural people" , tech:["React","TailwindCSS","Firebase"]},
    
    // { id: 3, name: 'To-do List', img: todo, url: "https://to-do-x5.netlify.app", code: "https://github.com/xunaid5/To-Do", description: " A Productive To do List Website " },
    
]
const Project = () => {
    return (
        <div id="project-section" className="text-center bg-gray-100 md:mt-20 pt-12">
            <Fade ><h1 className="text-center mb-10 text-4xl text-medium text-red-500 mt-10">PROJECTS</h1></Fade>
            {/* <div className="container  mb-20 my-10 "> */}
            {
                project.map(item=>
                    <div className={(item.id%2===0)?"blog-card":"blog-card alt"}>
                      <div className="meta">
                        <div className="photo" style={{backgroundImage:`url(${item?.img})`}} ></div>
                         
                        <ul className="details ">
                            <span className='text-red-500'>Technology</span>
                          {
                          item?.tech?.map(t=>
                            <li className="author ">{t}</li>)}
                          
                          
                          {item.code&&<li className="author"><a className='text-red-500' href={item?.code}>See Codes</a></li>}
        
                        </ul>
                      </div>
                      <div className="description">
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                        <p>{item.details} </p>
                        <p className="read-more">
                          <a href={item.url}>Live Site</a>
                        </p>
                      </div>
                    </div>
                )
            }
                   
        </div>
    );
};

export default Project;