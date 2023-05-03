import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../SharedComponents/Header/Header';
import Footer from '../SharedComponents/Footer/Footer';
import './Main.css';

const Main = () => {
    return (
        <div id='main-body'>
            <Header id='header'></Header>
            <Outlet id='content-container' ></Outlet>
            <Footer id='footer'></Footer>
        </div>
    );
};

export default Main;