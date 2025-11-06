export default function RouteMap({ latitude, longitude, name }) {
    const defaultLat = 43.3614;
    const defaultLng = -5.8593;

    const lat = latitude || defaultLat;
    const lng = longitude || defaultLng;

    const mapUrl = `https://www.google.com/maps?q=${lat},${lng}&z=13&output=embed`;

    return (
        <section className="mt-8 rounded-xl overflow-hidden shadow-md">
            <iframe
            title={name || "Ubicación de la ruta"}
            src={mapUrl}
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
            ></iframe>
        </section>
    );
}