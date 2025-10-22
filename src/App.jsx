import { Routes, Route, Link } from "react-router-dom";
import RoutesPage from "./pages/RoutesPage";
import RouteDetailPage from "./pages/RouteDetailPage";

export default function App() {
  return (
    <>
      <header>
        <nav aria-label="Navegación principal">
          <ul className="flex gap-4 p-4 bg-gray-100">
            <li>
              <Link
                to="/routes"
                className="text-brandDarkGreen hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandDarkGreen"
              >
                Rutas
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/routes/:id" element={<RouteDetailPage />} />
        </Routes>
      </main>
    </>
  );
}