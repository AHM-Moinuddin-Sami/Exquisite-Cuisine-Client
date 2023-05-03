import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <div>

            <Link to='/' className=' text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'> Exquisite Cuisine</Link>

            <Link>Home</Link>

            <Link>Blog</Link>

            {
                user ?
                    <><h3>{user}</h3>
                        <Link to='/login'><button>Login</button></Link></>
                        :
                        <>
                        <Link to='/logout'><button>Logout</button></Link></>
            }

        </div>
    );
};

export default Header;