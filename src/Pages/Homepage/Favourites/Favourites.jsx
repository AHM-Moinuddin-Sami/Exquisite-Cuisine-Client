import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import FavouriteList from './FavouriteList/FavouriteList';
import { AuthContext } from '../../../Providers/AuthProvider';

const Favourites = ({ chefs }) => {

    const { user } = useContext(AuthContext)

    let [noFav, setNoFav] = useState(0);
    
    let favArray;

    if (user)
        favArray = JSON.parse(localStorage.getItem(user.uid));

    return (
        <div>
            <div>
                <div className='bg-gradient-to-r from-transparent via-black mt-6'>
                    <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Your Favourites</h3>
                </div>
                <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-orange-400 via-red-600 to-orange-400"></div>
            </div>
            <div className='flex flex-col bg-white'>
                {
                    user && favArray ?
                        chefs.map(chef => <FavouriteList key={chef.id} chefName={chef.chef_name} chefId={chef.id} recipes={chef.recipes}></FavouriteList>) :
                        <div className='bg-white text-2xl rounded p-5'>{
                            favArray===undefined? <p>You aren't logged in! Login to your account to see your favourites, or Register if you don't have an account</p>:<p>You have no favourited recipe. Check out our featured chef and chefs section for some amazing recipes!</p>
                            }</div>
                }
            </div>
        </div>
    );
};

export default Favourites;