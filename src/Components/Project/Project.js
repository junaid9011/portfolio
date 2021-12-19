import React from 'react';
import bag from '../../image/cover.jpg'

const Project = () => {
    return (
        <div className="text-center mt-20">
        <h1 className="text-center head relative text-4xl text-medium text-red-600 mt-10">Projects</h1>        
        <div className="container  md:flex item-center justify-center my-4 mx-8">
            <div className=" h-auto mx-auto  md:m-4 grid-cols-1 grid-rows-3  rounded-md w-60 shadow hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110">
                <div className="  relative">
                    <img src={bag} className=" image w-full h-60" alt="" />
                </div>
                <div className=" w-60 my-2">
                    <h1 className=" text-2xl font-medium text-gray-600">RonginBakso</h1>
                </div>
                <div className="">
                    <button className=" text-white bg-red-600 h-10 w-11/12 text-align-center  rounded-md mb-4 border hover:text-red-500 hover:bg-white hover:border-red-500">Demo</button>
                    
                </div>
            </div>
            {/* end of first card */}
        <div className=" mx-auto  md:m-4 h-auto grid-cols-1 grid-rows-3  rounded-md w-60 shadow hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110">
            <div className="relative">
                <img src={bag} className=" image w-full h-60" alt="" />
            </div>
            <div className=" w-60 my-2">
                <h1 className=" text-2xl font-medium text-gray-600">GoBazar</h1>
            </div>
            <div className="">
                <button className=" text-white bg-red-600 h-10 w-11/12 align-middle  rounded-md mb-4 border hover:text-red-500 hover:bg-white hover: border-red-500"><a href="https://rongginbakso.netlify.app/" rel="noreferrer" target="_blank">Demo</a>
                </button>
            </div>
        </div>
             {/* end of 2nd card */}
        <div className=" mx-auto  md:m-4 h-auto grid-cols-1 grid-rows-3  rounded-md w-60 shadow hover:shadow-xl hover: transition duration-500 ease-in-out hover:  text-3xl transform hover:-translate-y-1 hover:scale-110">        
            <div className="relative">
                <img src={bag} className="image w-full h-60" alt="" />
            </div>
            <div className=" w-60 my-2">
                <h1 className=" text-2xl font-medium text-gray-600">Meal</h1>
                
            </div>
            <div className="">
                <button className="  text-white bg-red-600 h-10 w-11/12 text-center rounded-md mb-4 border hover:text-red-500 hover:bg-white hover: border-red-500">Demo</button>
            </div>
        </div>
    </div>
</div>
    );
};

export default Project;