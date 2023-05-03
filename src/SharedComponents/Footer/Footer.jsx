import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Footer = () => {

    const {loading} = useContext(AuthContext);

    return (
        <div className={`bg-black text-white  w-full h-32 text-center ${loading?'fixed bottom-0':''}`}>
            <p>Copyright</p>
        </div>
    );
};

export default Footer;