import React, { useContext } from 'react';
import { AuthContext } from '../../../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const ListData = ({ name, chefName, id, chefId }) => {

    return (
        <div className='border-b border-black pb-1 pl-5'>
            <Link className='text-2xl' to={`/chefs/${chefId}`}>
                {name} by {chefName}
            </Link>
        </div>
    );
};

export default ListData;