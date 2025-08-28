import { useState } from "react";
import { Toaster as Sonner } from "./components/ui/sonner";
import { Toaster } from "./components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import Index from "./pages/Index";
import LecturerAuth from "./pages/LecturerAuth";
import StudentAuth from "./pages/StudentAuth";
import LecturerDashboard from "./pages/LecturerDashboard";

function App() {
  return (
    <>
      <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
           <Route path="/lecturer/signin" element={<LecturerAuth />} />
          <Route path="/student/signin" element={<StudentAuth />} />
          <Route path="/lecturer/home" element={<LecturerDashboard />} />
          {/* <Route path="/class" element={<AuthSystem />} />  */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
    </>
  );
}

export default App;
