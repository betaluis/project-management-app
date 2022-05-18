import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {

    const [isCanceled, setIsCanceled] = useState(false);
    const [isPending, setIsPending] = useState(null);
    const [error, setError] = useState(null);
    
    const signup = async (email, password, displayName) => {
        
        setIsPending(true)
        setError(null)

        try {
            const res = await projectAuth.signInWithEmailAndPassword(email, password);
            if (!res) throw new Error("There was a problem signing up.")

            // Update profile to have a display name.
            await res.user.updateProfile({ displayName })

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

    return { isPending, error, signup }
}