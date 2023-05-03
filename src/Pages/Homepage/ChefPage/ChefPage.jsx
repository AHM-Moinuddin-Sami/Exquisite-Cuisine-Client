import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipe from './Recipe/Recipe';

const ChefPage = () => {

    const chefDetails = useLoaderData();

    console.log(chefDetails);

    const { chef_name, recipes } = chefDetails;

    return (
        <div>
            {
                recipes.map(recipe => <Recipe key={recipe.id} name={recipe.recipe_name} ingredients={recipe.ingredients} method={recipe.cooking_method} rating={recipe.rating}></Recipe>)
}
        </div >
    );
};

export default ChefPage;

