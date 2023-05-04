import React from 'react';
import { Link } from 'react-router-dom';

const Feautred = ({ featuredChef }) => {

    const { chef_picture, chef_name, id, bio, likes, number_of_recipes, recipes, years_of_experience } = featuredChef;

    return (
        <div>
            <div>
                <div className='bg-gradient-to-r from-transparent via-black'>
                    <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Featured Chef of the Week</h3>
                </div>

                <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-white via-orange-400 to-white"></div>
            </div>
            <div className="bg-white rounded-lg flex justify-between shadow-md overflow-hidden">

                <div className="md:flex flex-grow">
                    <div className="md:w-1/2 flex justify-center flex-col">
                        <div className="p-4 flex flex-col gap-5">
                            <div className='text-center'>
                                <h2 className="text-4xl font-bold mb-2">{chef_name}</h2>
                                <h2><small>Seafood Maestro</small></h2>
                            </div>
                            <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-red-200 via-orange-400 to-red-200"></div>
                            <p className="text-gray-700">{bio} He has over {number_of_recipes} recipes. Among them {recipes.length} recipes are catalogued in our site with {likes} likes. Being an experienced chef of {years_of_experience} years, his recipes are concise and to the point.</p>
                            <Link className='text-center bg-red-400 py-6 rounded mx-auto text-xl font-semibold text-white w-10/12' to={`/chefs/${id}`}><button>Click here to check out his recipes.</button></Link>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img src={chef_picture} className="w-full h-[60vh] object-cover" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feautred;