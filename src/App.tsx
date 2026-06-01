import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VirtueProvider } from "@/context/VirtueContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import IsToothFairyReal from "./pages/IsToothFairyReal";
import WhatDoesTheToothFairyDo from "./pages/WhatDoesTheToothFairyDo";
import HowMuchDoesTheToothFairyLeave from "./pages/HowMuchDoesTheToothFairyLeave";
import Printables from "./pages/Printables";
import ForTeachers from "./pages/ForTeachers";
import ForParents from "./pages/ForParents";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <VirtueProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/is-the-tooth-fairy-real" element={<IsToothFairyReal />} />
            <Route path="/what-does-the-tooth-fairy-do-with-teeth" element={<WhatDoesTheToothFairyDo />} />
            <Route path="/how-much-does-the-tooth-fairy-leave" element={<HowMuchDoesTheToothFairyLeave />} />
            <Route path="/printables" element={<Printables />} />
            <Route path="/for-teachers" element={<ForTeachers />} />
            <Route path="/for-parents" element={<ForParents />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </VirtueProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
