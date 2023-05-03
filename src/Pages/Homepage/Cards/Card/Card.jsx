import React from 'react';

const Card = (params) => {
    const{name} = params
    return (
        <div>
            Card: {name}
        </div>
    );
};

export default Card;