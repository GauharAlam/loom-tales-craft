import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  index: number; // Keep index for potential staggered animations
}

const ServiceCard = ({ title, description, image, index }: ServiceCardProps) => {
  return (
    // Added perspective for 3D effect on hover, smooth transitions
    <div
      className="group animate-fade-in bg-card rounded-lg overflow-hidden shadow-soft border border-black/5 transition-all duration-500 ease-out hover:shadow-hover hover:-translate-y-2"
      style={{
        animationDelay: `${index * 0.1}s`,
        perspective: "1000px", // Added for 3D effect
      }}
    >
      {/* Image container with 3D rotation on hover */}
      <div className="relative aspect-[4/3] overflow-hidden transition-transform duration-500 ease-out group-hover:[transform:rotateY(-5deg)_scale(1.03)]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Subtle overlay effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 text-[#794299] group-hover:text-[#62009b] transition-colors duration-300">
          {title}
        </h3>
        <p className="font-body text-foreground leading-relaxed mb-4 text-sm">
          {description}
        </p>
        <Link
          to="/book-appointment"
          // Enhanced link styling with subtle animation
          className="inline-flex items-center text-[#794299] hover:text-[#62009b] font-medium transition-all duration-300 text-sm group-hover:gap-2"
        >
          Book Now
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;