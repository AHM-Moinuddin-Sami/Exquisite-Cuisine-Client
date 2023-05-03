import React from 'react';

const ChefBanner = ({chefDetails}) => {
    const{chef_picture, chef_name, bio,number_of_recipes, recipes, likes, years_of_experience} = chefDetails;

    return (
        <div className="card rounded-none lg:card-side bg-base-100 shadow-xl">
            <figure><img src={chef_picture} className='h-[70vh]' /></figure>
            <div className='w-8/12 pl-10 flex flex-col gap-3 text-xl'>
                <h2 className="card-title text-3xl">{chef_name}</h2>
                <h2><span className='font-semibold'>Biography: </span>{bio}</h2>
                <h2><span className='font-semibold'>Years of Experience: </span>{years_of_experience}</h2>
                <h2><span className='font-semibold'>Likes: </span>{likes}</h2>
                <h2><span className='font-semibold'>Number of recipes: </span>{recipes.length}</h2>
                <h2><span className='font-semibold'>{chef_name}</span> has over <span className='font-semibold'>{number_of_recipes}</span> different recipes in his arsenal. We are featuring <span className='font-semibold'>{recipes.length}</span> of his best ones down below. Check them out!</h2>

            </div>
        </div>
    );
};

export default ChefBanner;