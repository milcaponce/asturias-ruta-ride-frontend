import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [status, setStatus] = useState("loading"); // loading | success | error

    useEffect(() => {
        if (!token) {
            setStatus("error");
            return;
        }

    async function verifyEmail() {
        try {
            const response = await fetch(`http://localhost:8080/api/v1/auth/verify?token=${token}`);
            if (!response.ok) throw new Error("Verification failed");

            setStatus("success");
            } catch (err) {
            setStatus("error");
        }
    }

        verifyEmail();
    }, [token]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-backgroundLight px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center border border-gray-200">
                {status === "loading" && (
            <>
                <h2 className="text-xl font-semibold text-brandDarkGreen mb-4">Verificando tu cuenta...</h2>
                <p className="text-textMuted">Por favor espera un momento.</p>
            </>
        )}

                {status === "success" && (
            <>
                <h2 className="text-2xl font-bold text-brandGreen mb-4">✅ ¡Cuenta verificada!</h2>
                <p className="text-textPrimary mb-6">
                Tu correo fue validado correctamente. Ya puedes iniciar sesión.
                </p>
                    <Link to="/login" className="btn-primary">Ir a Iniciar Sesión</Link>
            </>
        )}

                {status === "error" && (
                <>
                    <h2 className="text-2xl font-bold text-accentRed mb-4">❌ Enlace no válido</h2>
                    <p className="text-textPrimary mb-6">
                    El enlace de verificación es incorrecto o expiró.
                    </p>
                        <Link to="/register" className="btn-accent text-white hover:text-white">Registrarse nuevamente</Link>
                </>
            )}
            </div>
        </div>
    );

}