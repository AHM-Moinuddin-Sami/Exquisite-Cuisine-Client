import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Header = () => {

    const { user } = useContext(AuthContext);

    const location = useLocation();

    return (
        <div className='flex justify-between items-center p-5 bg-purple-300'>

            <Link to='/' className=' text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'> Exquisite Cuisine</Link>

            <div className='grid grid-cols-2 tabs gap-6'>
                <Link to='/' className={`tab tab-bordered text-2xl ${location.pathname === '/' ? 'tab-active':''}`}>Home</Link>

                <Link to='/blog' className={`tab tab-bordered text-2xl ${location.pathname === '/blog' ? 'tab-active':''}`}>Blog</Link>
            </div>

            {
                user ?
                    <div className='flex text-2xl gap-3'>
                        <h3>{user}</h3>
                        <Link to='/login'><button>Login</button></Link>
                    </div>
                    :
                    <>
                        <Link className='text-2xl' to='/'><button>Logout</button></Link></>
            }

        </div>
    );
};

export default Header;