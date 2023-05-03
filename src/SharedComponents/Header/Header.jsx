import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    return (
        <div className='flex justify-between items-center  p-5 bg-black'>

            <Link to='/' className=' text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'> Exquisite Cuisine</Link>

            <div className='grid grid-cols-2 tabs gap-6  bg-black'>
                <Link to='/' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/' ? 'border-white':' border-black'}`}>Home</Link>

                <Link to='/blog' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/blog' ? 'border-white':' border-black'}`}>Blog</Link>
            </div>

            {
                user ?
                    <div className='flex text-white text-2xl gap-3'>
                        <h3>{user}</h3>
                        <Link to='/login'><button>Login</button></Link>
                    </div>
                    :
                    <>
                        <Link className='text-2xl text-white' to='/'><button>Logout</button></Link></>
            }

        </div>
    );
};

export default Header;