import { useEffect, useState, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [status, setStatus] = useState("loading"); // loading | success | error
    const [message, setMessage] = useState("");
    const calledRef = useRef(false);  

    useEffect(() => {
        if (!token) {
            setStatus("error");
            setErrorText("Token ausente en la URL.");
            return;
        }

        if (calledRef.current) return;    // <-- bloquea 2ª ejecución
        calledRef.current = true;

        (async () => {
        try {
                const response = await fetch(`http://localhost:8080/api/v1/auth/verify?token=${encodeURIComponent(token)}`);

                if (!response.ok) {
                    const raw = await response.text();
                    throw new Error(raw || "Verification failed");
                }

                setStatus("success");
            } catch (err) {
                console.error("Email verification failed:", err);
                setErrorText(err.message || "Fallo desconocido");
                setStatus("error");
            }
        })();
    }, [token]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-backgroundLight px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center border border-gray-200">
                {status === "loading" && (
                <>
                    <h2 className="text-xl font-semibold text-brandDarkGreen mb-4">
                        Verificando tu cuenta...
                    </h2>
                    <p className="text-textMuted">Por favor espera un momento.</p>
                </>
            )}

            {status === "success" && (
                <>
                    <h2 className="text-2xl font-bold text-brandGreen mb-4">
                        ✅ ¡Cuenta verificada!
                    </h2>
                    <p className="text-textPrimary mb-6">
                        Tu correo fue validado correctamente. Ya puedes iniciar sesión.
                    </p>
                        <Link to="/login" className="btn-success">
                            Ir a Iniciar Sesión
                        </Link>
                </>
            )}

            {status === "error" && (
                <>
                    <h2 className="text-2xl font-bold text-accentRed mb-2">
                        ❌ Enlace no válido
                    </h2>
                    <p className="text-textPrimary mb-4">
                        El enlace de verificación es incorrecto o caducó.
                    </p>
            
            {/* detalle técnico opcional para depurar durante el desarrollo */}
                    {errorText && (
                        <pre className="text-xs text-textMuted bg-backgroundAlt rounded p-2 mb-4 text-left overflow-x-auto">
                            {errorText}
                        </pre>
                    )}
                        <Link to="/register" className="btn-error text-white hover:text-white">
                            Registrarse nuevamente
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}