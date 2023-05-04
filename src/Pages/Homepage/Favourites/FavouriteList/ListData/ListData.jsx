import React from 'react';

const ListData = ({name, chefName}) => {
    return (
        <li>
            {name} by {chefName}
        </li>
    );
};

export default ListData;