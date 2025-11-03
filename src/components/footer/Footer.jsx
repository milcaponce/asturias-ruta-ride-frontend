import { Link } from "react-router-dom";
import logo from "../../assets/logos/RutaLogo.png";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-backgroundAlt text-textSecondary mt-12" role="contentinfo" aria-label="Información del sitio">
        
            <div className="max-w-7xl mx-auto px-6 py-8 grid gap-8 md:grid-cols-3">
                <div>
                    <Link to="/home" className="inline-flex items-center space-x-2">
                        <img src={logo} alt="Ruta & Ride" className="h-10 w-auto" />
                        <span className="sr-only">Ir al inicio</span>
                    </Link>
                    <p className="mt-3 text-sm text-textMuted">
                        Explora rutas, comparte aventuras y descubre Asturias a tu ritmo.
                    </p>
                </div>
        
                <nav aria-label="Enlaces del sitio" className="md:justify-self-center">
                    <h2 className="text-brandDarkGreen font-heading text-base mb-3">Navegación</h2>
                    <ul className="space-y-2">
                        <li><Link to="/home" className="hover:text-brandGreen transition-colors">Inicio</Link></li>
                        <li><Link to="/routes" className="hover:text-brandGreen transition-colors">Rutas</Link></li>
                        <li><Link to="/preguntas-frecuentes" className="hover:text-brandGreen transition-colors">Preguntas Frecuentes</Link></li>

                    {/* 🔒 FUTURA FEATURE: Viajes Compartidos */}
                        {/*
                        <li><Link to="/viajes-compartidos" className="hover:text-brandGreen transition-colors">Viajes Compartidos</Link></li>
                    */}
                    </ul>
                </nav>

        {/* Redes sociales (placeholders) */}
                <div className="md:justify-self-end">
                    <h2 className="text-brandDarkGreen font-heading text-base mb-3">Síguenos</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="hover:text-brandGreen transition-colors"
                                aria-label="Instagram de Ruta & Ride"
                            >
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="hover:text-brandGreen   transition-colors"
                                aria-label="Twitter de Ruta & Ride"
                            >
                                X / Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-backgroundAlt">
                <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row items-center justify-between gap-2">
                    <p className="text-textMuted">© {year} Ruta & Ride. Todos los derechos reservados.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-brandGreen transition-colors text-textMuted">Términos</a>
                        <a href="#" className="hover:text-brandGreen transition-colors text-textMuted">Privacidad</a>
                        <a href="#" className="hover:text-brandGreen transition-colors text-textMuted">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}