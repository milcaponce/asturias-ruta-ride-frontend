export default function RouteMap({ mapUrl }) {
    return (
        <section className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe
            src={mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de la ruta"
            ></iframe>
        </section>
    );
}