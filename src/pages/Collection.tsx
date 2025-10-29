import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CollectionCard from "@/components/CollectionCard"; // Assuming this component exists
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const Collection = () => {
  const collections = [
    {
      title: "Imperial Medallion Carpet",
      description: "Exquisite handwoven carpet featuring intricate geometric medallion patterns.",
      image: collection1,
    },
    {
      title: "Kashmiri Paisley Shawl",
      description: "Luxurious handcrafted shawl with traditional paisley motifs.",
      image: collection2,
    },
    {
      title: "Persian Garden Runner",
      description: "Elegant carpet runner with classical Persian garden design.",
      image: collection3,
    },
    {
      title: "Vintage Floral Carpet",
      description: "Authentic vintage carpet with elaborate floral patterns and ornate borders.",
      image: collection1,
    },
    {
      title: "Heritage Pashmina Shawl",
      description: "Ultra-soft pashmina shawl with hand-embroidered botanical motifs.",
      image: collection2,
    },
    {
      title: "Royal Medallion Carpet",
      description: "Grand statement carpet with symmetrical medallion design.",
      image: collection3,
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
            alt="Our Collection"
            className="w-full h-full object-cover"
          />
          {/* MODIFIED: Gradient is more transparent for a clearer image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/50 to-brown/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FFFFFD] mb-6">
              Our Curated Collection
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed">
              Explore our handpicked selection of exquisite carpets and shawls, each telling a unique story of artistry and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {collections.map((item, index) => (
              <CollectionCard
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#794299]">
              Interested in a Piece?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us to discuss pricing, customization options, or to schedule a private viewing of any item in our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/+911234567890?text=Hi, I'm interested in your collection"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-[#794299] hover:bg-[#62009b] text-primary-foreground font-body font-medium rounded-lg transition-all duration-200 ease-out transform hover:scale-[1.02]"
              >
                Contact via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collection;