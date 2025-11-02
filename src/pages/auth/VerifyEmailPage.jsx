import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { verifyEmail } from "../../services/authService";

export default function VerifyEmailPage() {
    const [searchParams] = useSearchParams();
    const [status, setStatus] = useState({ loading: true, ok: false, message: "" });

    useEffect(() => {
        const token = searchParams.get("token");
        if (!token) {
            setStatus({ loading: false, ok: false, message: "Token no encontrado en la URL." });
            return;
        }

        verifyEmail(token)
            .then((msg) => setStatus({ loading: false, ok: true, message: msg || "Cuenta verificada correctamente." }))
            .catch((err) => setStatus({ loading: false, ok: false, message: err.message || "Error al verificar." }));
        }, [searchParams]);

    if (status.loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-backgroundLight">
                <p className="text-textMuted">Verificando tu cuenta…</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-backgroundLight px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-lg text-center">
                <h1 className="text-2xl font-bold mb-4 text-brandDarkGreen">
                    {status.ok ? "¡Tu correo ha sido verificado!" : "No se pudo verificar tu correo"}
                </h1>
                <p className="text-textMuted mb-6">{status.message}</p>

                {status.ok ? (
                    <div className="space-x-3">
                        <Link to="/routes" className="btn-primary inline-block">Ir a Rutas</Link>
                        <Link to="/login" className="btn-accent inline-block">Iniciar sesión</Link>
                    </div>
                ) : (
                    <Link to="/" className="btn-primary inline-block">Volver al inicio</Link>
                )}
            </div>
        </div>
    );
}