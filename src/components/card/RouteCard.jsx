export default function RouteCard({route}) {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md transition-transform duration-200 hover:scale-[1.02]">
            <img
            src={route.image ? `/images/${route.image}` : "https://via.placeholder.com/400x250"}
            alt={route.name || "Route image"}
            className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h2 className="font-heading text-2xl text-brandDarkGreen mb-2">
                {route.name || "Sample Route"}
                </h2>

                <p className="text-textMuted mb-2">
                    <strong>Zona:</strong> {route.area || "Desconocida"}
                </p>

                <p className="text-textMuted mb-2">
                    <strong>Dificultad:</strong> {route.difficulty || "N/A"}
                </p>

                <p className="text-textMuted mb-2">
                    <strong>Kilómetros:</strong> {route.kilometres || "?"} km
                </p>

                <p className="text-textMuted mb-3">
                {route.description || "This is a preview of the route description. The data will come from the database."}
                </p>

                {/* <Link to={`/routes/${route.idRoute || ''}`} className="btn-primary">Ver detalles</Link> */}
            </div>
        </article>
    );
}
