import React from 'react';
import Card from './Card/Card';

const Cards = (params) => {

    const {chefs} = params;
    
    console.log(chefs);
    return (
        <div>
            {
                chefs.map(chef => <Card key={chef.id} name={chef.chef_name}></Card>)
            }
        </div>
    );
};

export default Cards;