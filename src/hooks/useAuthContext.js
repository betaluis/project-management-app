import { useContext } from "react"

// Context
import { AuthContext } from '../context/AuthContext';



export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuthContext must be used with a provider.");
    return context;
}