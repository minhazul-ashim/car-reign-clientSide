import { GoogleAuthProvider, signInWithPopup, getAuth, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeAuth from '../../src/firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false);


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
                saveUser(email, displayName, 'PUT');
                checkAdmin(email);
            })
            .catch(error => setError(error.message))
    }

    const manualSignIn = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => { checkAdmin(email) })
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
            .then(data => { })
    }

    const checkAdmin = (email) => {

        fetch(`http://localhost:5000/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
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
        admin,
        setLoading,
        createUser,
        logOut,
        manualSignIn,
        googleSignIn
    }
}


export default useFirebase;