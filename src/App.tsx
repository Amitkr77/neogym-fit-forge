
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import UserDashboard from "./pages/dashboard/UserDashboard";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Map the old routes to the new consolidated ones */}
          <Route path="/member-login" element={<Login />} />
          <Route path="/admin-login" element={<Login />} />
          
          {/* These routes will be implemented in the future */}
          <Route path="/facilities" element={<NotFound />} />
          <Route path="/pricing" element={<NotFound />} />
          <Route path="/reviews" element={<NotFound />} />
          <Route path="/classes" element={<NotFound />} />
          <Route path="/sitemap" element={<NotFound />} />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
