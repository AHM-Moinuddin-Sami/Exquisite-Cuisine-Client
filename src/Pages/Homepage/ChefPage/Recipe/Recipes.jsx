import React, { useEffect, useState } from 'react';
import RecipeTabContent from './RecipeTabContent/RecipeTabContent';
import RecipeTab from './RecipeTab/RecipeTab';

const Recipes = ({ recipes }) => {

    const [activeTab, setActiveTab] = useState(0);

    const tabClick = (index) => {
        setActiveTab(index);
    }

    const { id, recipe_name, ingredients, rating, cooking_method, recipe_img } = recipes[activeTab];
    console.log(recipes);

    return (
        <div id='tab-content' className={`flex flex-col p-5 w-8/12 mx-auto my-10 border-2 bg-white rounded border-gray-300 h-contain`}>
            <div className="flex border-b-2 border-gray-300">
                {recipes.map((recipe, index) => (
                    <RecipeTab
                        key={index}
                        name={recipe.recipe_name}
                        active={index === activeTab}
                        handleClick={() => tabClick(index)}
                    />
                ))}
            </div>
            <div className="p-4">
                <div className="mt-4">
                    {<RecipeTabContent key={id} img={recipe_img} name={recipe_name} ingredients={ingredients} rating={rating} method={cooking_method}></RecipeTabContent>}
                </div>
            </div>
        </div>
    );
};

export default Recipes;