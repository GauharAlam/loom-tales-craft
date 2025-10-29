import { MessageCircle } from "lucide-react";

interface CollectionCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const CollectionCard = ({ title, description, image, index }: CollectionCardProps) => {
  const whatsappNumber = "+911234567890"; // Keep your actual number here
  const message = encodeURIComponent(`Hi, I'm interested in ${title}. Can you provide more details?`);

  return (
    // Added perspective for 3D effect on hover, smooth transitions, and lift effect
    <div
      className="group animate-fade-in bg-card rounded-lg overflow-hidden shadow-soft border border-black/5 transition-all duration-500 ease-out hover:shadow-hover hover:-translate-y-2"
      style={{
        animationDelay: `${index * 0.15}s`, // Adjusted delay slightly for collection
        perspective: "1000px", // Added for 3D effect
      }}
    >
      {/* Image container with 3D rotation on hover */}
      <div className="relative aspect-[4/3] overflow-hidden transition-transform duration-500 ease-out group-hover:[transform:rotateY(-5deg)_scale(1.03)] p-2.5">
        {" "}
        {/* Added padding around the image */}
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 rounded-sm" // Added rounded-sm for slight curve
        />
        {/* Subtle overlay effect on hover */}
        <div className="absolute inset-2.5 rounded-sm bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold mb-3 text-[#794299] group-hover:text-[#62009b] transition-colors duration-300">
          {title}
        </h3>
        <p className="font-body text-sm text-foreground leading-relaxed mb-4">
          {description}
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          // Enhanced link styling with subtle animation
          className="inline-flex items-center text-[#794299] hover:text-[#62009b] font-medium transition-all duration-300 text-sm group-hover:gap-2"
        >
          View Details
          <MessageCircle className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;