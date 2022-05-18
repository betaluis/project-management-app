
import { createContext, useEffect, useReducer } from "react";

// Firebase
import { projectAuth } from '../firebase/config';

export const AuthContext = createContext();

const initialState = {
    user: null,
    authIsReady: false
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
    }
}

export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        const unsub = projectAuth.onAuthStateChanged(user => {
            dispatch({ type: "AUTH_IS_READY", payload: user });
        })

        return () => unsub(); 
    }, [])

    console.log("AuthContext State", state);
    
    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            { children }
        </AuthContext.Provider>
    );
}
