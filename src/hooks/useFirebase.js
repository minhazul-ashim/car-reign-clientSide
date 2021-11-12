import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuth from '../../src/firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth();

    const createUser = (email, password, name) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result)
                saveUser(email, name, 'POST')
            })
            .catch(error => setError(error.message))
    }

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const { email, displayName } = result.user;
                saveUser(email, displayName, 'PUT')
            })
            .catch(error => setError(error.message))
    }

    const manualSignIn = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result))
            .catch(error => setError(error.message))
    }

    const logOut = () => {

        signOut(auth)
            .catch(error => setError(error.message))
    }

    const saveUser = (email, name, method) => {

        const user = { email: email, name: name }

        fetch(`http://localhost:5000/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])


    return {
        user,
        error,
        loading,
        setLoading,
        createUser,
        logOut,
        manualSignIn,
        googleSignIn
    }
}


export default useFirebase;