import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuth from '../../src/firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const createUser = (email, password, name, history) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                saveUser(email, name, 'POST');
            })
            .then(() => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
            })
            .catch(error => setError(error.message))
            .finally(() => {
                history.push('/home')
                setLoading(false)
            })
    }

    const googleSignIn = (location, history) => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {

                const { email, displayName } = result.user;
                saveUser(email, displayName, 'PUT');
            })
            .catch(error => setError(error.message))
            .finally(() => {
                if (location) {
                    history.push(`${location?.pathname}`)
                } else {
                    history.push('/home')
                }
                setLoading(false)
            })
    }

    const manualSignIn = (email, password, location, history) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
            })
            .catch(error => setError(error.message))
            .finally(() => {
                if (location) {
                    history.push(`${location?.pathname}`)
                } else {
                    history.push('/home')
                }
                setLoading(false)
            })
    }

    const logOut = () => {

        signOut(auth)
            .catch(error => setError(error.message))
    }

    const saveUser = (email, name, method) => {

        const user = { email: email, name: name }

        fetch(`https://thawing-tor-41615.herokuapp.com/users`, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => { })
    }

    useEffect(() => {

        fetch(`https://thawing-tor-41615.herokuapp.com/admin/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    }, [user?.email])

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)
            } else {
                setUser(null)
                setLoading(false)
            }
        })
    }, [])


    return {
        user,
        error,
        loading,
        admin,
        setLoading,
        createUser,
        logOut,
        saveUser,
        manualSignIn,
        googleSignIn
    }
}


export default useFirebase;