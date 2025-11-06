import { useAuth } from "../context/AuthContext";
import { loginRequest } from "../services/authService";
import { useNavigate } from "react-router-dom";

export function useLogin() {
    const { login } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(email, password) {
        try {
            const data = await loginRequest({ email, password });
            login(data.token);
            navigate("/home");
        } catch (err) {
            throw err;
        }
    }

    return { handleLogin };
}