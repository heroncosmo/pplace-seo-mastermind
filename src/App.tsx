
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
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const LeadPilotPage = lazy(() => import("./pages/LeadPilotPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
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
              <Route path="/contato" element={<ContactPage />} />
              <Route path="/servicos" element={<ServicesPage />} />
              <Route path="/leadpilot" element={<LeadPilotPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/sobre" element={<AboutPage />} />
              
              {/* Rotas de serviços individuais */}
              <Route path="/servicos/aplicativos" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/aplicativo" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/seo" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/ecommerce" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/landing-pages" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/landing-page" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/leadpilot" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/sites" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/sites-institucionais" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/sistemas-ia" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/sistema-ia" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/automacao" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/automacao-rpa" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/chatbots" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/chatbots-ia" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/business-intelligence" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/marketing-digital" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/marketplace" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/consultoria" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/consultoria-ti" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/integracao" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/integracao-sistemas" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/seguranca" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/seguranca-digital" element={<DynamicServiceCityPage />} />
              <Route path="/servicos/criacao-de-site" element={<DynamicServiceCityPage />} />
              
              {/* Rota específica para capturar URLs com parâmetros dinâmicos */}
              <Route path="/:dynamicPath" element={<DynamicServiceCityPage />} />
              
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
