import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeTabContent = ({ id, name, ingredients, method, rating, img }) => {
    const { user } = useContext(AuthContext);

    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem(user.uid))
        if (localStorage.getItem(user.uid)) {
            if (favs.find(fav => fav === id))
                setIsFav(true);
        }
    }, [isFav, id, user.uid])

    const handleFavourites = () => {
        if (localStorage.getItem(user.uid)) {
            const favArray = JSON.parse(localStorage.getItem(user.uid));
            favArray.push(id)
            localStorage.setItem(user.uid, JSON.stringify(favArray));
            setIsFav(true);
        }
        else {
            const favArray = [id];
            localStorage.setItem(user.uid, JSON.stringify(favArray));
            setIsFav(true);
        }
        toast("This Recipe has been added to your favourites!");
    }


    return (
        <div className=''>
            <img className='w-full h-[50vh] rounded object-cover' src={img} />
            <ToastContainer />
            <div className='flex flex-col gap-3 mt-1'>
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

                <button onClick={handleFavourites} disabled={isFav} className='bg-gradient-to-b from-red-500 to-orange-500 hover:from-red-600 active:from-red-800 hover:to-orange-600 active:to-orange-800 rounded text-white w-2/12 py-3 disabled:from-gray-400 disabled:to-gray-300'>Favourite this recipe</button>
            </div>
        </div>
    );
};

export default RecipeTabContent;