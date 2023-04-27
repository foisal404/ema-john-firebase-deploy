import React, { createContext } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const googleSignin=()=>{
        return signInWithPopup(auth,provider)
    }

    const signUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logOut=()=>{
        return signOut(auth);
    }

    const singIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }
    
    const use={
        auth,
        googleSignin,
        signUp,
        singIn
    }
    return (
        <authContext.Provider value={use}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;