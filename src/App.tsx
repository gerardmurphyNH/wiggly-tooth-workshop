import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { VirtueProvider } from "@/context/VirtueContext";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ColoringPage from "./pages/ColoringPage";
import WhatDoesTheToothFairyDo from "./pages/WhatDoesTheToothFairyDo";
import WhyDoesTheToothFairyTakeTeeth from "./pages/WhyDoesTheToothFairyTakeTeeth";
import IsTheToothFairyReal from "./pages/IsTheToothFairyReal";
import ToothFairyStoryExplained from "./pages/ToothFairyStoryExplained";
import FirstToothWhatToDo from "./pages/FirstToothWhatToDo";
import ToothFairyFAQ from "./pages/ToothFairyFAQ";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <VirtueProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/coloring-page" element={<ColoringPage />} />
              <Route path="/what-does-the-tooth-fairy-do-with-teeth" element={<WhatDoesTheToothFairyDo />} />
              <Route path="/why-does-the-tooth-fairy-take-teeth" element={<WhyDoesTheToothFairyTakeTeeth />} />
              <Route path="/is-the-tooth-fairy-real" element={<IsTheToothFairyReal />} />
              <Route path="/tooth-fairy-story-explained" element={<ToothFairyStoryExplained />} />
              <Route path="/first-tooth-what-to-do" element={<FirstToothWhatToDo />} />
              <Route path="/tooth-fairy-faq" element={<ToothFairyFAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </VirtueProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
