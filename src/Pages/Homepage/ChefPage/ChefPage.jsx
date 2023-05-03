import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipe/Recipes';

const ChefPage = () => {

    const chefDetails = useLoaderData();

    return (
        <div>
            <Recipes chefDetails={chefDetails}></Recipes>
        </div>
    );
};

export default ChefPage;

