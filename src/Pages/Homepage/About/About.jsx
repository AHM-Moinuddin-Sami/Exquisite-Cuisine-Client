import React from 'react';

const About = () => {
    return (
        <div className='bg-white h-auto min-h-12 flex flex-col mt-3 rounded p-3'>
            <h3 className='text-center font-semibold text-2xl'>About Me</h3>
            <img className='mx-auto w-fit h-[20vh]' src="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" />
            <p>I am Yuji Nakamura. A Norwegian-Japanese chef whose going around the world meeting various new chefs and collecting various recipes. I am adding those collected recipe onto this website for other people to enjoy. If you like what you've found here, buy me a coffee sometimes.</p>
        </div>
    );
};

export default About;