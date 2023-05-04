import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="card w-6/12 mx-auto bg-base-100 shadow-xl p-16 mt-16">
            <div className="card-body items-center">
                <h2 className="card-title text-8xl text-red-500">404 Not Found</h2>
                <p>The page you were trying to access does not exist. Please press the button below to return to the homepage.</p>
                <div className="card-actions justify-end">
                    <Link to={`/`}><button className="btn">Return to Homepage</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;