import { useState, useEffect } from 'react'
import { auth, storage, db } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { useAuthContext } from "./"
import { collection, doc, setDoc } from "firebase/firestore"

export const useSignup = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [isCanceled, setIsCanceled] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, displayName, thumbnail) => {

        setLoading(true)
        setError(null)

        try {

            const { user } = await createUserWithEmailAndPassword(auth, email, password)
            console.log({ user })

            // Upload user thumbnail
            const uploadPath = `thumbnails/${user.uid}/${thumbnail.name}`
            const image = await uploadBytes(ref(storage, uploadPath, thumbnail))
            const imageUrl = await getDownloadURL(image.ref)
            console.log('image url attained')

            await updateProfile(user, { displayName, photoURL: imageUrl })
            console.log('User profile updated')

            // Create user document
            const docRef = collection(db, 'users')
            await setDoc(doc(docRef, user.uid), {
                online: true,
                displayName,
                photoURL: imageUrl,
            })

            dispatch({ type: 'LOGIN', payload: user })

            if (isCanceled) {
                return
            }

            setLoading(false)
            setError(null)

        } catch (error) {

            if (isCanceled) {
                return
            }

            setLoading(false)
            console.log(error.message)

            if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                setError('That email is already in use, please try again.')
            }
            if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                setError('Password must be at least 6 characters.')
            }
        }

    }

    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return { signup, error, loading }
}
