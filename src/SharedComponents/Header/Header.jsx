import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [photo, setPhoto] = useState(null);

    

    const location = useLocation();

    return (
        <div className='flex justify-between items-center  p-5 bg-black'>

            <Link to='/' className=' text-2xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'> Exquisite Cuisine</Link>

            <div className='grid grid-cols-2 tabs gap-6  bg-black'>
                <Link to='/' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/' ? 'border-white' : ' border-black'}`}>Home</Link>

                <Link to='/blog' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/blog' ? 'border-white' : ' border-black'}`}>Blog</Link>
            </div>

            {
                user ?
                    <>
                        <div className='flex justify-center items-center gap-[2vh]'>
                            <div className={user.displayName? `tooltip hover:tooltip-open tooltip-bottom`:''} data-tip={user.displayName}>
                                {
                                    user.photoURL?
                                    <img className='rounded-full w-10 h-10' src={user.photoURL} alt="" />
                                    :
                                    <FaRegUserCircle className='h-10 w-10 text-white'></FaRegUserCircle>
                                }
                            </div>
                            <Link className='text-2xl text-white' onClick={logOut}><button>Logout</button></Link>
                        </div>
                    </>
                    :
                    <div className='flex text-white text-2xl gap-3'>
                        <Link to='/login'><button>Login</button></Link>
                    </div>

            }

        </div>
    );
};

export default Header;