import React, { useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';

//Auth context setup
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({name: 'rafins'});

    //signWith Google
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }

    //Sign up / create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //sign In / LogIn
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //onAuthStateChanged
    useEffect( () => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubcribe();
    },[])


    const authInfo = {user, createUser, logIn, providerLogin}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


