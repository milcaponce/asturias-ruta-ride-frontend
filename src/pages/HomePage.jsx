import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero/MontanaLago.jpg";

export default function HomePage() {
    return (
        <>
            <section
                className="relative w-full h-screen flex items-center justify-center text-center"
                role="banner"
                aria-label="Explora rutas en Asturias"
            >
                <img
                    src={heroImg}
                    alt="Paisaje de montaña con lago y sendero en Asturias"
                    className="absolute inset-0 w-full h-full object-cover object-center"
            />

        
                <div className="absolute inset-0 bg-brandDarkGreen/55 md:bg-brandDarkGreen/40"></div>

        
                <div className="relative z-10 max-w-2xl px-6 text-white flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold drop-shadow-xl leading-tight text-white">
                        Descubre Asturias a tu Ritmo
                    </h1>

                    <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200 drop-shadow-md max-w-xl">
                        Naturaleza, aventuras y rutas inolvidables para senderistas y amantes del aire libre.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
                        <Link
                            to="/routes"
                            className="btn-success !px-8 !py-3 text-base sm:text-lg shadow-lg"
                        >
                        Explorar Rutas
                        </Link>

                        <Link
                            to="/register"
                            className="btn-accent !px-8 !py-3 text-base sm:text-lg shadow-lg"
                        >
                            Crear cuenta
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-4 text-center text-sm text-textMuted bg-backgroundLight">
                © {new Date().getFullYear()} Ruta&Ride. Todos los derechos reservados.
            </footer>
        </>
    );
}
