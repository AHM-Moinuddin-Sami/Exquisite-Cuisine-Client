import React from 'react';
import { Link } from 'react-router-dom';
import FavouriteList from './FavouriteList/FavouriteList';

const Favourites = ({ chefs }) => {
    // console.log(chefs)

    return (
        <div>
            <div>
                <div className='bg-gradient-to-r from-transparent via-black mt-6'>
                    <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Your Favourites</h3>
                </div>
                <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-orange-400 via-red-600 to-orange-400"></div>
            </div>
            <div>
                {
                    
                    chefs.map(chef => <FavouriteList key={chef.id} chefName={chef.chef_name} recipes={chef.recipes}></FavouriteList>)
                }
            </div>
        </div>
    );
};

export default Favourites;