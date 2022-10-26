import React, { useState } from 'react';
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useEffect } from 'react';


//Auth context setup
const auth = getAuth(app);
export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //Sign with google
    const googleProvider = new GoogleAuthProvider();

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

    //upadate user profile
    const updateUseProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    //Sign With Google Function
    const signWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    //Currently user StateChanged
    useEffect( () => {
       const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => unsubscribe();
    },[])
    

    const authInfo = {user,
         createUser,
          signIn, 
          logOut, 
          loading, 
          updateUseProfile,
          signWithGoogle
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


