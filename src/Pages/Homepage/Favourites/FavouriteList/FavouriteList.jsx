import React from 'react';
import ListData from './ListData/ListData';

const FavouriteList = ({ recipes, chefName }) => {
    console.log(recipes);
    return (
        <ul className="menu bg-base-100 w-full">
            <li>
                {
                    recipes.map(recipe => <ListData key={recipe.id} id={recipe.id} chefName={chefName} name={recipe.recipe_name}></ListData>)
                }
            </li>
        </ul>
    );
};

export default FavouriteList;