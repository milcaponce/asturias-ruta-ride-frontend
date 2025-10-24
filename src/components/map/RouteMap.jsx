import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
    iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
    shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

export default function RouteMap({ latitude, longitude, name }) {
  // Modificar las coordenadas según el lugar
    const defaultPosition = [43.3614, -5.8593]; 
    const position =
    latitude && longitude ? [latitude, longitude] : defaultPosition;

    return (
        <section className="mt-8 rounded-xl overflow-hidden shadow-md">
            <MapContainer
            center={position}
            zoom={latitude && longitude ? 12 : 8}
            style={{ height: "300px", width: "100%" }}
            >
                <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>{name || "Ruta en Asturias"}</Popup>
                </Marker>
            </MapContainer>
        </section>
    );
}
