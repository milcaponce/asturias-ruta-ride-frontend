export default function RouteCard({route}) {
    return (
        <article className=" flex flex-col bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md transition-transform duration-200 hover:scale-[1.02] h-[500px]">

            <div className="relative h-56 w-full">
                <img
                    src={route.image ? `/images/${route.image}` : "https://via.placeholder.com/400x250"}
                    alt={route.name || "Route image"}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                    <h2 className="font-heading text-2xl text-brandDarkGreen mb-2 truncate">
                    {route.name || "Sample Route"}
                    </h2>

                    <p className="text-textMuted mb-1">
                        <strong>Zona:</strong> {route.area || "Desconocida"}
                    </p>

                    <p className="text-textMuted mb-1">
                        <strong>Dificultad:</strong> {route.difficulty || "N/A"}
                    </p>

                    <p className="text-textMuted mb-3">
                        <strong>Kilómetros:</strong> {route.kilometres || "?"} km
                    </p>

                    <p className="text-textMuted text-sm line-clamp-4">
                        {route.description || "This is a preview of the route description. The data will come from the database."}
                    </p>
                </div>

                {/* <Link to={`/routes/${route.idRoute || ''}`} className="btn-primary">Ver detalles</Link> */}
            </div>
        </article>
    );
}
