import React from 'react';
import Card from './Card/Card';

const Chefs = (params) => {

    const { chefs } = params;

    const splitChefs = chefs.slice(0, -1);

    return (
        <div>
            <div className='bg-gradient-to-r from-transparent via-black mt-6'>
                    <h3 className='font-semibold text-center text-6xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'>Chefs Section</h3>
                </div>
            
            <div className="w-full h-[2px] rounded mt-3 mb-6 bg-gradient-to-r from-red-600 to-orange-600"></div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    splitChefs.map(chef => <Card key={chef.id} id={chef.id} name={chef.chef_name} photo={chef.chef_picture} years={chef.years_of_experience} likes={chef.likes} recipes={chef.recipes.length}></Card>)
                }
            </div>
        </div>

    );
};

export default Chefs;