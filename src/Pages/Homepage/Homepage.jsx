import React from 'react';
import Banner from './Banner/Banner';
import Cards from './Cards/Cards';
import { useLoaderData } from 'react-router-dom';



const Homepage = () => {
    const chefs = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Cards chefs = {chefs}></Cards>
        </div>
    );
};

export default Homepage;