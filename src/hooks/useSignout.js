import { auth } from "../firebase/config"
import { signOut } from "firebase/auth"
import { useEffect, useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useSignout = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [isCanceled, setIsCanceled] = useState(null)
  const { dispatch } = useAuthContext()

  const signout = async () => {

    try {

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
