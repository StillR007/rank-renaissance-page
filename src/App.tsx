import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cases from "./pages/Cases";
import Privacy from "./pages/Privacy";
import TechnicalAudit from "@/pages/services/TechnicalAudit";
import ContentOptimization from "@/pages/services/ContentOptimization";
import LinkBuilding from "@/pages/services/LinkBuilding";
import Analytics from "@/pages/services/Analytics";
import HowItWorks from "@/pages/HowItWorks";
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
          <Route path="/cases" element={<Cases />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/services/technical-audit" element={<TechnicalAudit />} />
          <Route path="/services/content-optimization" element={<ContentOptimization />} />
          <Route path="/services/link-building" element={<LinkBuilding />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
