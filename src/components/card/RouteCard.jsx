export default function RouteCard({ title, image, description }) {
    return (
        <article className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md transition-transform duration-200 hover:scale-[1.02]">
            <img
            src={image || "https://via.placeholder.com/400x250"}
            alt={title || "Route image"}
            className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h2 className="font-heading text-2xl text-brandDarkGreen mb-2">
                {title || "Sample Route"}
                </h2>

                <p className="text-textMuted mb-3">
                {description || "This is a preview of the route description. The data will come from the database."}
                </p>

                <button className="btn-primary">Ver detalles</button>
            </div>
        </article>
    );
}
