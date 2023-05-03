import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className='w-10/12 mx-auto'>
                <Outlet></Outlet>
            </div>
            <Footer className='mt-auto'></Footer>
        </div>
    );
};

export default Main;