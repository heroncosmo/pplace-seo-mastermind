
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-6xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
          <p className="text-gray-600 mb-6">
            A página que você está procurando não existe ou foi movida.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            URL: {location.pathname}
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Voltar para a Página Inicial
              </Button>
            </Link>
            <Link to="/mapa-cidades">
              <Button variant="outline" className="w-full">
                Ver Todas as Cidades
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
