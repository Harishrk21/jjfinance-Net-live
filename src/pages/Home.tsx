import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Building2,
  CreditCard,
  Home as HomeIcon,
  Landmark,
  Clock,
  Shield,
  FileText,
  TrendingDown,
  HeadphonesIcon,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import EMICalculator from '@/components/EMICalculator';
import TestimonialCarousel from '@/components/TestimonialCarousel';

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: 'Property Based Finance',
      description: 'Leverage your property to access substantial funds for your business or personal needs.',
      features: ['Flexible Loan Amounts', 'Extended Tenure Options', 'Competitive Interest Rates', 'Quick Processing'],
      link: '/services#property',
    },
    {
      icon: Landmark,
      title: 'Private Finance',
      description: 'Flexible financing solutions tailored to your unique requirements with quick disbursal.',
      features: ['Customizable Amounts', 'Fast Approval', 'Minimal Paperwork', 'Flexible Repayment'],
      link: '/services#private',
    },
    {
      icon: CreditCard,
      title: 'Personal Loan',
      description: 'Quick cash for life\'s important moments without any collateral requirements.',
      features: ['Various Loan Amounts', 'No Collateral Required', 'Quick Approval', 'Competitive Rates'],
      link: '/services#personal',
    },
    {
      icon: HomeIcon,
      title: 'Home Loan',
      description: 'Build your dream home with competitive interest rates and flexible repayment terms.',
      features: ['Long Tenure Options', 'Attractive Interest Rates', 'Easy EMI Options', 'Flexible Repayment'],
      link: '/services#home',
    },
  ];

  const benefits = [
    { icon: Clock, title: 'Quick Processing', description: 'Get your loan approved within 24-48 hours with our streamlined process.' },
    { icon: TrendingDown, title: 'Flexible Repayment', description: 'Choose EMI plans that fit your budget with flexible repayment options.' },
    { icon: FileText, title: 'Minimal Documentation', description: 'Simple paperwork process with minimal documentation requirements.' },
    { icon: Shield, title: 'Transparent Pricing', description: 'Clear and competitive rates with transparent pricing and no hidden charges.' },
    { icon: HeadphonesIcon, title: 'Expert Guidance', description: 'Dedicated loan advisors to guide you through every step of the process.' },
  ];

  const loanProcess = [
    { step: '1', title: 'Apply Online', description: 'Fill out our simple 5-minute application form', time: '5 Minutes' },
    { step: '2', title: 'Verification', description: 'Our team verifies your documents quickly', time: '2-6 Hours' },
    { step: '3', title: 'Approval', description: 'Get instant approval notification', time: '12-24 Hours' },
    { step: '4', title: 'Disbursal', description: 'Funds transferred directly to your account', time: 'Same Day' },
  ];

  const serviceAreas = ['Srinivasapuram', 'Paraniputthur', 'Tambaram', 'Velachery', 'Chromepet', 'Pallavaram', 'Medavakkam', 'Selaiyur', 'Chitlapakkam', 'Urapakkam'];

  return (
    <div className="min-h-screen">
      {/* SEO Meta Tags would go in the head */}
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-5xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Trusted Financial Partner in <span className="text-yellow-400">Chennai</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Fast Approvals | Minimal Documentation | Transparent Process
            </p>
            <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Get instant loan approvals for property-based finance, personal loans, home loans, and private finance in Chennai
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg shadow-xl">
                <Link to="/contact">
                  Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg backdrop-blur-sm">
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                { label: 'Quick', sublabel: 'Approval Process', icon: Clock },
                { label: 'Transparent', sublabel: 'No Hidden Charges', icon: Shield },
                { label: 'Fast', sublabel: 'Processing Time', icon: CheckCircle },
                { label: 'RBI Compliant', sublabel: 'Certified', icon: Star },
              ].map((badge, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <badge.icon className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-lg font-bold">{badge.label}</div>
                  <div className="text-sm text-blue-200">{badge.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Contact Bar */}
        <div className="absolute top-24 right-4 bg-white rounded-lg shadow-2xl p-4 hidden lg:block">
          <div className="space-y-3">
            <a href="tel:04446600889" className="flex items-center gap-2 text-sm text-blue-900 hover:text-yellow-600 transition-colors font-medium">
              <Phone className="h-4 w-4" />
              <span>044-46600889</span>
            </a>
            <a href="https://wa.me/919498002010" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-blue-900 hover:text-yellow-600 transition-colors font-medium">
              <Phone className="h-4 w-4" />
              <span>7639000067</span>
            </a>
            <a href="mailto:jjfinance2025@gmail.com,varun@jjfinmart.com" className="flex items-center gap-2 text-sm text-blue-900 hover:text-yellow-600 transition-colors font-medium">
              <Mail className="h-4 w-4" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Our Financial Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive loan solutions designed to meet your unique financial needs across Chennai
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Why Choose JJ Finance?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the difference with Chennai's most trusted financial partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow bg-gray-50">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-900 text-white mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Simple Loan Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From application to disbursal in just 4 easy steps
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {loanProcess.map((process, index) => (
                <div key={index} className="text-center relative">
                  {index < loanProcess.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-yellow-400 to-blue-500" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 text-blue-900 text-3xl font-bold mb-4 shadow-lg">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{process.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{process.description}</p>
                  <span className="inline-block px-3 py-1 bg-blue-900 text-white text-xs font-semibold rounded-full">
                    {process.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <EMICalculator />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">Areas We Serve in Chennai</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Providing financial services across Chennai and surrounding areas
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-lg transition-shadow border border-gray-200">
                  <MapPin className="h-5 w-5 text-blue-900 mx-auto mb-2" />
                  <span className="text-sm font-medium text-gray-900">{area}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2677!2d80.1247!3d12.9564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU3JzIzLjAiTiA4MMKwMDcnMjguOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JJ Finance Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Get Your Loan Approved?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Trust JJ Finance for your financial needs with transparent and professional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold text-lg shadow-xl">
              <Link to="/contact">
                Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-blue-900 font-bold text-lg backdrop-blur-sm">
              <a href="tel:04446600889">
                <Phone className="mr-2 h-5 w-5" />
                Call 044-46600889
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;