import { Link } from "react-router-dom";


export default function HomePage() {
    return (
        <div className="min-h-screen bg-backgroundLight flex flex-col">
            <main className="flex flex-col items-center justify-center flex-grow pt-24 px-4 text-center">
                <h1 className="text-4xl font-bold text-brandDarkGreen mb-6">
                    Bienvenido a Ruta&Ride
                </h1>
                <p className="text-textMuted max-w-xl mb-8">
                    Explora rutas, comparte aventuras y conecta con otros apasionados por la naturaleza.
                </p>

                <div className="flex space-x-4">
                    <Link to="/rutas" className="btn-primary">
                    Ver Rutas
                    </Link>
                    <Link to="/register" className="btn-accent">
                    Registrarse
                    </Link>
                </div>
            </main>

      {/* Footer opcional (podés agregarlo después) */}
        <footer className="py-4 text-center text-sm text-textMuted border-t border-gray-200">
        © {new Date().getFullYear()} Ruta&Ride. Todos los derechos reservados.
        </footer>
    </div>
    );
}