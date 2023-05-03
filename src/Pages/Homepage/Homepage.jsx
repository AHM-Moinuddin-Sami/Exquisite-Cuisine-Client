import React from 'react';
import Banner from './Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';



const Homepage = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 py-6 mx-auto'>
                <Chefs chefs={chefs}></Chefs>
            </div>
        </div>
    );
};

export default Homepage;