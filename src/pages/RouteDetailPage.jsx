import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchRouteById } from "../services/routesService";


export default function RouteDetailPage() {
    const { id } = useParams();
    const [route, setRoute] = useState(null);
    

    useEffect(() => {
    async function loadRoute() {
        const data = await fetchRouteById(id);
        setRoute(data);
        }
        loadRoute();
    }, [id]);

    if (!route) {
        return <p className="text-center mt-10">Cargando ruta...</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
            <img
            src={route.image ? `/images/${route.image}` : "https://via.placeholder.com/800x400"}
            alt={route.name}
            className="w-full h-64 object-cover rounded-lg mb-6"
        />

            <h1 className="text-3xl font-bold text-brandDarkGreen mb-4">{route.name}</h1>

            <div className="space-y-2 text-gray-700">
                <p><strong>Zona:</strong> {route.area}</p>
                <p><strong>Dificultad:</strong> {route.difficulty}</p>
                <p><strong>Kilómetros:</strong> {route.kilometres} km</p>
            </div>

            <p className="mt-4 text-gray-700">{route.description}</p>

            <div className="mt-8 text-center">
                <Link
                to="/routes"
                className="px-5 py-2 bg-brandDarkGreen text-white rounded-lg hover:bg-green-700 transition"
                >
                ← Volver a rutas
                </Link>
            </div>
        </div>
    );
}