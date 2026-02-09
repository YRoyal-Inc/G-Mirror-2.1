import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-morphism py-3 shadow-md' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="#" className="flex items-center gap-2">
          <img src="https://storage.googleapis.com/lexis-ia.firebasestorage.app/users/Z9nAjAuFZ6cAHwvC6897zJjNXA13/projects/c84c5b46-d10c-42d2-90a3-65d7f5908d54/logos/logo-primary.svg" alt="G-Mirror Logo" className="h-10 w-auto" />
          
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="font-semibold hover:text-primary transition-colors">Solutions</a>
          <a href="#operators" className="font-semibold hover:text-primary transition-colors">Opérateurs</a>
          <Link to="/dashboard">
            <Button variant="primary">Mon Espace Client</Button>
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl p-4 flex flex-col gap-4">
          <a href="#solutions" className="py-2 px-4 font-semibold">Solutions</a>
          <Link to="/dashboard" className="w-full">
            <Button variant="primary" className="w-full">Se Connecter</Button>
          </Link>
        </div>
      )}
    </header>
  );
};