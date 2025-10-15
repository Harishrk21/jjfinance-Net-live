import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [tenure, setTenure] = useState(5);
  const [interestRate, setInterestRate] = useState(12);

  const calculateEMI = () => {
    const P = loanAmount;
    const r = interestRate / 12 / 100;
    const n = tenure * 12;
    
    const EMI = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmount = EMI * n;
    const totalInterest = totalAmount - P;

    return {
      emi: Math.round(EMI),
      totalInterest: Math.round(totalInterest),
      totalAmount: Math.round(totalAmount),
    };
  };

  const result = calculateEMI();

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 bg-muted" id="emi-calculator">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-primary-foreground mb-4">
            <Calculator className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">EMI Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your monthly installment and plan your finances better
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Input Section */}
            <div className="space-y-8">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-foreground">Loan Amount</label>
                  <span className="text-sm font-bold text-accent">{formatCurrency(loanAmount)}</span>
                </div>
                <Slider
                  value={[loanAmount]}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  min={50000}
                  max={5000000}
                  step={50000}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>₹50K</span>
                  <span>₹50L</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-foreground">Tenure (Years)</label>
                  <span className="text-sm font-bold text-accent">{tenure} Years</span>
                </div>
                <Slider
                  value={[tenure]}
                  onValueChange={(value) => setTenure(value[0])}
                  min={1}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>1 Year</span>
                  <span>30 Years</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-foreground">Interest Rate (% p.a.)</label>
                  <span className="text-sm font-bold text-accent">{interestRate}%</span>
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  min={8}
                  max={20}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>8%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>

            {/* Result Section */}
            <div className="flex flex-col justify-center">
              <div className="gradient-primary rounded-xl p-8 text-primary-foreground">
                <h3 className="text-lg font-semibold mb-6">Your Monthly EMI</h3>
                <div className="text-5xl font-bold mb-8">{formatCurrency(result.emi)}</div>
                
                <div className="space-y-4 border-t border-primary-foreground/20 pt-6">
                  <div className="flex justify-between">
                    <span className="text-sm opacity-90">Principal Amount</span>
                    <span className="font-semibold">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm opacity-90">Total Interest</span>
                    <span className="font-semibold">{formatCurrency(result.totalInterest)}</span>
                  </div>
                  <div className="flex justify-between border-t border-primary-foreground/20 pt-4">
                    <span className="text-sm font-semibold">Total Payment</span>
                    <span className="font-bold text-lg">{formatCurrency(result.totalAmount)}</span>
                  </div>
                </div>
              </div>

              <Button asChild className="gradient-gold text-primary font-semibold btn-press mt-6 w-full">
                <Link to="/contact">Apply for This Loan</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;
