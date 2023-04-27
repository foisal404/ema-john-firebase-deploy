import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    
    
    const use={
        auth
    }
    return (
        <authContext.Provider value={use}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;