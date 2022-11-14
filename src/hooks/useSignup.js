import { useEffect, useState } from "react"
import { auth } from '../firebase/config'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useAuthContext } from "./"

export const useSignup = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [isCanceled, setIsCanceled] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (email, password, displayName) => {

    setLoading(true)
    setError(null)

    try {

      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      console.debug({ user })

      await updateProfile(user, { displayName })
      console.debug('User profile updated')

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
      if (error.message = 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
        setError('Password must be at least 6 characters.')
      }
    }

  }

  useEffect(() => {
    return () => setIsCanceled(true)
  }, [])

  return { signup, error, loading }
}
