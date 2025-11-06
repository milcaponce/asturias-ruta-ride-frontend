import { Link } from "react-router-dom";

export default function RouteCard({route}) {

    const difficultyColors = {
    Fácil: "bg-green-100 text-green-800",
    Media: "bg-yellow-100 text-yellow-800",
    Difícil: "bg-red-100 text-red-800",
    };

    return (
        <article className=" flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg">

            <div className="relative h-56 w-full">
                <img
                    src={route.image ? `/images/${route.image}` : "https://via.placeholder.com/400x250"}
                    alt={route.name || "Route image"}
                    className="absolute inset-0 w-full h-full object-cover"
                />

{/* Badge de dificultad sobre la imagen */}
                <span
                    className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full shadow-md ${
                        difficultyColors[route.difficulty] || "bg-gray-200 text-gray-700"
                    }`}
                >
                    {route.difficulty}
                </span>
            </div>

            <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                    <h2 className="font-heading text-xl text-brandDarkGreen mb-2 line-clamp-1">
                    {route.name}
                    </h2>

                    <p className="text-textMuted text-sm line-clamp-2 mb-3">
                        {route.description || "Descripción no disponible."}
                    </p>

                    <div className="flex justify-between text-sm text-textSecondary mt-4">
                        <span>📍 {route.area}</span>
                        <span> {route.kilometres} km</span>
                    </div>
                </div>

                <Link to={`/routes/${route.idRoute}`} className="btn-primary-sm mt-6 text-center"
                >
                    Ver detalles
                </Link>
            </div>
        </article>
    );
}
