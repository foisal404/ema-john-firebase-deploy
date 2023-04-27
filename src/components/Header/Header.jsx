import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const Header = () => {
    const {auth,user,logOut}=useContext(authContext)
    const handlelogOut=()=>{
        logOut()
        .then(()=>{
            toast("logout Succesfully")
        })
        .catch(error=>{
            console.error(error.message);
        })
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
            <div className='user-section'>
                {
                    user?<>{user.email} <button onClick={handlelogOut}>Logout</button></> :""
                }
            </div>
        </nav>
    );
};

export default Header;