import React from 'react';

const Footer = () => {
    return (
        <div>
            
             <div className=" mt-4 text-center pt-4 bg-gray-900">
             <h1 className="text-center   relative text-4xl text-medium text-red-500 mt-10">Get In Touch</h1>
                <form action="" method="post" data-netlify="true">
                <input className=" mt-10 md:w-96 rounded leading-8 py-2 border-2  " type="text" placeholder=" Enter Your Name" />
             <br />
             <input className=" mt-10 md:w-96 rounded leading-8 border-2 py-2  " type="text" placeholder=" Enter Your Email" />
             <br />
             <input className=" mt-10 md:w-96 rounded leading-8 border-2 py-2 " type="text" placeholder=" Enter Your Address" />

             <br />
             <input className=" mt-2 md:w-96 bg-red-500 text-white p-2 border-2 bg border-red-500 rounded" type="button" value="Submit" />
             <br />
             <br />
                </form>
             </div>
            
        </div>
    );
};

export default Footer;