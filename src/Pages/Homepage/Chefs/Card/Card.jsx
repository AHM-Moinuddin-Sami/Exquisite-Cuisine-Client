import React from 'react';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';

const Card = (params) => {
    const { id, name, photo, years, likes, recipes } = params;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <LazyLoad height={288} threshold={.95}>
                    <figure><img className='w-full md:w-72 object-cover h-72' src={photo} alt="Album" /></figure>
                </LazyLoad>


                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Years of Experience: {years}</p>
                    <p>Likes: {likes}</p>
                    <p>Number of Recipes: {recipes}</p>
                    <Link className='w-full' to={`/chefs/${id}`}><button className='px-6 py-2 bg-gradient-to-b from-red-500 to-orange-500 hover:from-red-600 active:from-red-800 hover:to-orange-600 active:to-orange-800 rounded text-white'>View recipes</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Card;