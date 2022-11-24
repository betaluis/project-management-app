import { auth, db } from "../firebase/config"
import { signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { collection, doc, updateDoc } from "firebase/firestore"

export const useSignout = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [isCanceled, setIsCanceled] = useState(null)
    const { dispatch, user } = useAuthContext()

    const signout = async () => {

        try {
            const docRef = collection(db, 'users')
            await updateDoc(doc(docRef, user.uid), {
                online: false,
            })

            signOut(auth)
            dispatch({ type: "LOGOUT" })

            if (isCanceled) return
            setLoading(false)
            setError(null)

        } catch (error) {

            if (isCanceled) return
            setError(error.message)
            console.log(error.message)

        }

    }

    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return { signout, error, loading }

}
