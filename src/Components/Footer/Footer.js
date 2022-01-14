import React from 'react';

const Footer = () => {
    return (
        <div>
            <h1 className="text-center head relative text-4xl text-medium text-red-600 mt-10">Get In Touch</h1>
             <div className=" mt-4 text-center bg-gray-900">
             <input className=" mt-20 md:w-96 rounded leading-8 border-2  outline-none" type="text" placeholder="Enter Your Email" />
             <br />
             <input className=" mt-2 bg-red-500 text-white p-2 border-2 bg border-red-500 rounded" type="button" value="Submit" />
             <br />
             <br />
             </div>
            
        </div>
    );
};

export default Footer;