import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Building2, Landmark, CreditCard, Home, Download } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

const Services = () => {
  const services = [
    {
      id: 'property',
      icon: Building2,
      title: 'Property Based Finance',
      tagline: 'Unlock Your Property\'s Value',
      description: 'Leverage your property to access substantial funds with competitive rates and flexible terms.',
      features: [
        { label: 'Loan Amount', value: 'Based on property value' },
        { label: 'Interest Rate', value: 'Competitive rates' },
        { label: 'Tenure', value: 'Flexible options' },
      ],
      eligibility: [
        'Property owned by applicant/co-applicant',
        'Good credit history preferred',
        'Stable income source required',
        'Property free from legal disputes',
      ],
      useCases: ['Business Expansion', 'Higher Education', 'Wedding', 'Medical Emergency', 'Renovation', 'Debt Consolidation'],
    },
    {
      id: 'private',
      icon: Landmark,
      title: 'Private Finance',
      tagline: 'Flexible Solutions for Unique Needs',
      description: 'Customized financing for business owners and individuals with unique requirements.',
      features: [
        { label: 'Loan Amount', value: 'Flexible' },
        { label: 'Approval Time', value: 'Quick processing' },
        { label: 'Repayment', value: 'Customizable plans' },
      ],
      idealFor: [
        'Business owners with irregular income',
        'Quick capital for opportunities',
        'Urgent financial needs',
        'Bridge financing requirements',
      ],
      repaymentOptions: [
        { title: 'Standard EMI', desc: 'Fixed monthly installments' },
        { title: 'Step-Up EMI', desc: 'Lower initial, gradual increase' },
        { title: 'Balloon Payment', desc: 'Smaller EMIs, larger final payment' },
        { title: 'Seasonal', desc: 'Aligned with income cycle' },
      ],
    },
    {
      id: 'personal',
      icon: CreditCard,
      title: 'Personal Loan',
      tagline: 'Quick Cash for Life\'s Moments',
      description: 'Instant unsecured loans with minimal documentation and quick approval.',
      features: [
        { label: 'Collateral', value: 'Not required' },
        { label: 'Processing', value: 'Quick approval' },
        { label: 'Documentation', value: 'Minimal' },
      ],
      eligibility: [
        'Stable income source',
        'Good credit history preferred',
        'Age criteria apply',
      ],
      uses: [
        { icon: '💒', label: 'Wedding' },
        { icon: '✈️', label: 'Travel' },
        { icon: '🏥', label: 'Medical' },
        { icon: '🏡', label: 'Renovation' },
        { icon: '💻', label: 'Electronics' },
        { icon: '🎓', label: 'Education' },
      ],
    },
    {
      id: 'home',
      icon: Home,
      title: 'Home Loan',
      tagline: 'Build Your Dream Home',
      description: 'Competitive rates and flexible terms for home purchase, construction, or extension.',
      features: [
        { label: 'LTV Ratio', value: 'Attractive ratios' },
        { label: 'Tenure', value: 'Long-term options' },
        { label: 'Tax Benefits', value: 'Available' },
      ],
      loanTypes: [
        { title: 'Home Purchase', desc: 'Up to 90% funding' },
        { title: 'Construction', desc: 'Stage-wise disbursement' },
        { title: 'Extension', desc: 'Expand existing property' },
        { title: 'Plot + Construction', desc: 'Combined financing' },
      ],
      taxBenefits: [
        { section: '§80C', desc: 'Principal repayment deduction' },
        { section: '§24(b)', desc: 'Interest payment deduction' },
        { section: '§80EEA', desc: 'First-time buyer benefits' },
      ],
    },
  ];

  const faqs = [
    { question: 'What is the maximum loan amount?', answer: 'Amount varies by service type based on eligibility, income, property value, and documentation. Contact us for personalized assessment.' },
    { question: 'How long does approval take?', answer: 'Varies by loan type and documentation completeness. We process applications quickly while maintaining thorough standards.' },
    { question: 'Are there prepayment charges?', answer: 'Terms vary by loan type. We offer flexible prepayment options with transparent terms explained during application.' },
    { question: 'What credit score is required?', answer: 'We evaluate holistically considering credit history, income, property value, and other factors. Contact us to discuss your situation.' },
    { question: 'Any hidden charges?', answer: 'Absolutely not. Complete transparency with all fees and rates stated upfront. No surprises, no hidden costs.' },
    { question: 'Can self-employed apply?', answer: 'Yes! We welcome salaried, self-employed professionals, and business owners with flexible solutions for irregular income.' },
  ];

  const ServiceCard = ({ service, bg }) => {
    const ServiceIcon = service.icon;
    
    return (
      <section id={service.id} className={`py-16 ${bg} scroll-mt-32`}>
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <ServiceIcon className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-blue-600 font-semibold">{service.tagline}</p>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{service.description}</p>

          <div className="bg-white rounded-lg shadow-sm border p-5 mb-6">
            <h3 className="font-bold mb-3">Key Features</h3>
            <div className="grid md:grid-cols-3 gap-3">
              {service.features.map((f, i) => (
                <div key={i} className="bg-gray-50 rounded p-3">
                  <div className="text-xs text-gray-500 mb-1">{f.label}</div>
                  <div className="text-sm font-semibold text-blue-600">{f.value}</div>
                </div>
              ))}
            </div>
          </div>

          {service.eligibility && (
            <div className="bg-blue-50 rounded-lg p-5 mb-6">
              <h3 className="font-bold mb-3">Eligibility</h3>
              <div className="space-y-2">
                {service.eligibility.map((e, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{e}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.idealFor && (
            <div className="bg-blue-600 text-white rounded-lg p-5 mb-6">
              <h3 className="font-bold mb-3">Ideal For</h3>
              <div className="space-y-2">
                {service.idealFor.map((item, i) => (
                  <div key={i} className="flex gap-2 text-sm">
                    <span className="font-bold">→</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.repaymentOptions && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {service.repaymentOptions.map((opt, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border p-4">
                  <h4 className="font-bold text-sm mb-1">{opt.title}</h4>
                  <p className="text-xs text-gray-600">{opt.desc}</p>
                </div>
              ))}
            </div>
          )}

          {service.useCases && (
            <div className="mb-6">
              <h3 className="font-bold mb-3">Popular Uses</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {service.useCases.map((use, i) => (
                  <div key={i} className="bg-blue-600 text-white rounded-lg py-3 px-4 text-center text-sm font-semibold">
                    {use}
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.uses && (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
              {service.uses.map((use, i) => (
                <div key={i} className="bg-white border rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                  <div className="text-2xl mb-1">{use.icon}</div>
                  <div className="text-xs font-semibold">{use.label}</div>
                </div>
              ))}
            </div>
          )}

          {service.loanTypes && (
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {service.loanTypes.map((type, i) => (
                <div key={i} className="bg-white rounded-lg shadow-sm border p-4">
                  <h4 className="font-bold text-blue-600 mb-1">{type.title}</h4>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </div>
              ))}
            </div>
          )}

          {service.taxBenefits && (
            <div className="bg-blue-50 rounded-lg p-5 mb-6">
              <h3 className="font-bold mb-3">Tax Benefits</h3>
              <div className="space-y-2 mb-3">
                {service.taxBenefits.map((tax, i) => (
                  <div key={i} className="flex gap-3 text-sm">
                    <span className="font-bold text-blue-600">{tax.section}</span>
                    <span>{tax.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-600 pt-3 border-t">Consult tax advisor for details</p>
            </div>
          )}

          <div className="flex gap-3">
            <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link to="/#emi-calculator">Calculate EMI</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm mb-3 opacity-90">
            <Link to="/" className="hover:underline">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Services</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Our Financial Services</h1>
          <p className="text-lg opacity-90 max-w-2xl">Comprehensive loan solutions with competitive rates and quick approvals</p>
        </div>
      </section>

      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <nav className="flex gap-1 overflow-x-auto py-3">
            {services.map((s) => {
              const NavIcon = s.icon;
              return (
                <a key={s.id} href={`#${s.id}`} className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap hover:bg-gray-100">
                  <NavIcon className="w-4 h-4" />
                  {s.title}
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {services.map((s, i) => (
        <ServiceCard key={s.id} service={s} bg={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} />
      ))}

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Compare Services</h2>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm bg-white rounded-lg shadow-sm border">
              <thead className="bg-blue-600 text-white">
                <tr>
                  {['Feature', 'Property', 'Private', 'Personal', 'Home'].map((h) => (
                    <th key={h} className="text-left py-3 px-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Collateral', 'Required', 'Flexible', 'Not Required', 'Required'],
                  ['Processing', 'Quick', 'Fast', 'Quick', 'Efficient'],
                  ['Tenure', 'Flexible', 'Flexible', 'Medium', 'Long-term'],
                ].map((row, i) => (
                  <tr key={i} className="border-b last:border-0">
                    {row.map((cell, j) => (
                      <td key={j} className={`py-3 px-4 ${j === 0 ? 'font-semibold' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Helpful Resources</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {['Application Form', 'EMI Calculator', 'Rate Chart'].map((title, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm border p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="font-bold mb-2">{title}</h3>
                <Button variant="outline" className="w-full mt-3">Download</Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;