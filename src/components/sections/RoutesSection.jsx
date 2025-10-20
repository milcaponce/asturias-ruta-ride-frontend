import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import RouteCard from "../card/RouteCard";
import { fetchRoutes } from "../../services/routesService";

export default function RoutesSection({ title = "Todas las rutas" }) {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadRoutes() {
      try {
        const data = await fetchRoutes();
        console.log(data);
        setRoutes(data);
      } catch (err) {
        setError("No se pudieron cargar las rutas. Inténtalo nuevamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    loadRoutes();
  }, []);

  if (loading) {
    return (
      <section aria-live="polite" className="p-4 text-center text-textMuted">
        Cargando rutas...
      </section>
    );
  }

  if (error) {
    return (
      <section
        aria-live="assertive"
        className="p-4 text-center text-red-600 font-semibold"
      >
        {error}
      </section>
    );
  }

  return (
    <section
      aria-labelledby="routes-heading"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
    >
      <header className="col-span-full">
        <h2
          className="text-2xl font-heading text-brandDarkGreen"
          id="routes-heading"
        >
          {title}
        </h2>
      </header>

      {routes.length > 0 ? (
        routes.map((route) => (
          <article key={route.id}>
            <RouteCard route={route} />
          </article>
        ))
      ) : (
        <p className="col-span-full text-center text-textMuted">
          No hay rutas disponibles.
        </p>
      )}
    </section>
  );
}