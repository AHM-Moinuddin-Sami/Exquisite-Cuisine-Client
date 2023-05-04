import React from 'react';
import Banner from './Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Chefs from './Chefs/Chefs';
import Featured from './Featured/Featured';
import Favourites from './Favourites/Favourites';
import About from './About/About';



const Homepage = () => {
    const chefs = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='w-11/12 py-6 mx-auto'>
                <Featured featuredChef={chefs[chefs.length - 1]}></Featured>
                <Chefs chefs={chefs}></Chefs>
                <div className='grid gap-4' style={{gridTemplateColumns: "1fr 1fr"}}>
                    <Favourites chefs={chefs}></Favourites>
                    <About></About>
                </div>
            </div>
        </div>
    );
};

export default Homepage;