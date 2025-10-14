import RoutesSection from "../components/sections/RoutesSection";

export default function RoutesPage() {
    return (
        <main className="p-6 bg-backgroundLight min-h-screen">
            <div className="max-w-6xl mx-auto">
                <header className="mb-6">
                    <h1 className="text-3xl font-heading text-brandDarkGreen">Rutas</h1>
                    <p className="text-textSecondary mt-2">Explora las rutas disponibles, filtra por dificultad y coordina viajes compartidos.</p>
                </header>

                <RoutesSection title="Todas las rutas" />
            </div>
        </main>
    );
}