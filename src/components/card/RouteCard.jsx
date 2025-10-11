import PropTypes from "prop-types";
import styles from "./RouteCard.module.css";

export default function RouteCard({ name, difficulty, duration, image }) {
    return (
        <article
            className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ${styles.card}`}
            role="region"
            aria-label={`Ruta ${name}`}
        >
        <img
            src={image}
            alt={`Imagen de la ruta ${name}`}
            className="w-full h-48 object-cover"
        />

        <div className="p-4">
            <h2 className="text-lg font-heading text-brandDarkGreen mb-1">{name}</h2>
            <p className="text-textPrimary text-sm">
                <span className="font-semibold">Dificultad:</span> {difficulty}
            </p>
            <p className="text-textPrimary text-sm">
                <span className="font-semibold">Duración:</span> {duration}
            </p>

            <button
                className="mt-3 bg-brandGreen text-white py-2 px-4 rounded-lg hover:bg-brandDarkGreen transition-colors duration-200"
                aria-label={`Ver más sobre ${name}`}
            >Ver ruta
            </button>
        </div>
    </article>
    );
}

RouteCard.propTypes = {
    name: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};