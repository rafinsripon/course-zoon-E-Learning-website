import React, { useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


//Auth context setup
const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    //logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    //Currently user StateChanged
    useEffect( () => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    

    const authInfo = {user, createUser, signIn, logOut, loading}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


