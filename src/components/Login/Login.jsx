import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {googleSignin,singIn}=useContext(authContext)
    const handlerGoogleIN= ()=>{
        googleSignin()
        .then(result=>{
            console.log(result.user);
            console.log("log In");
            toast("log in Succesfully")
        })
        .catch(error=>{
            console.log(error.nessage);
            toast(error.nessage);
        })
    }
    const handleForm=event=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        singIn(email,password)
        .then(result=>{
            const logged=result.user;
            toast(`succesfully ${logged.email}   in`)
        })
        .catch(error=>{
            console.error(error.message);
            toast(error.message)
        })
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