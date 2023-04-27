import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user,loader}=useContext(authContext)
    const location=useLocation();
    console.log(location);
    if(loader){
        return <p>loading........</p>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>

    
};

export default ProtectedRoute;