import { useState } from "react";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/Index";

function App() {
  return (
    <>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* <Route path="/lecturer" element={<LecturerDashboard />} />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/class/:classId" element={<ClassDetails />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </>
  );
}

export default App;
