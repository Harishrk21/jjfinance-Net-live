import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/jj-finance-logo.jpeg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, [isScrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-lg shadow-lg py-3' 
            : 'bg-white/95 backdrop-blur-md shadow-md py-4'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo - Larger and Clean */}
            <Link 
              to="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 hover:scale-105"
            >
              <img 
                src={logo} 
                alt="JJ Finance - Best Finance Company in Chennai" 
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? 'h-12 w-12' : 'h-14 w-14 sm:h-16 sm:w-16'
                }`}
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.1))' }}
              />
              <div className="flex flex-col">
                <h1 className={`font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent transition-all duration-300 ${
                  isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl lg:text-3xl'
                }`}>
                  JJ FINANCE
                </h1>
                <p className="text-xs text-slate-600 font-medium hidden sm:block">Your Trusted Financial Partner</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold transition-all duration-300 relative py-2 ${
                    isActive(link.path)
                      ? 'text-amber-600'
                      : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Section - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:04446600889"
                className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 transition-all duration-300 rounded-lg hover:bg-amber-50"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden xl:inline">044-46600889</span>
              </a>
              <Button 
                asChild 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 border-0"
              >
                <Link to="/contact">Apply Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 hover:bg-amber-50 rounded-lg transition-all duration-300 text-slate-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
            style={{ top: `${navHeight}px` }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div 
            className="lg:hidden fixed left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto animate-slideDown"
            style={{ top: `${navHeight}px` }}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-600 shadow-sm'
                        : 'hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="border-t border-slate-200 my-4" />
                
                <a
                  href="tel:04446600889"
                  className="flex items-center gap-3 text-base font-semibold py-3 px-4 hover:bg-slate-50 rounded-lg transition-all duration-300 text-slate-700"
                >
                  <div className="p-2 bg-amber-100 rounded-lg">
                    <Phone className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Call Us</div>
                    <div>044-46600889</div>
                  </div>
                </a>
                
                <a
                  href="https://wa.me/919498002010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-semibold py-3 px-4 hover:bg-slate-50 rounded-lg transition-all duration-300 text-slate-700"
                >
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">WhatsApp</div>
                    <div>9498002010</div>
                  </div>
                </a>
                
                <Button 
                  asChild 
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-lg shadow-amber-500/30 border-0 w-full mt-4 h-12 text-base"
                >
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Apply for Loan Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20 sm:h-24 lg:h-28" />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default Navigation;