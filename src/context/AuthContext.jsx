import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            const storedToken = localStorage.getItem("authToken");
            const storedUser = localStorage.getItem("authUser");

            if (storedToken) {
                setToken(storedToken);
            }

            if (storedUser && storedUser !== "undefined") {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("❌ Error reading auth data from localStorage:", error);
            localStorage.removeItem("authToken");
            localStorage.removeItem("authUser");
        } finally {
            setLoading(false);
        }
    }, []);


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

    //Si tarda en cargar, aparece un spinner
    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-green-600"></div>
            </div>
        );
    }

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