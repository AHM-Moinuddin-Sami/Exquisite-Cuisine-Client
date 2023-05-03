import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';



const Login = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    function formatFirebaseError(error) {
        let message = 'An error occurred.';

        switch (error.code) {
            case 'auth/invalid-email':
            case 'auth/wrong-password':
            case 'auth/user-not-found':
            case 'auth/missing-email':
                message = 'The provided email or password is invalid.';
                break;
        }

        return message;
    }

    const { logIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
                setErrorMessage('');
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(formatFirebaseError(error));
            })


    }

    return (
        <div className='mx-auto w-11/12 md:w-1/2 mb-4 bg-white p-10 rounded mt-16'>
            <form onSubmit={handleLogin} className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Your Email</span>
                </label>
                <input name='email' type="email" required placeholder="Type here" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Your Password</span>
                </label>
                <input name='password' required type="password" placeholder="Type here" className="input input-bordered" />

                <br />

                <button type='submit' className="btn">Login</button>

                {
                    errorMessage &&
                    <h3 className='text-red-500'>{errorMessage}</h3>
                }

                <h3><small>Don't have an account? <Link to='/register'>Register Now!</Link></small></h3>

            </form>
        </div>
    );
};

export default Login;