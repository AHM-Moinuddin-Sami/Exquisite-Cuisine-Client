import React from 'react';

const RecipeTabContent = ({ name, ingredients, method, rating, img }) => {
    return (
        <div className=''>
            <img className='w-full h-[50vh] rounded object-cover' src={img} />
            <div className='flex flex-col gap-3 mt-3'>
                <h3 className='text-center font-semibold text-4xl'>{name}</h3>
                <div>
                    <h3>
                        Ingredients:
                    </h3>
                    <ul className='list-decimal pl-10'>
                        {ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)}
                    </ul>
                </div>
                <h3>Cooking Method: {method} </h3>
                <h3>Rating: {rating}</h3>
            </div>
        </div>
    );
};

export default RecipeTabContent;