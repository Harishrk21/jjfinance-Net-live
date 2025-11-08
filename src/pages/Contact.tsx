import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, MessageCircle, Clock, Car, Bus, MapPinned } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import FAQAccordion from '@/components/FAQAccordion';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Google Maps URLs
  const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3887.118249882585!2d80.12788767507739!3d13.02814098729248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAxJzQxLjMiTiA4MMKwMDcnNDkuNyJF!5e0!3m2!1sen!2sin!4v1760535690422!5m2!1sen!2sin";
  const MAPS_LINK_URL = "https://www.google.com/maps/place/13%C2%B001'41.3%22N+80%C2%B007'49.7%22E/@13.0281409,80.1278876,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.028141!4d80.130476";
  const MAPS_DIRECTIONS_URL = "https://www.google.com/maps/dir/?api=1&destination=13.028141,80.130476";
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    loanAmount: '',
    contactMethod: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
    consent: '',
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      mobile: '',
      email: '',
      service: '',
      message: '',
      consent: '',
    };

    if (!formData.name.trim() || formData.name.length > 100) {
      newErrors.name = 'Name is required (max 100 characters)';
    }

    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) || formData.email.length > 255) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim() || formData.message.length > 1000) {
      newErrors.message = 'Message is required (max 1000 characters)';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Validation Error',
        description: 'Please fix the errors in the form',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message Sent Successfully!',
        description: 'Our team will contact you within 2 hours during business hours.',
      });
      
      // Reset form
      setFormData({
        name: '',
        mobile: '',
        email: '',
        service: '',
        loanAmount: '',
        contactMethod: '',
        message: '',
        consent: false,
      });
    }, 1500);
  };

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const contactFaqs = [
    {
      question: 'What are your office timings?',
      answer: 'We are open Monday to Friday from 9:30 AM to 6:30 PM, and Saturday from 9:30 AM to 2:00 PM. We are closed on Sundays and public holidays.',
    },
    {
      question: 'Do I need an appointment to visit?',
      answer: 'While walk-ins are welcome, we recommend scheduling an appointment to ensure dedicated time with our loan advisors. You can call us or fill out the contact form.',
    },
    {
      question: 'Can I apply for a loan online?',
      answer: 'Yes! You can submit an initial inquiry through our contact form. Our team will reach out within 2 hours during business hours to guide you through the complete application process.',
    },
    {
      question: 'How quickly will I get a response?',
      answer: 'We respond to all inquiries within 2 hours during business hours. For urgent matters, please call us directly at 044-46600889 or WhatsApp at 7639000067.',
    },
    {
      question: 'Is parking available at your office?',
      answer: 'Yes, we have free parking facilities available for our customers. Our office is also wheelchair accessible.',
    },
    {
      question: 'Do you provide services in Tamil?',
      answer: 'Absolutely! Our team is fluent in both Tamil and English. We ensure complete comfort and clarity in communication.',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero + Breadcrumb */}
      <section className="gradient-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Contact Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch with JJ Finance</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            We're here to help you with all your financial needs. Reach out today!
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Call Us */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Call Us</h3>
              <div className="space-y-3 mb-6">
                <a href="tel:04446600889" className="block text-accent hover:underline font-semibold">
                  044-46600889
                </a>
                <a href="tel:7639000067" className="block text-accent hover:underline font-semibold">
                  7639000067
                </a>
                <a href="tel:9498002010" className="block text-accent hover:underline font-semibold">
                  9498002010
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Mon-Fri: 9:30 AM - 6:30 PM<br />Sat: 9:30 AM - 2:00 PM</p>
              <Button asChild className="gradient-gold text-primary font-semibold btn-press w-full">
                <a href="tel:04446600889">Call Now</a>
              </Button>
            </div>

            {/* Email Us */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Email Us</h3>
              <a href="mailto:jjfinance2025@gmail.com" className="block text-accent hover:underline font-semibold mb-4 break-all">
                jjfinance2025@gmail.com
              </a>
              <a href="mailto:varun@jjfinmart.com" className="block text-accent hover:underline font-semibold mb-4 break-all">
                varun@jjfinmart.com
              </a>
              <p className="text-sm text-muted-foreground mb-6">2-hour response time during business hours</p>
              <Button asChild variant="outline" className="gradient-gold text-primary font-semibold btn-press w-full">
                <a href="mailto:varun@jjfinmart.com">Send Email</a>
              </Button>
            </div>

            {/* Visit Office */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary text-primary-foreground mb-4">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visit Office</h3>
              <address className="not-italic text-sm text-muted-foreground mb-6">
                #5/545 A, Kamatchi Amman Nagar,<br />
                Srinivasapuram, Paraniputthur,<br />
                Chennai - 600122
              </address>
              <Button asChild variant="outline" className="gradient-gold text-primary font-semibold btn-press w-full">
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  Get Directions
                </a>
              </Button>
            </div>

            {/* WhatsApp */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border text-center hover-lift">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">WhatsApp</h3>
              <a href="https://wa.me/917639000067" target="_blank" rel="noopener noreferrer" className="block text-accent hover:underline font-semibold mb-4">
                7639000067
              </a>
              <p className="text-sm text-muted-foreground mb-6">Quick replies during business hours</p>
              <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white btn-press w-full">
                <a href="https://wa.me/917639000067" target="_blank" rel="noopener noreferrer">
                  Chat Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours during business hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className={errors.name ? 'border-destructive' : ''}
                  />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-semibold mb-2">
                    Mobile Number <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="mobile"
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10-digit mobile number"
                    className={errors.mobile ? 'border-destructive' : ''}
                  />
                  {errors.mobile && <p className="text-destructive text-xs mt-1">{errors.mobile}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="your.email@example.com"
                    className={errors.email ? 'border-destructive' : ''}
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold mb-2">
                    Service Required <span className="text-destructive">*</span>
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                    <SelectTrigger className={errors.service ? 'border-destructive' : ''}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="property">Property Based Finance</SelectItem>
                      <SelectItem value="private">Private Finance</SelectItem>
                      <SelectItem value="personal">Personal Loan</SelectItem>
                      <SelectItem value="home">Home Loan</SelectItem>
                      <SelectItem value="other">Other/General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-destructive text-xs mt-1">{errors.service}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="loanAmount" className="block text-sm font-semibold mb-2">
                    Loan Amount (Optional)
                  </label>
                  <Input
                    id="loanAmount"
                    value={formData.loanAmount}
                    onChange={(e) => handleChange('loanAmount', e.target.value)}
                    placeholder="e.g., ₹5,00,000"
                  />
                </div>

                <div>
                  <label htmlFor="contactMethod" className="block text-sm font-semibold mb-2">
                    Preferred Contact Method
                  </label>
                  <Select value={formData.contactMethod} onValueChange={(value) => handleChange('contactMethod', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className={errors.message ? 'border-destructive' : ''}
                />
                {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
              </div>

              <div className="flex items-start gap-3 mb-6">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => handleChange('consent', checked as boolean)}
                  className={errors.consent ? 'border-destructive' : ''}
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  I agree to be contacted by JJ Finance regarding my loan inquiry. I understand that my information 
                  will be kept confidential and used only for loan processing purposes. <span className="text-destructive">*</span>
                </label>
              </div>
              {errors.consent && <p className="text-destructive text-xs mb-4">{errors.consent}</p>}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="gradient-gold text-primary font-bold text-lg btn-press w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us on Map</h2>
              <p className="text-muted-foreground">
                Located in Srinivasapuram, easily accessible from major parts of Chennai
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
              <iframe
                src={MAPS_EMBED_URL}
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JJ Finance Location Map"
              ></iframe>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="btn-press">
                <a href={MAPS_LINK_URL} target="_blank" rel="noopener noreferrer">
                  <MapPinned className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </a>
              </Button>
              <Button asChild variant="outline" className="btn-press">
                <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours & Directions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold">Office Hours</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-semibold">Monday - Friday</span>
                  <span className="text-accent">9:30 AM - 6:30 PM</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-semibold">Saturday</span>
                  <span className="text-accent">9:30 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">Sunday</span>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm font-semibold text-accent">Emergency Support for Existing Customers</p>
                <p className="text-sm text-muted-foreground mt-1">WhatsApp 24/7: 7639000067</p>
              </div>
            </div>

            {/* How to Reach */}
            <div className="bg-card rounded-xl p-8 shadow-md border border-border">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold">How to Reach</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Car className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold">By Car</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">
                    Take the GST Road towards Tambaram, exit at Paraniputthur. Free parking available at our office.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Bus className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold">By Public Transport</h4>
                  </div>
                  <p className="text-sm text-muted-foreground pl-7">
                    Multiple bus routes available from Tambaram, Chromepet, and Pallavaram. Local autos easily accessible.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <h4 className="font-semibold">Nearby Landmarks</h4>
                  </div>
                  <ul className="text-sm text-muted-foreground pl-7 space-y-1">
                    <li>• Near Kamatchi Amman Temple</li>
                    <li>• 2 km from Tambaram Railway Station</li>
                    <li>• Close to Srinivasapuram Main Road</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact FAQs</h2>
              <p className="text-muted-foreground">
                Common questions about reaching out to us
              </p>
            </div>
            
            <FAQAccordion faqs={contactFaqs} />
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-accent/10 border border-accent rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-2">Existing Customer Emergency Support</h3>
            <p className="text-muted-foreground mb-4">
              For urgent queries related to your existing loan, contact us 24/7 on WhatsApp
            </p>
            <Button asChild className="bg-[#25D366] hover:bg-[#20BA5A] text-white btn-press">
              <a href="https://wa.me/917639000067" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp: 7639000067
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our friendly team is ready to assist you. Get in touch today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-gold text-primary font-bold text-lg btn-press">
              <a href="tel:04446600889">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gradient-gold text-primary font-bold text-lg btn-press">
              <a href="mailto:jjfinance2025@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gradient-gold text-primary font-bold text-lg btn-press">
              <a href={MAPS_DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
