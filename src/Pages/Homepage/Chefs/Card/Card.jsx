import React from 'react';
import { Link } from 'react-router-dom';

const Card = (params) => {
    const { id,name, photo, years, likes, recipes } = params;
    console.log(photo)
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='w-full md:w-72 object-cover h-72' src={photo} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Years of Experience: {years}</p>
                    <p>Likes: {likes}</p>
                    <p>Number of Recipes: {recipes}</p>
                    <Link to={`/${id}`}>View recipes</Link>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;