import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero/MontanaLago.jpg"


export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <section
                className="relative w-full h-[85vh] flex items-center justify-center text-center"
                role="banner"
                aria-label="Explora rutas en Asturias"
            >
        
                <img
                    src={heroImg}
                    alt="Paisaje de montaña con lago y sendero en Asturias"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-brandDarkGreen/40"></div>

                <div className="relative z-10 max-w-3xl px-4 text-white">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-white drop-shadow-xl">
                        Descubre Asturias a tu Ritmo
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow">
                        Naturaleza, aventura y rutas inolvidables para senderistas y amantes del aire libre.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/routes"
                            className="btn-success !px-8 !py-3 text-lg shadow-lg"
                        >
                            Explorar Rutas
                        </Link>

                        <Link
                            to="/register"
                            className="btn-accent !px-8 !py-3 text-lg shadow-lg"
                        >
                            Crear Cuenta
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-4 text-center text-sm text-textMuted border-t border-gray-200">
                © {new Date().getFullYear()} Ruta&Ride. Todos los derechos reservados.
            </footer>
        </div>
    );
}