import { signInWithEmailAndPassword } from "firebase/auth"
import { useState, useEffect, useRef } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const mountedRef = useRef(true)
  const { dispatch } = useAuthContext()

  const login = async (email, password) => {

    setError(null)
    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user })
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(error.message)
      })

  }

  useEffect(() => {
    return () => mountedRef.current = false
  }, [])

  return { login, loading, error }
}
