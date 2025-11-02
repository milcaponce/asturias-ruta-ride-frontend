import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [logoutMessage, setLogoutMessage] = useState("");

  // Leer el usuario desde LS
    useEffect(() => {
        const storedToken = localStorage.getItem("rutaRideToken");
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
    }, []);

  // Guarda usuario al hacer login en LS
    function login(jwtToken) {
        localStorage.setItem("rutaRideToken", jwtToken);
        setToken(jwtToken);
        setIsAuthenticated(true);
    }

  // Cerrar sesión - Limpia el LS
    function logout() {
        localStorage.removeItem("rutaRideToken");
        setToken(null);
        setIsAuthenticated(false);
        setUser(null);

        setLogoutMessage("Sesión cerrada correctamente");

    // Limpiar mensaje
        setTimeout(() => setLogoutMessage(""), 3000);
    }

    return (
        <AuthContext.Provider value={{ token, user, setUser, isAuthenticated, login, logout, logoutMessage }}>
            {children}
        </AuthContext.Provider>
    );
}


export function useAuth() {
    return useContext(AuthContext);
}