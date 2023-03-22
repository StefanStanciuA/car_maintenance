import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [session, setSession] = useState(
        JSON.parse(localStorage.getItem('session'))
    )

    return <AuthContext.Provider value={{ session, setSession }}>
        {children}
    </AuthContext.Provider>
}