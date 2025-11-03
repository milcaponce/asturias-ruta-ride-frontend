import Accordion from "../components/ui/Accordion";

export default function FAQPage() {
    const faqs = [
        {
            question: "¿Necesito registrarme para ver las rutas?",
            answer:
                "No, puedes explorar todas las rutas sin estar registrado. Sin embargo, para guardar rutas favoritas, dejar reseñas o unirte a rutas grupales, sí necesitarás una cuenta."
        },
        {
            question: "¿Cómo funciona la verificación por email?",
            answer:
                "Al registrarte, recibirás un correo con un enlace de verificación. Debes hacer clic en él para activar tu cuenta y poder iniciar sesión."
        },
        {
            question: "¿Ruta&Ride es gratuito?",
            answer:
                "Sí, el uso de la plataforma es totalmente gratuito. En el futuro podría haber funciones premium opcionales."
        },
        {
            question: "¿Puedo compartir mis propias rutas con otros usuarios?",
            answer:
                "Próximamente habilitaremos la opción para que los usuarios registrados puedan crear y compartir sus rutas personalizadas."
        }
    ];

    return (
        <main className="max-w-3xl mx-auto px-4 pt-28 pb-12 bg-backgroundLight">
            <h1 className="text-3xl font-heading text-brandDarkGreen mb-6 text-center">
                Preguntas Frecuentes
            </h1>
            <p className="text-textSecondary mb-8 text-center">
                Encuentra respuestas a las preguntas más comunes sobre el uso de Ruta&Ride.
            </p>

            <section aria-label="Preguntas frecuentes" className="space-y-2">
                {faqs.map((faq, index) => (
                    <Accordion key={index} question={faq.question} answer={faq.answer} />
                ))}
            </section>
        </main>
    );
}