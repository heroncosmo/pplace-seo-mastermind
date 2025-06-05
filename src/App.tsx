
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Lazy load pages
const CityMapPage = lazy(() => import("./pages/CityMap"));
const CityPage = lazy(() => import("./pages/CityPage"));
const ServiceCityPage = lazy(() => import("./pages/ServiceCityPage"));
const DynamicServiceCityPage = lazy(() => import("./pages/DynamicServiceCityPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mapa-cidades" element={<CityMapPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              
              {/* Rota específica para criação de sites por cidade */}
              <Route path="/criacao-de-site-:city" element={<CityPage />} />
              
              {/* Rotas para todos os serviços por cidade - formato: /servico-cidade */}
              <Route path="/ecommerce-:city" element={<DynamicServiceCityPage />} />
              <Route path="/landing-page-:city" element={<DynamicServiceCityPage />} />
              <Route path="/leadpilot-:city" element={<DynamicServiceCityPage />} />
              <Route path="/seo-:city" element={<DynamicServiceCityPage />} />
              <Route path="/aplicativo-:city" element={<DynamicServiceCityPage />} />
              <Route path="/sistema-ia-:city" element={<DynamicServiceCityPage />} />
              <Route path="/sites-institucionais-:city" element={<DynamicServiceCityPage />} />
              <Route path="/automacao-rpa-:city" element={<DynamicServiceCityPage />} />
              <Route path="/chatbots-ia-:city" element={<DynamicServiceCityPage />} />
              <Route path="/business-intelligence-:city" element={<DynamicServiceCityPage />} />
              <Route path="/marketing-digital-:city" element={<DynamicServiceCityPage />} />
              <Route path="/marketplace-:city" element={<DynamicServiceCityPage />} />
              <Route path="/consultoria-ti-:city" element={<DynamicServiceCityPage />} />
              <Route path="/integracao-sistemas-:city" element={<DynamicServiceCityPage />} />
              <Route path="/seguranca-digital-:city" element={<DynamicServiceCityPage />} />
              
              {/* Página 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
