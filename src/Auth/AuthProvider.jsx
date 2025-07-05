import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../FireBase/Firebase.init';

const provider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const CreateUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
        
    }
    const signInWithGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const signout = () =>{
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);

        })
        return (() => {
            unsubscribe();
        })
    })



    const authData = {
        user,
        CreateUser,
        signInUser,
        signInWithGoogle,
        signout,
        loading
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;