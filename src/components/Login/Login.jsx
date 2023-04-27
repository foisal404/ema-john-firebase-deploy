import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='section-center'>
                <h1 className='head-text'>Login</h1>
            <form className='form-div'>
                <label htmlFor="email">Email</label>
                <input className='input-full' type="email" name='email' id='email'  required/>
                <label htmlFor="password">Password</label>
                <input className='input-full' type="password" name='password' required />
                <input className='btn-color input-full' type="submit" value="Login"  />
                <p className='para'>New to Ema-john?<Link to='/signup'> Create New Account</Link></p>
                <div className='or-class'>
                    <hr />
                    <small>or</small>
                    <hr />
                </div>
                <button className='input-full bg-white-btn'>Continue with Google</button>

            </form>
        </div>
    );
};

export default Login;