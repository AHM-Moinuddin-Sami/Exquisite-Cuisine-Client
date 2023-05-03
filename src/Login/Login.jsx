import React from 'react';



const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
    
    
    }

    return (
        <div>
            <form onSubmit={handleLogin} className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text text-xl">Your Email</span>
                </label>
                <input name='email' type="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text text-xl">Your Password</span>
                </label>
                <input name='password' type="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button type='submit' className="btn">Responsive</button>
            </form>


        </div>
    );
};

export default Login;