import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from './Recipe/Recipes';
import ChefBanner from './ChefBanner/ChefBanner';

const ChefPage = () => {

    const chefDetails = useLoaderData();

    const {recipes} = chefDetails;

    return (
        <div>
            <ChefBanner chefDetails={chefDetails}></ChefBanner>
            <Recipes recipes={recipes}></Recipes>
        </div>
    );
};

export default ChefPage;

