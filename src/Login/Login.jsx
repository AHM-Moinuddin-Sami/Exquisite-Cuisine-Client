import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';



const Login = () => {

    const { logIn } = useContext(AuthContext);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logIn(email.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(err =>{
                console.log(err);
            })


    }

    return (
        <div className='mx-auto w-1/2'>
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
                <h3><small>Don't have an account? <Link to='/register'>Register Now!</Link></small></h3>
                
            </form>
        </div>
    );
};

export default Login;