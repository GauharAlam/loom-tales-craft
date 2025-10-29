import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard"; // Assuming this component exists
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import exchangeImg from "@/assets/service-exchange.jpg";
import cleaningImg from "@/assets/service-cleaning.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const Services = () => {
  const carpetServices = [
    {
      title: "Professional Washing",
      description: "Tailored washing techniques to preserve your carpet's integrity while removing dirt.",
      image: washingImg,
    },
    {
      title: "Expert Repairing",
      description: "Master craftsmen meticulously restore damaged areas using traditional techniques.",
      image: repairImg,
    },
    {
      title: "Complete Restoration",
      description: "Bring vintage and antique carpets back to their former glory with our comprehensive service.",
      image: restorationImg,
    },
  ];

  const shawlServices = [
    {
      title: "Delicate Shawl Washing",
      description: "Specialized hand-washing for precious Pashmina and Kashmiri shawls.",
      image: washingImg,
    },
    {
      title: "Shawl Restoration",
      description: "Expert restoration of vintage shawls, repairing tears and reviving faded colors.",
      image: restorationImg,
    },
    {
      title: "Sell & Exchange Program",
      description: "Upgrade your shawl collection with our program that offers fair valuations for quality pieces.",
      image: exchangeImg,
    },
  ];

  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Premium Services"
            className="w-full h-full object-cover"
          />
          {/* MODIFIED: Gradient is more transparent for a clearer image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/50 to-brown/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Our Premium Services
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed">
              Comprehensive care solutions for your precious carpets and shawls, combining traditional craftsmanship with modern techniques.
            </p>
          </div>
        </div>
      </section>

      {/* Carpet Services */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#794299]">
              Carpet Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              From deep cleaning to intricate restoration, we provide expert care to preserve the beauty and value of your carpets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {carpetServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shawl Services */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#794299]">
              Shawl Care Services
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Delicate handling and specialized treatments for your treasured Pashmina, Kashmiri, and other fine shawls.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shawlServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;