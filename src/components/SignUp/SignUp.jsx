import React, { useContext } from 'react';
import './SignUp.css'

import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const SignUp = () => {
    const {googleSignin}=useContext(authContext);
    const handlerGoogleIN=()=>{
        googleSignin()
        .then(result=>{
            console.log(result.user);
            console.log("log In");
        })
        .catch(error=>{
            console.log(error.nessage);
        })
    }
    const handleForm=event=>{
        event.preventDefault();
    }
    return (
        <div className='section-center'>
                <h1 className='head-text'>Sign Up</h1>
            <form className='form-div'>
                <label htmlFor="email">Email</label>
                <input className='input-full' type="email" name='email' id='email'  required/>
                <label htmlFor="password">Password</label>
                <input className='input-full' type="password" name='password' required />
                <label htmlFor="confirm">Confirm Password</label>
                <input className='input-full' type="password" name='confirm' required />
                <input className='btn-color input-full' type="submit" value="Sign Up"   onClick={handleForm}/>
                <p className='para'>Already have an account?<Link to='/login'>Login</Link></p>

                <div className='or-class'>
                    <hr />
                    <small>or</small>
                    <hr />
                </div>
                <button className='input-full bg-white-btn' onClick={handlerGoogleIN}>Continue with Google</button>

            </form>
        </div>
    );
};

export default SignUp;