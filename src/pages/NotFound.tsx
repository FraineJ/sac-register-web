import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ocean-mist">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-ocean-deep">404</h1>
        <p className="text-xl text-muted-foreground mb-4">¡Ups! Página no encontrada</p>
        <a href="/" className="text-ocean-medium hover:text-ocean-deep underline">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFound;
