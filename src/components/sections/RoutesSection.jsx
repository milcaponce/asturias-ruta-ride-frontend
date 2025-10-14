import PropTypes from "prop-types";
import RouteCard from "../card/RouteCard";

/**
 * RoutesSection
 * Props:
 * - routes: array de objetos { id, title, image, description } (opcional; si no, usa sampleData)
 * - limit: número para limitar la cantidad mostrada (opcional)
 * - title: string para encabezado (opcional)
 */
// const sampleData = [
//     { id: 1, title: "Ruta del Cares", description: "Sendero emblemático entre gargantas.", image: "https://via.placeholder.com/400x250" },
//     { id: 2, title: "Lagos de Covadonga", description: "Vistas panorámicas y lagos glaciares.", image: "https://via.placeholder.com/400x250" },
//     { id: 3, title: "Senda Costera", description: "Costa y playas con senderos fáciles.", image: "https://via.placeholder.com/400x250" },
//     { id: 4, title: "Picos Norte", description: "Ruta exigente con panoramas increíbles.", image: "https://via.placeholder.com/400x250" },
// ];

// export default function RoutesSection({ routes = sampleData, limit, title }) {
//     const visibleRoutes = Array.isArray(routes) ? (limit ? routes.slice(0, limit) : routes) : [];

//     return (
//         <section aria-labelledby={title ? "routes-section-title" : undefined} className="my-8">
//             {title && (
//                 <h2 id="routes-section-title" className="text-2xl font-heading mb-4 text-brandDarkGreen"> 
//                     {title}
//                 </h2>
//             )}

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
//                 {visibleRoutes.map((route) => (
//                     <div key={route.id} role="listitem">
//                         <RouteCard
//                             title={route.title}
//                             image={route.image}
//                             description={route.description}
//                         />
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// RoutesSection.propTypes = {
//     routes: PropTypes.array,
//     limit: PropTypes.number,
//     title: PropTypes.string,


export default function RoutesSection({ title }) {
  // Datos temporales para pruebas (más adelante vendrán del backend)
  const routes = [
    {
      id: 1,
      title: "Ruta de los Lagos de Covadonga",
      description: "Una de las rutas más emblemáticas de Asturias, con vistas impresionantes.",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Lagos_de_Covadonga_-_Asturias.jpg",
    },
    {
      id: 2,
      title: "Camino Primitivo",
      description: "Recorre el trazado original del Camino de Santiago desde Oviedo.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/54/Camino_primitivo_-_Santiago.jpg",
    },
    {
      id: 3,
      title: "Senda del Oso",
      description: "Ruta verde y familiar entre montañas y túneles naturales.",
      image: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Senda_del_Oso_-_Asturias.jpg",
    },
  ];

  return (
    <section
      aria-labelledby="routes-heading"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8"
    >
      <header className="col-span-full">
        <h2 id="routes-heading" className="text-2xl font-heading text-brandDarkGreen">
          {title || "Rutas disponibles"}
        </h2>
      </header>

      {routes.map((route) => (
        <RouteCard
          key={route.id}
          title={route.title}
          description={route.description}
          image={route.image}
        />
      ))}
    </section>
  );
}

RoutesSection.propTypes = {
  title: PropTypes.string,
};