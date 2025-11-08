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
      className={`fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 bg-white rounded-full h-2 w-2 animate-ping"></span>
        <span className="absolute -top-1 -right-1 bg-white rounded-full h-2 w-2"></span>
      </div>
    </a>
  );
};

export default FloatingWhatsApp;
