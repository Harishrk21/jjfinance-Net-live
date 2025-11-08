import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import logo from '@/assets/jj-finance-logo.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="JJ Finance Logo" className="h-10 w-10" />
              <h3 className="text-xl font-bold">JJ FINANCE</h3>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your trusted financial partner in Chennai, providing quick and transparent loan
              solutions with minimal documentation since 2014.
            </p>
            <div className="flex items-start gap-2 text-sm">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <address className="not-italic text-primary-foreground/80">
                #5/545 A, Kamatchi Amman Nagar,<br />
                Srinivasapuram, Paraniputthur,<br />
                Chennai - 600122
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#property" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Property Based Finance
                </Link>
              </li>
              <li>
                <Link to="/services#private" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Private Finance
                </Link>
              </li>
              <li>
                <Link to="/services#personal" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/services#home" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:04446600889"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>044-46600889</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:7639000067"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>7639000067</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:9498002010"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>9498002010</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:jjfinance2025@gmail.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>jjfinance2025@gmail.com</span>
                </a>
                <a
                  href="mailto:varun@jjfinmart.com"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>varun@jjfinmart.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon-Fri: 9:30 AM - 6:30 PM</p>
                  <p>Sat: 9:30 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/80">
            <p>© {currentYear} JJ Finance. All rights reserved.</p>
            <p>RBI Compliant | ISO Certified | Secure & Trusted</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
