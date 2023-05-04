import React, { useContext } from 'react';
import ListData from './ListData/ListData';
import { AuthContext } from '../../../../Providers/AuthProvider';

const FavouriteList = ({ recipes, chefName, chefId }) => {
    const { user } = useContext(AuthContext);

    let favArray;

    if (user)
        favArray = JSON.parse(localStorage.getItem(user.uid));


    return (
        <div>
            <ul className="menu bg-base-100 w-full gap-1">
                {
                    favArray ?
                        recipes.map(recipe => {
                            if (favArray.find(fav => fav === recipe.id)) {
                                return <ListData key={recipe.id} chefId={chefId} id={recipe.id} chefName={chefName} name={recipe.recipe_name}></ListData>
                            }
                        }

                        ) :
                        <div className='bg-white text-9xl'>You Have No Favourites</div>
                }

            </ul>
        </div>
    );
}


export default FavouriteList;