
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CityMapPage from "./pages/CityMap";
import CityPage from "./pages/CityPage";
import StatePage from "./pages/StatePage";
import ServicePage from "./pages/ServicePage";
import ServiceCityPage from "./pages/ServiceCityPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import ServicesPage from "./pages/ServicesPage";
import LeadPilotPage from "./pages/LeadPilotPage";
import PricingPage from "./pages/PricingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Páginas principais */}
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/precos" element={<PricingPage />} />
          
          {/* Blog */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          
          {/* Serviços */}
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/servicos/:service" element={<ServicePage />} />
          <Route path="/leadpilot" element={<LeadPilotPage />} />
          
          {/* Páginas geo-localizadas */}
          <Route path="/mapa-cidades" element={<CityMapPage />} />
          <Route path="/criacao-de-site-:city" element={<CityPage />} />
          <Route path="/criacao-de-site-estado-:state" element={<StatePage />} />
          
          {/* Serviços por cidade */}
          <Route path="/ecommerce-:city" element={<ServiceCityPage />} />
          <Route path="/landing-page-:city" element={<ServiceCityPage />} />
          <Route path="/leadpilot-:city" element={<ServiceCityPage />} />
          <Route path="/seo-:city" element={<ServiceCityPage />} />
          <Route path="/aplicativo-:city" element={<ServiceCityPage />} />
          <Route path="/sistema-ia-:city" element={<ServiceCityPage />} />
          
          {/* Catch-all route - deve ficar por último */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
