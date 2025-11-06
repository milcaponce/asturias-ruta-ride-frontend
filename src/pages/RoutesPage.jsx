import RoutesSection from "../components/sections/RoutesSection";

export default function RoutesPage() {
    return (
        <main className="p-6 bg-backgroundLight min-h-screen">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl md:text-5xl font-heading text-brandDarkGreen text-center mb-4">Rutas de Asturias</h1>

                    
                    <div className="mx-auto mt-2 h-1 w-20 bg-brandGreen rounded-full"></div>

                    <p className="text-textSecondary mt-4 max-w-2xl mx-auto"> Descubre caminos, miradores y aventuras por los paisajes más increíbles de Asturias. 
                    Elige tu próxima ruta y prepárate para disfrutar del aire libre.
                    </p>

                </header>

                <div className="mt-12 mb-6">
                    <h2 className="text-lg md:text-2xl font-semibold text-brandDarkGreen flex items-center gap-3 mt-10">
                        <span className="hidden sm:block h-1 w-8 bg-brandGreen rounded-full"></span>
                            Explora todas las rutas
                    </h2>
                </div>

                <RoutesSection />
            </div>
        </main>
    );
}