import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [accepted, setAccepted] = useState(false);

    const navigate = useNavigate();

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
                setErrorMessage('');
                navigate("/");
            })
            .catch(error => {
                console.log(error);
                setErrorMessage(formatFirebaseError(error));
            })
    }

    const handleAccepted = (event)=>{
        setAccepted(event.target.checked);
    }

    return (
        <div className='mx-auto w-11/12 md:w-1/2 bg-white p-8 mt-2 rounded'>
            <h3 className='text-center font-semibold text-4xl'>Registration</h3>
            <form onSubmit={handleRegistration} className="form-control">
                <label className="label">
                    <span className="label-text text-xl">Your Name</span>
                </label>
                <input name='name' type="text" placeholder="Jane Doe" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Your Email*</span>
                </label>
                <input name='email' type="email" required placeholder="example@mail.com" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Your Password*</span>
                </label>
                <input name='password' type="password" required placeholder="Must be atleast 6 characters" className="input input-bordered" />

                <label className="label">
                    <span className="label-text text-xl">Photo URL</span>
                </label>
                <input name='photo' type="text" placeholder="http://www.imgurl.com" className="input input-bordered" />

                <div className="flex mt-3">
                    <span className="mr-3">Accept Terms and Conditions</span>
                    <input onClick={handleAccepted} type="checkbox" className="checkbox" />
                </div>

                <button type='submit' disabled={!accepted} className="btn mt-3">Register</button>
                {
                    errorMessage &&
                    <h3 className='text-red-500'>{errorMessage}</h3>
                }
                <h3 className='mt-3'>Already have an account? <Link className='text-blue-500' to='/login'>Login</Link></h3>
            </form>
        </div>
    );
};

export default Register;