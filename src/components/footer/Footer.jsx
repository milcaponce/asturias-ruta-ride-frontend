import { Link } from "react-router-dom";
import logo from "../../assets/logos/RutaLogo.png";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 text-textPrimary mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src={logo}
                        alt="Ruta&Ride logo"
                        className="h-16 w-auto mb-3"
                    />
                    <p className="text-textMuted max-w-xs">
                        Explora rutas, comparte aventuras y descubre Asturias a tu ritmo.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h4 className="font-semibold text-brandDarkGreen mb-2">Navegación</h4>
                        <Link to="/home" className="hover:text-brandGreen transition-colors">Inicio</Link>
                        <Link to="/routes" className="hover:text-brandGreen transition-colors">Rutas</Link>
                        <Link to="/preguntas-frecuentes" className="hover:text-brandGreen transition-colors">
                            Preguntas frecuentes
                        </Link>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-2">
                    <h4 className="font-semibold text-brandDarkGreen mb-2">Síguenos</h4>
                        <a
                            href="https://instagram.com/noee_mp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-brandGreen transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                        href="https://x.com/MilcaPonce3"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brandGreen transition-colors"
                        >
                            X / Twitter
                        </a>
                </div>
            </div>

            <div className="border-t border-gray-100 text-center py-4 text-xs text-gray-500">
                © {new Date().getFullYear()} Ruta&Ride. Todos los derechos reservados.
                <div className="flex justify-center space-x-4 mt-1 text-gray-400">
                    <Link to="/terms" className="hover:text-brandGreen transition-colors">
                        Términos y Condiciones
                    </Link>
                    {/* <Link to="/privacy" className="hover:text-brandGreen transition-colors">
                        Privacidad
                    </Link>
                    <Link to="/cookies" className="hover:text-brandGreen transition-colors">
                        Cookies
                    </Link> */}
                </div>
            </div>
        </footer>
    );
}