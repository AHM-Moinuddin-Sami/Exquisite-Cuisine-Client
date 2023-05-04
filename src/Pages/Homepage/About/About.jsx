import React from 'react';

const About = () => {
    return (
        <div >
            <div>
                <div className='flex items-center gap-2 justify-center bg-gradient-to-r from-transparent via-black mt-6'>
                    <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>About Me </h3>
                </div>
                <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-orange-400 via-red-600 to-orange-400"></div>
            </div>
            {/* <div className='bg-white h-auto min-h-12 flex flex-col mt-3 rounded p-3'>
                <img className='mx-auto w-fit h-[20vh]' src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
                <p>I am Yuji Nakamura. A Norwegian-Japanese chef whose going around the world meeting various new chefs and collecting various recipes. I am adding those collected recipe onto this website for other people to enjoy. If you like what you've found here, buy me a coffee sometimes.</p>
            </div> */}
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>I am Yuji Nakamura. A Norwegian-Japanese chef whose going around the world meeting various new chefs and collecting various recipes. I am adding those collected recipe onto this website for other people to enjoy. If you like what you've found here, buy me a coffee sometimes.</p>
                </div>
                <figure><img className='object-cover w-full h-[50vh]' src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="Me" /></figure>
            </div>
        </div>
    );
};

export default About;