import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/RutaLogo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isAuthenticated = false;
    const user = { name: "Invitado" };
    const navigate = useNavigate();

    const handleAreaClick = () => {
        navigate("/user-area");
    };
    
    const closeMenu = () => setIsMenuOpen(false);
    
    return (
        <>
            <header className="bg-white border-b border-backgroundAlt shadow-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
          {/* Logo */}
                    <Link to="/home" className="flex items-center space-x-2">
                        <img src={logo} alt="Logo" className="h-16 w-auto" />
                    </Link>

          {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 text-brandDarkGreen font-semibold">
                        <Link to="/home" className="hover:text-brandGreen transition-colors duration-200">
                            Inicio
                        </Link>
                        <Link to="/routes" className="hover:text-brandGreen transition-colors duration-200">
                            Rutas
                        </Link>
                        <Link to="/preguntas-frecuentes" className="hover:text-brandGreen transition-colors duration-200">
                            Preguntas Frecuentes
                        </Link>
                        <Link to="/contacto" className="hover:text-brandGreen transition-colors duration-200">
                            Contacto
                        </Link>
                    </nav>

          {/* Auth / User Section */}
                    <div className="flex items-center space-x-4">
                        {isAuthenticated ? (
                            <div className="flex flex-col text-right">
                                <span className="text-sm text-brandDarkGreen font-medium">
                                    Hola, <strong>{user?.name || "Usuario"}</strong>
                                </span>

                                <div className="flex items-center gap-2 text-sm">
                                    <button
                                        onClick={handleAreaClick}
                                        className="text-brandDarkGreen hover:text-brandGreen transition-colors duration-200"
                                    >
                                        Área personal
                                    </button>
                                    <span className="text-gray-300">|</span>
                                    <button
                                        onClick={logout}
                                        className="text-accentRed hover:text-red-400 transition-colors duration-200"
                                    >
                                        Cerrar sesión
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-2 text-sm font-semibold">
                                <Link
                                    to="/login"
                                    className="text-brandDarkGreen hover:text-brandGreen transition-colors duration-200"
                                >
                                    Iniciar sesión
                                </Link>
                                <span className="text-gray-300">|</span>
                                <Link
                                    to="/register"
                                    className="text-brandDarkGreen hover:text-brandGreen transition-colors duration-200"
                                >
                                    Registrarse
                                </Link>
                            </div>
                        )}

            {/* Mobile toggle */}
                        <button
                            className="md:hidden text-3xl text-brandDarkGreen"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                    </div>
                </div>

        {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="md:hidden bg-white border-t border-backgroundAlt py-4 px-6 space-y-3 font-semibold text-brandDarkGreen">
                        <Link 
                        to="/home" 
                        onClick={closeMenu}
                        className="block hover:text-brandGreen transition-colors duration-200">
                            Inicio
                        </Link>
                        <Link 
                        to="/routes"
                        onClick={closeMenu} 
                        className="block hover:text-brandGreen transition-colors duration-200"
                        >
                            Rutas
                        </Link>
                        <Link 
                        to="/preguntas-frecuentes"
                        onClick={closeMenu}
                        className="block hover:text-brandGreen transition-colors duration-200"
                        >
                            Preguntas Frecuentes
                        </Link>
                        <Link 
                        to="/contacto" 
                        onClick={closeMenu}
                        className="block hover:text-brandGreen transition-colors duration-200"
                        >
                            Contacto
                        </Link>
                    </nav>
                )}
            </header>
        </>
    );
};

export default Header;