import { signInWithEmailAndPassword } from "firebase/auth"
import { collection, doc, updateDoc } from "firebase/firestore"
import { useState, useEffect, useRef } from "react"
import { auth, db } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [isCanceled, setIsCanceled] = useState(false)
    const { dispatch, user } = useAuthContext()
    const docRef = collection(db, 'users')

    const login = async (email, password) => {

        setError(null)
        setLoading(true)

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {

                updateDoc(doc(docRef, res.user.uid), { online: true })
                dispatch({ type: 'LOGIN', payload: res.user })
                setLoading(false)

            }).catch((error) => {

                setLoading(false)
                setError(error.message)

            })


    }

    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return { login, loading, error }
}
