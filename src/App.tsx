
import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";

const queryClient = new QueryClient();

// Lazy load pages para melhor performance
const CityMapPage = lazy(() => import("./pages/CityMap"));
const CityPage = lazy(() => import("./pages/CityPage"));
const ServiceCityPage = lazy(() => import("./pages/ServiceCityPage"));
const DynamicServiceCityPage = lazy(() => import("./pages/DynamicServiceCityPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading component melhorado
const LoadingPage = () => (
  <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 flex items-center justify-center">
    <div className="text-center">
      <div className="relative">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-purple-600 mx-auto"></div>
        <div className="absolute inset-0 rounded-full h-32 w-32 border-r-4 border-blue-400 animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
      </div>
      <p className="mt-6 text-xl text-gray-700 font-medium">Carregando...</p>
    </div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<LoadingPage />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/mapa-cidades" element={<CityMapPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              
              {/* Rota específica para criação de sites por cidade */}
              <Route path="/criacao-de-site-:city" element={<DynamicServiceCityPage />} />
              
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
