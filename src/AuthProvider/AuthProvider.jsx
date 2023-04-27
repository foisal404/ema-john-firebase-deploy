import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

export const authContext=createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
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

    useEffect(()=>{
        const unsubscribe=()=>{
            onAuthStateChanged(auth,CurrentUser=>{
                console.log("auth change",CurrentUser);
                setUser(CurrentUser)
            })
        }
       
        return unsubscribe();
    },[])
    
    const use={
        user,
        auth,
        googleSignin,
        signUp,
        singIn,
        logOut
    }
    return (
        <authContext.Provider value={use}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;