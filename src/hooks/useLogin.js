import { useState, useEffect } from 'react';

import { useAuthContext } from '../hooks/useAuthContext';
import { projectAuth } from '../firebase/config';

const useLogin = () => {

    const [isCanceled, setIsCanceled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(null);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {

        setIsPending(true);
        setError(null); 
        
        try {
            const res = projectAuth.signInWithEmailAndPassword(email, password);
            dispatch({ 
                type: "LOGIN",
                payload: res.user
            });
            
            if ( isCanceled ) return;
            setIsPending(false);
            setError(false);
        } catch (error) {
            if ( isCanceled ) return;
            setIsPending(false);
            setError(error.message);
            console.log(error.message)
        }
    }

    useEffect(() => {
        return () => setIsCanceled(true);
    }, [])

    return { error, isPending, login }
}