import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState(null);

    function formatFirebaseError(error) {
        let message = 'An error occurred.';

        switch (error.code) {
            case 'auth/email-already-in-use':
                message = 'The email address is already in use.';
                break;
            case 'auth/weak-password':
                message = 'The password cannot be less than 6 characters.';
                break; 
        }

        return message;
    }

    const { register } = useContext(AuthContext);

    const handleRegistration = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const photo = event.target.photo.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        register(email, password)
            .then(result => {
                const createdUser = result.user;
                createdUser.photoURL = photo;
                createdUser.displayName = name;
                console.log(createdUser);
                setErrorMessage('');
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(formatFirebaseError(error));
            })
    }

    return (
        <div className='mx-auto w-1/2'>
            <form onSubmit={handleRegistration} className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Your Name</span>
                </label>
                <input name='name' type="text" placeholder="Type here" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Your Email*</span>
                </label>
                <input name='email' type="email" required placeholder="Type here" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Your Password*</span>
                </label>
                <input name='password' type="password" required placeholder="Type here" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="Type here" className="input input-bordered" />

                <br />

                <button type='submit' className="btn">Register</button>
                {
                    errorMessage &&
                    <h3 className='text-red-500'>{errorMessage}</h3>
                }
                <h3><small>Already have an account? <Link to='/login'>Login</Link></small></h3>
            </form>
        </div>
    );
};

export default Register;