export default function TermsPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 text-textPrimary leading-relaxed">
            <h1 className="text-3xl font-heading text-brandDarkGreen mb-6">
                Términos y Condiciones
            </h1>

            <p className="text-sm text-textMuted mb-8">
                Última actualización: {new Date().toLocaleDateString("es-ES")}
            </p>

            <section className="space-y-6">
                <p>
                    Bienvenido/a a <strong>Ruta&Ride</strong>. Estas condiciones explican de forma clara y sencilla
                    cómo usar este sitio web de manera segura y respetuosa. Te recomendamos leerlas con atención.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">1. Sobre el proyecto</h2>
                <p>
                    Ruta&Ride es una plataforma creada con fines educativos y demostrativos, como parte de un proyecto
                    de desarrollo web. La información mostrada, incluyendo rutas y contenido, puede no ser exacta o estar sujeta a cambios.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">2. Uso permitido</h2>
                <p>
                    Puedes navegar por el sitio, consultar rutas y crear una cuenta para acceder a funcionalidades adicionales.
                    Aceptas hacer un uso responsable, evitando acciones que puedan afectar el funcionamiento de la plataforma.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">3. Cuenta de usuario</h2>
                <p>
                    Para registrarte, deberás proporcionar un correo electrónico válido. El uso de datos personales es mínimo
                    y únicamente para autenticación. No compartimos información con terceros.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">4. Contenido del sitio</h2>
                <p>
                    Las imágenes, rutas y textos publicados son de uso educativo. Si crees que algún contenido vulnera derechos
                    de autor o debe ser retirado, puedes contactar con el equipo del proyecto.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">5. Limitación de responsabilidad</h2>
                <p>
                    Ruta&Ride no se hace responsable por el uso que los usuarios hagan de la información publicada.
                    Las rutas mostradas pueden implicar actividades al aire libre que conllevan riesgos naturales.
                Si decides realizar una ruta, hazlo bajo tu propia responsabilidad.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">6. Modificaciones</h2>
                <p>
                    Estas condiciones pueden actualizarse eventualmente para mejorar el servicio. Cuando esto ocurra,
                    la fecha de última actualización será modificada arriba.
                </p>

                <h2 className="text-xl font-semibold text-brandDarkGreen">7. Contacto</h2>
                <p>
                    Si tienes dudas sobre estas condiciones, puedes contactar con el equipo desarrollador del proyecto.
                </p>
            </section>
        </main>
    );
}