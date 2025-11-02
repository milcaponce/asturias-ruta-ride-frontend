import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(() => localStorage.getItem("authToken") || null);
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("authUser");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    const isAuthenticated = !!token;

    const login = ({ token, user }) => {
        localStorage.setItem("authToken", token);
        localStorage.setItem("authUser", JSON.stringify(user));
        setToken(token);
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        setToken(null);
        setUser(null);
    };

    const setUserFromAPI = (userData) => {
        localStorage.setItem("authUser", JSON.stringify(userData));
        setUser(userData);
    };

    return (
        <AuthContext.Provider value={{ token, user, isAuthenticated, login, logout, setUserFromAPI }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}