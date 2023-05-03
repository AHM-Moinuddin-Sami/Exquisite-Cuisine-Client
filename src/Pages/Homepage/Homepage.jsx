import React from 'react';
import Banner from './Banner/Banner';
import { Outlet, useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';



const Homepage = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Chefs chefs = {chefs}></Chefs>
        </div>
    );
};

export default Homepage;