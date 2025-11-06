import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function LoginPage() {
    const { handleLogin } = useLogin();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function onSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await handleLogin(email, password);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-backgroundLight px-4">
            <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
                <h1 className="text-3xl font-heading text-brandDarkGreen text-center mb-6">
                    Iniciar Sesión
                </h1>

                {error && (
                    <p className="bg-accentRed/10 text-accentRed px-3 py-2 rounded-lg text-sm mb-4 text-center">
                        {error}
                    </p>
                )}

                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Contraseña</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brandGreen"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-primary w-full">
                        Entrar
                    </button>
                </form>

                <p className="text-sm text-textMuted text-center mt-4">
                    ¿No tienes cuenta?{" "}
                    <a href="/register" className="text-brandGreen hover:text-brandDarkGreen font-medium">
                        Regístrate aquí
                    </a>
                </p>
            </div>
        </div>
    );
}