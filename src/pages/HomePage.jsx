import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundLight">
            <h1 className="text-4xl font-bold text-brandDarkGreen mb-6">Bienvenido a RutaRide</h1>
            <p className="text-gray-600 mb-8">Explora rutas, comparte aventuras y conecta con otros ciclistas.</p>
            <div className="flex space-x-4">
                <Link to="/login" className="btn-primary">Login</Link>
                <Link to="/register" className="btn-secondary">Register</Link>
            </div>
        </div>
    );
}