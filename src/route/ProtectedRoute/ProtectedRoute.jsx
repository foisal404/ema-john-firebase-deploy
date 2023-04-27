import React, { useContext } from 'react';
import { authContext } from '../../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user}=useContext(authContext)
    if(user){
        return children
    }
    return <Navigate to='/login'></Navigate>

    
};

export default ProtectedRoute;