import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { FaRegUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [activeDropdown, setActiveDropdown] = useState(false);

    const handleDropdown = () => {
        setActiveDropdown(!activeDropdown);
    }


    const location = useLocation();

    return (
        <div className='md:flex md:grid-cols-none grid grid-cols-2 justify-between items-center p-5 bg-black'>
            <Link to='/' className='order-1 text-2xl md:block hidden font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600'> Exquisite Cuisine</Link>

            <Link to='/' className='w-14 order-1 md:hidden  h-14 mx-5'>
                <svg className="" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 119.66">
                    <path fill="white" d="M34.34,112.6C23.61,109.25,16,104.52,10.48,97.41S1.84,81,0,68.29a1.87,1.87,0,0,1,0-.67A17.45,17.45,0,0,1,4.12,56.35c2-2.45,4.85-4.2,8.68-5.56a11.88,11.88,0,0,1,3.22-7,14.32,14.32,0,0,1,7.92-4.12A28.62,28.62,0,0,1,38.23,32a30.55,30.55,0,0,1,17.29,1.2c.35.14,1.49.71,2.52,1.23a.9.9,0,0,1,.35.28A22.64,22.64,0,0,1,70.08,30a24.51,24.51,0,0,1,8.49.61L92.1,3.52c1.23-2.4,3.2-4.7,7-2.84a6.28,6.28,0,0,1,2.52,2.18c1.74,2.66.28,4.51-1,6.8L85.94,34a16.86,16.86,0,0,1,3,2.68l.11.13A13.43,13.43,0,0,1,92,42.4c1.28.36,2.51.77,3.67,1.21l17-28.36c1.42-2.29,3.56-4.42,7.22-2.27a6.36,6.36,0,0,1,2.34,2.38c1.51,2.79-.08,4.52-1.58,6.69L102.88,47.39a24.55,24.55,0,0,1,4.48,4,17.36,17.36,0,0,1,4.19,15.48,2.36,2.36,0,0,1-.16.47,2.14,2.14,0,0,1,.11.67,2.45,2.45,0,0,1,0,.27,47.22,47.22,0,0,1-10.6,27.93c-5.88,7-14.47,12.88-26.51,16.46h-.06v6.13a.86.86,0,0,1-.86.86H35.52a1.11,1.11,0,0,1-1.11-1.1v-5.93l-.07,0ZM82.18,61.39a2.17,2.17,0,0,1,0-4.34h5.14a2.17,2.17,0,0,1,0,4.34Zm-1.3-15a2.16,2.16,0,1,1-1.76,3.95l-4.69-2.11a2.16,2.16,0,0,1,1.76-3.95l4.69,2.11Zm-26,1.29a2.16,2.16,0,1,1,1.62-4l5.15,2.1a2.16,2.16,0,1,1-1.63,4l-5.14-2.1ZM53,61.39a2.17,2.17,0,0,1,0-4.34h5.14a2.17,2.17,0,0,1,0,4.34ZM35.5,51A2.16,2.16,0,0,1,33.74,47l4.69-2.11a2.16,2.16,0,1,1,1.76,3.94L35.5,51ZM25.42,61.39a2.17,2.17,0,0,1,0-4.34h5.15a2.17,2.17,0,0,1,0,4.34ZM5.15,66H107.32v0a13.16,13.16,0,0,0-3.24-11.72c-3-3.49-7.93-6.34-14.51-8a2.17,2.17,0,0,1-1.64-1.88,8.7,8.7,0,0,0-2.15-4.76l-.1-.1a15.24,15.24,0,0,0-6.44-4.15,20.32,20.32,0,0,0-8.73-1,18.36,18.36,0,0,0-10.26,4.4,2.14,2.14,0,0,1-1.49.59,8.55,8.55,0,0,1-2.68-1.08c-.91-.45-1.91-1-2.12-1a26,26,0,0,0-14.83-1,24.1,24.1,0,0,0-12.56,7,2.11,2.11,0,0,1-1.35.69,10,10,0,0,0-6.07,2.9A7.84,7.84,0,0,0,17,52.23a2.17,2.17,0,0,1-1.51,2.22c-3.76,1.17-6.41,2.61-8.06,4.63A11.57,11.57,0,0,0,5.15,66ZM96.68,76.3a1.52,1.52,0,1,1,2.8,1.16A57.45,57.45,0,0,1,97,82.78a56,56,0,0,1-3,5,1.52,1.52,0,1,1-2.51-1.7,53.33,53.33,0,0,0,2.87-4.74,55.13,55.13,0,0,0,2.39-5ZM88.31,90.23a1.51,1.51,0,1,1,2.31,2c-.89,1.06-1.82,2.07-2.76,3S86,97,85,97.82A1.51,1.51,0,1,1,83,95.48c.91-.75,1.81-1.57,2.69-2.44s1.76-1.84,2.58-2.81ZM13.68,94.94c4.9,6.38,11.88,10.66,21.71,13.75H73.52c11-3.33,18.9-8.68,24.25-15.09A42.65,42.65,0,0,0,107.29,70H4.38C6.14,80.82,9,88.88,13.68,94.94Z" />
                </svg>
            </Link>
            <div className="dropdown mt-6 md:hidden w-full order-3 col-span-full">
                <label onClick={handleDropdown} tabIndex={0} className="btn w-full rounded-btn">
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                </label>
                <ul tabIndex={0} className={`menu w-full left-1/2 translate-x-[-50%] dropdown-content p-2 ${activeDropdown ? '' : 'hidden'} shadow bg-base-100 rounded-box w-52 mt-4`}>
                    <Link to='/' className={`tab text-black rounded md:text-white border-b-2 text-2xl ${location.pathname === '/' ? 'bg-blue-300 border-black md:border-white' : 'border-white md:border-black'}`}>Home</Link>

                    <Link to='/blog' className={`tab text-black md:text-white border-b-2 text-2xl ${location.pathname === '/blog' ? 'bg-blue-300 border-black md:border-white' : 'border-white md:border-black'}`}>Blog</Link>
                </ul>
            </div>
            <div className='md:grid grid-cols-2  hidden md:order-2 tabs gap-6 bg-black'>
                <Link to='/' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/' ? 'border-white' : ' border-black'}`}>Home</Link>

                <Link to='/blog' className={`tab text-white border-b-2 text-2xl ${location.pathname === '/blog' ? 'border-white' : ' border-black'}`}>Blog</Link>
            </div>

            {
                user ?
                    <>
                        <div className='flex order-2 md:order-3 justify-center items-center gap-[1vh] md:gap-[2vh]'>
                            <div className={user.displayName ? `tooltip hover:tooltip-open tooltip-bottom` : ''} data-tip={user.displayName}>
                                {
                                    user.photoURL ?
                                        <img className='rounded-full md:w-10 w-14 h-14 md:h-10' src={user.photoURL} alt="" />
                                        :
                                        <FaRegUserCircle className='h-10 w-10 text-white'></FaRegUserCircle>
                                }
                            </div>
                            <Link className='text-xl md:text-2xl text-white' onClick={logOut}><button>Logout</button></Link>
                        </div>
                    </>
                    :
                    <div className='flex order-2 md:order-3 text-white text-2xl gap-3'>
                        <Link to='/login'><button>Login</button></Link>
                    </div>

            }

        </div>
    );
};

export default Header;