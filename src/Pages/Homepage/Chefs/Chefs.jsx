import React from 'react';
import Card from './Card/Card';

const Chefs = (params) => {

    const { chefs } = params;

    return (
        <div>
            <h3 className='text-center mb-6 font-semibold text-6xl'>Chefs Section</h3>
            <hr className='border border-black mb-4' />
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    chefs.map(chef => <Card key={chef.id} id={chef.id} name={chef.chef_name} photo={chef.chef_picture} years={chef.years_of_experience} likes={chef.likes} recipes={chef.recipes.length}></Card>)
                }
            </div>
        </div>

    );
};

export default Chefs;