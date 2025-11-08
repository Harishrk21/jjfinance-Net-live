import { MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '917639000067';  
  const message = encodeURIComponent('Hi, I would like to inquire about loan services at JJ Finance.');

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 bg-accent text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
        !
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
