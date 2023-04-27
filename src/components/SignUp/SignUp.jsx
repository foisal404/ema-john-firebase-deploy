import React, { useContext } from 'react';
import './SignUp.css'

import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const SignUp = () => {
    // contest api 
    const {googleSignin,signUp}=useContext(authContext);
    //google sign in
    const handlerGoogleIN=()=>{
        googleSignin()
        .then(result=>{
            console.log(result.user);
            // console.log("log In");
            toast("log in Succesfully")
        })
        .catch(error=>{
            console.log(error.nessage);
            toast(error.message)
        })
    }
    //form handler
    const handleForm=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const confirm=form.confirm.value;
        if(password!==confirm){
            toast("Password doesn't match")
            return;
        }
        signUp(email,password)
        .then(result=>{
            const logged=result.user;
            toast(logged)
            toast("succesfully create Account")
        })
        .catch(error=>{
            console.log(error.message)
            toast(error.message)
        })
        
    }
    return (
        <div className='section-center'>
                <h1 className='head-text'>Sign Up</h1>
            <form className='form-div' onSubmit={handleForm}>
                <label htmlFor="email">Email</label>
                <input className='input-full' type="email" name='email' id='email'  required/>
                <label htmlFor="password">Password</label>
                <input className='input-full' type="password" name='password' required />
                <label htmlFor="confirm">Confirm Password</label>
                <input className='input-full' type="password" name='confirm' required />
                <input className='btn-color input-full' type="submit" value="Sign Up" />
            </form>
            
            <div className='extra-option'>
                <p className='para'>Already have an account?<Link to='/login'> Login</Link></p>
                <div className='or-class'>
                        <hr />
                        <small>or</small>
                        <hr />
                </div>
                <button className='input-full bg-white-btn' onClick={handlerGoogleIN}>Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;