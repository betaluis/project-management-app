import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useReducer, createContext } from "react"
import { auth } from "../firebase/config"

export const AuthContext = createContext()

const initial = {
    user: null,
    authIsReady: false,
}

const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        case "AUTH_IS_READY":
            return { ...state, authIsReady: true, user: action.payload }
        default:
            return state
    }

}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initial)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            dispatch({ type: "AUTH_IS_READY", payload: user })
            unsub()
        })
    }, [])

    console.log({ state })

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}
