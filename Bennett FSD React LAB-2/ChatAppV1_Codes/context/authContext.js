import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(undefined);

    useEffect(() => {
        // onAuth state changed for firebase

        setTimeout(() => {
            setIsAuthenticated(false);
        }, 3000);

    }, []);

    console.log("User :",isAuthenticated);

    const login = async (email, password) => {
        try {

        } catch(err) {

        }
    }

    const logout = async () => {
        try {

        } catch(err) {
            
        }
    }

    const register = async (email, password, username, profileUrl) => {
        try {

        } catch(err) {
            
        }
    }

    return (
        <AuthContext.Provider value={{user, isAuthenticated, login, logout, register}}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => {
    const value = useContext(AuthContext);
    if(!value) {
        throw new Error("useAuth must be wrapped inside AuthContextProvider");
    }
    return value;
}