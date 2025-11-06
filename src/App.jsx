import { Routes, Route, Link, Navigate } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesPage from "./pages/RoutesPage";
import RouteDetailPage from "./pages/RouteDetailPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import VerifyEmailPage from "./pages/auth/VerifyEmailPage";
import LoginPage from "./pages/auth/LoginPage";
import FAQPage from "./pages/FAQPage";
import SharedTripsPage from "./pages/SharedTripsPage";
import TermsPage from "./pages/terms/TermsPage";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/routes" element={<RoutesPage />} />
          <Route path="/routes/:id" element={<RouteDetailPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/verify-email" element={<VerifyEmailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/preguntas-frecuentes" element={<FAQPage />} />
          <Route path="/terms" element={<TermsPage />} />

          {/* 🔒 FUTURA FEATURE: Viajes Compartidos */}
          {/*<Route path="/viajes-compartidos" element={<SharedTripsPage />} />*/}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}