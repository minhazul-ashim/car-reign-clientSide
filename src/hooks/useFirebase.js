import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { useState } from 'react';
import initializeAuth from '../../src/firebase/firebase.init'

initializeAuth();

const useFirebase = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    const auth = getAuth()

    const googleSignIn = () => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => console.log(result))
            .catch(error => setError(error.message))
    }


    return {
        googleSignIn
    }
}


export default useFirebase;