import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  link: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, link }: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-xl p-6 shadow-md hover-lift border border-border">
      <div className="bg-gradient-primary text-primary-foreground w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-accent font-bold mt-0.5">✓</span>
            <span className="text-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="outline" className="w-full btn-press">
        <Link to={link}>Learn More</Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
