import React from 'react';
import rb from '../../image/rb.jpg'
import cover from '../../image/cover.jpg'
const project=[
    {id:1, name:'Ecommerce',img:"https://www.awesomescreenshot.com/image/21462124?key=5c35158d13731b84c73f150562db7b5b"},
    {id:1, name:'RongginBakso',img:rb},
    {id:1, name:'Meal',img:cover}
]
const Project = () => {
    return (
        <div id="project-section" className="text-center mt-20">
        <h1 className="text-center head relative text-4xl text-medium text-red-600 mt-10">Projects</h1>        
        <div className="container  md:flex item-center justify-center my-4 mx-8">
            {
                project.map(project=>
                    <div className=" h-auto mx-auto  md:m-4 grid-cols-1 grid-rows-3  rounded-md w-60 shadow hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110">
                <div className="  relative">
                    <img src={project.img} className=" image w-60 h-60" alt="" />
                </div>
                <div className=" w-60 my-2">
                    <h1 className=" text-2xl font-medium text-gray-600">{project.name}</h1>
                </div>
                <div className="">
                    <button className=" text-white bg-red-600 h-10 w-11/12 text-align-center  rounded-md mb-4 border hover:text-red-500 hover:bg-white hover:border-red-500">Demo</button>
                    
                </div>
            </div>)
            }
            
    </div>
</div>
    );
};

export default Project;