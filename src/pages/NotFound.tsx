
import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Home } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-gray-100 py-20">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-neogym-red mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-8">Oops! Page not found</p>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-neogym-red hover:bg-neogym-red/90 text-white">
              <Home className="mr-2 h-4 w-4" /> Back to Homepage
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
