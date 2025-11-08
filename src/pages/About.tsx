import { Link } from 'react-router-dom';
import { ChevronRight, Target, Eye, Shield, Clock, Users, TrendingUp, Award, CheckCircle2, Building2, Star, Heart, Handshake, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import fatherImage from '../assets/father.jpeg';
import sonImage from '../assets/son.jpeg';

const About = () => {
  const journeySteps = [
    {
      icon: Heart,
      title: 'Founded with Purpose',
      description: 'JJ Finance was established in 2024 with a clear mission to serve Chennai residents with transparent, accessible financial solutions.',
      highlight: 'Est. 2024'
    },
    {
      icon: Target,
      title: 'Mission-Driven Approach',
      description: 'We committed to providing honest, customer-first financial services without hidden charges or complex procedures.',
      highlight: 'Transparency First'
    },
    {
      icon: Eye,
      title: 'Vision for Growth',
      description: 'Building towards becoming Chennai\'s most trusted financial partner, one satisfied customer at a time.',
      highlight: 'Community Focus'
    },
    {
      icon: TrendingUp,
      title: 'Growing Together',
      description: 'Expanding our services and reach while maintaining our core values of trust, speed, and customer satisfaction.',
      highlight: 'Future Ready'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'Clear terms, no hidden charges, complete honesty in every transaction',
    },
    {
      icon: CheckCircle2,
      title: 'Trust',
      description: 'Building long-term relationships based on reliability and integrity',
    },
    {
      icon: Clock,
      title: 'Speed',
      description: 'Quick decisions and fast disbursal without compromising quality',
    },
    {
      icon: Users,
      title: 'Customer-First',
      description: 'Your financial success is our priority, always',
    },
    {
      icon: TrendingUp,
      title: 'Integrity',
      description: 'Ethical practices and fair assessment in every loan evaluation',
    },
    {
      icon: Handshake,
      title: 'Simplicity',
      description: 'Making finance accessible with straightforward processes',
    },
  ];

  const leadership = [
    {
      name: 'JayaKumar',
      role: 'Proprietor & Founder',
      image: fatherImage,
      bio: 'With over 25 years of experience in the financial services industry, Mr. JayaKumar founded JJ Finance with a vision to make financial services more accessible and transparent for the Chennai community. His deep understanding of local market dynamics and unwavering commitment to ethical practices has been the cornerstone of our company\'s foundation.',
      expertise: ['Financial Strategy', 'Risk Management', 'Customer Relations', 'Business Development'],
      quote: 'Our customers\' financial success is our success. Every loan we approve is a step towards building lasting trust.'
    },
    {
      name: 'J. Varun',
      role: 'Director & Operations Head',
      image: sonImage,
      bio: 'Armed with an MBA in Finance and modern technological expertise, Karthik brings fresh perspectives to traditional finance. He leads our digital transformation initiatives and ensures that JJ Finance stays ahead with innovative solutions while maintaining the personal touch that our customers value.',
      expertise: ['Digital Innovation', 'Operations Management', 'Process Optimization', 'Customer Experience'],
      quote: 'Combining traditional values with modern technology - that\'s how we deliver excellence in every transaction.'
    }
  ];

  const differentiators = [
    {
      title: 'Local Expertise',
      description: 'Deep understanding of Chennai market and community needs',
    },
    {
      title: 'Flexible Approach',
      description: 'Customized solutions for unique financial situations',
    },
    {
      title: 'Quick Decisions',
      description: '24-48 hour approval process for most loan types',
    },
    {
      title: 'Relationship Focus',
      description: 'Dedicated advisors who understand your financial journey',
    },
    {
      title: 'Fair Assessment',
      description: 'Holistic evaluation beyond just credit scores',
    },
    {
      title: 'Post-Disbursement Support',
      description: 'Ongoing guidance throughout your loan tenure',
    },
  ];

  const processSteps = [
    {
      title: 'Listening First',
      description: 'We take time to understand your unique financial situation and goals',
    },
    {
      title: 'Transparent Communication',
      description: 'Clear explanation of terms, rates, and charges upfront',
    },
    {
      title: 'Quick Assessment',
      description: 'Fast evaluation of eligibility and loan amount within hours',
    },
    {
      title: 'Fair Valuation',
      description: 'Honest property assessment with independent valuers',
    },
    {
      title: 'Simple Documentation',
      description: 'Minimal paperwork with guided assistance throughout',
    },
    {
      title: 'Fast Disbursal',
      description: 'Quick fund transfer once all documentation is complete',
    },
    {
      title: 'Ongoing Support',
      description: 'Continued guidance for queries, prepayments, and refinancing',
    },
  ];

  const commitmentFeatures = [
    {
      icon: Star,
      title: 'Quality Service',
      description: 'Exceptional service standards in every interaction'
    },
    {
      icon: Shield,
      title: 'Secure Process',
      description: 'Your data and transactions are completely secure'
    },
    {
      icon: Heart,
      title: 'Personal Care',
      description: 'Individual attention to your unique needs'
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 76390 00067',
      link: 'tel:+917639000067'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'varun@jjfinmart.com',
      link: 'mailto:varun@jjfinmart.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Paraniputthur, Chennai',
      link: '/contact'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero + Breadcrumb */}
      <section className="gradient-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-6 opacity-90">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span>About Us</span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About JJ Finance</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Building Trust Through Transparent Financial Services in Chennai
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-base md:text-lg">
                    JJ Finance is a new startup dedicated to making financial services accessible, 
                    transparent, and customer-friendly for the people of Chennai. Based in 
                    Paraniputthur, we're building one of Chennai's most trusted names in personal, home, and property-based finance.
                  </p>
                  <p className="text-base md:text-lg">
                    We're here to help individuals and families achieve their dreams—whether it's buying their first home, 
                    expanding their business, funding education, or managing unexpected expenses.
                  </p>
                  <p className="text-base md:text-lg">
                    We understand the local community because we're part of it. At JJ Finance, you're not just a 
                    loan application number—you're a valued partner in a long-term relationship built on trust and transparency.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">2024</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Transparent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24-48h</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Approval</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-2">Local</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Chennai Focus</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Journey Section */}
            <div className="mb-12 md:mb-16">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Our Journey</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full hidden lg:block"></div>
                
                <div className="space-y-8 md:space-y-12">
                  {journeySteps.map((step, index) => (
                    <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                      <div className={`w-full lg:flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        <div className="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow duration-300">
                          <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                            <step.icon className="h-6 w-6 text-accent" />
                            <span className="text-sm font-semibold text-accent">{step.highlight}</span>
                          </div>
                          <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>

                      <div className="hidden lg:flex w-16 h-16 rounded-full gradient-primary text-primary-foreground items-center justify-center font-bold text-lg shadow-lg z-10 flex-shrink-0">
                        {index + 1}
                      </div>

                      <div className="flex-1 hidden lg:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - NEW */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Combining decades of experience with innovative thinking to serve you better
              </p>
            </div>

            <div className="space-y-12 md:space-y-16">
              {leadership.map((leader, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                      <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <img 
                          src={leader.image} 
                          alt={leader.name}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{leader.name}</h3>
                          <p className="text-amber-400 font-semibold text-lg">{leader.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 !== 0 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="space-y-6">
                      <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {leader.bio}
                        </p>
                        <div className="border-l-4 border-accent pl-4 py-2 bg-accent/5 rounded-r">
                          <p className="text-sm italic text-foreground">
                            "{leader.quote}"
                          </p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-6">
                        <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5 text-accent" />
                          Areas of Expertise
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {leader.expertise.map((skill, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                              <span className="text-sm font-medium">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Values */}
            <div className="mt-12 md:mt-16 bg-card rounded-2xl p-8 shadow-lg border border-border text-center">
              <h3 className="text-2xl font-bold mb-4">A Family-Led, Customer-Focused Approach</h3>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                As a family-run business, we bring personal accountability and genuine care to every interaction. 
                Our leadership team is always accessible, ensuring that your concerns are heard and addressed promptly. 
                We believe in building relationships, not just processing transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full gradient-primary text-primary-foreground mb-6">
                  <Target className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To provide accessible, transparent, and customer-centric financial solutions that empower individuals 
                  and businesses to achieve their goals without financial stress.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full gradient-primary text-primary-foreground mb-6">
                  <Eye className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  To become Chennai's most trusted and preferred financial services provider, known for integrity, 
                  speed, and customer satisfaction in every transaction.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border text-center hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full gradient-primary text-primary-foreground mb-6">
                  <Award className="h-7 w-7 md:h-8 md:w-8" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">Our Promise</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Transparency, trust, speed, customer-first approach, integrity, and simplicity guide every decision 
                  we make and every service we provide.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Our Core Values</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
                  <value.icon className="h-10 w-10 text-accent mb-4" />
                  <h4 className="text-lg font-bold mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-12 md:py-16 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Commitment to You</h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              {commitmentFeatures.map((feature, index) => (
                <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="opacity-90 text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              Every customer who chooses JJ Finance becomes part of our growing family, and we're dedicated 
              to helping you achieve your financial goals with trust and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">What Makes Us Different</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-bold text-lg mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-accent">{diff.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-12 md:py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">How We Work Differently</h2>
            <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto text-base md:text-lg">
              Our customer-centric approach ensures you get the best possible experience from application to disbursal
            </p>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-4 bg-card rounded-xl p-6 shadow-md border border-border hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-gradient-to-br from-amber-400 to-amber-600 text-white font-bold text-lg rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office & Certifications */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
              {/* Office */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Visit Our Office</h2>
                <div className="bg-card rounded-xl p-6 md:p-8 shadow-lg border border-border">
                  <div className="flex items-start gap-4 mb-6">
                    <Building2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">JJ Finance</h3>
                      <address className="not-italic text-muted-foreground leading-relaxed text-sm md:text-base">
                        #5/545 A, Kamatchi Amman Nagar,<br />
                        Srinivasapuram, Paraniputthur,<br />
                        Chennai - 600122
                      </address>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {[
                      'Free Parking',
                      'Wheelchair Access',
                      'Private Rooms',
                      'Digital Process',
                      'Tamil & English',
                      'Comfortable Space',
                    ].map((facility, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>

                  {/* Contact Info */}
                  <div className="border-t border-border pt-6 space-y-3">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.link}
                        className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                      >
                        <info.icon className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-xs text-muted-foreground/70">{info.label}</div>
                          <div className="font-medium text-foreground">{info.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Certifications & Compliance</h2>
                <div className="space-y-4 mb-6">
                  {[
                    { label: 'RBI Compliant', icon: Award, desc: 'Fully compliant with RBI guidelines' },
                    { label: 'ISO Certified', icon: Award, desc: 'International quality standards maintained' },
                    { label: 'Data Security', icon: Shield, desc: 'Advanced encryption and security protocols' },
                  ].map((cert, index) => (
                    <div key={index} className="bg-card rounded-xl p-6 shadow-md border border-border flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
                      <cert.icon className="h-12 w-12 text-accent flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-bold">{cert.label}</h3>
                        <p className="text-sm text-muted-foreground">{cert.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6 border border-border">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    JJ Finance operates in full compliance with RBI guidelines and industry standards. We maintain strict 
                    data security protocols and ethical practices in all our operations to ensure your financial safety.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Ready to Experience the JJ Finance Difference?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust us with their financial needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Link to="/contact">Get Started Today</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 font-bold text-lg backdrop-blur-sm transition-all duration-300"
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;