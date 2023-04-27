import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
    const {googleSignin}=useContext(authContext)
    const handlerGoogleIN= ()=>{
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
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
    }
    return (
        <div className='section-center'>
                <h1 className='head-text'>Login</h1>
            <form className='form-div' onSubmit={handleForm}>
                <label htmlFor="email">Email</label>
                <input className='input-full' type="email" name='email' id='email'  required/>
                <label htmlFor="password">Password</label>
                <input className='input-full' type="password" name='password' required />
                <input className='btn-color input-full' type="submit" value="Login"  />
                
            </form>
            <div className="extra-option">
                <p className='para'>New to Ema-john?<Link to='/signup'> Create New Account</Link></p>
                <div className='or-class'>
                    <hr />
                    <small>or</small>
                    <hr />
                </div>
                <button className='input-full bg-white-btn' >Continue with Google</button>

            </div>
        </div>
    );
};

export default Login;