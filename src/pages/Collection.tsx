import { Link, useLocation } from "react-router-dom";
import { useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";
import heroImage from "@/assets/hero-carpet.jpg";
import { InView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react"; // Make sure this is imported

const Collection = () => {
  const carpetCollection = [
    {
      title: "Imperial Medallion Carpet",
      description:
        "Exquisite handwoven carpet featuring intricate geometric medallion patterns.",
      image: collection1,
      type: "Carpet",
    },
    {
      title: "Persian Garden Runner",
      description: "Elegant carpet runner with classical Persian garden design.",
      image: collection3,
      type: "Carpet",
    },
    {
      title: "Vintage Floral Carpet",
      description:
        "Authentic vintage carpet with elaborate floral patterns and ornate borders.",
      image: collection1,
      type: "Carpet",
    },
    {
      title: "Royal Medallion Carpet",
      description:
        "Grand statement carpet with symmetrical medallion design.",
      image: collection3,
      type: "Carpet",
    },
  ];

  const shawlCollection = [
    {
      title: "Kashmiri Paisley Shawl",
      description: "Luxurious handcrafted shawl with traditional paisley motifs.",
      image: collection2,
      type: "Shawl",
    },
    {
      title: "Heritage Pashmina Shawl",
      description:
        "Ultra-soft pashmina shawl with hand-embroidered botanical motifs.",
      image: collection2,
      type: "Shawl",
    },
  ];

  const whatsappNumber = "+911234567890"; // For the CTA section
  const carpetRef = useRef<HTMLDivElement>(null);
  const shawlRef = useRef<HTMLDivElement>(null);
  const { hash } = useLocation();

  useEffect(() => {
    const scrolltoId = hash.substring(1);
    if (scrolltoId === "carpet" && carpetRef.current) {
      carpetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (scrolltoId === "shawl" && shawlRef.current) {
      shawlRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash]);

  return (
    <div className="bg-white">
      <Header />

      {/* Hero Section (Unchanged) */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Our Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/50 to-brown/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-[#FFFFFD] mb-6">
              Our Curated Collection
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed">
              Explore our handpicked selection of exquisite carpets and shawls,
              each telling a unique story of artistry and tradition.
            </p>
          </div>
        </div>
      </section>

      {/* --- Collection Grid --- */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-16">
          {/* --- Carpet Collection Section --- */}
          <div ref={carpetRef} id="carpet" className="scroll-mt-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[#5A386D]">
              Carpet Collection
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {carpetCollection.map((item, index) => (
                <InView
                  key={index}
                  triggerOnce
                  threshold={0.1}
                  rootMargin="0px 0px -50px 0px"
                >
                  {({ ref, inView }) => (
                    <div
                      ref={ref}
                      className={`
                        transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        ${
                          inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }
                      `}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* --- UNIFIED CARD STYLE (for Mobile and Desktop) --- */}
                      <div
                        className={`
                          group relative overflow-hidden rounded-lg cursor-pointer bg-card
                          shadow-soft hover:shadow-hover
                        `}
                      >
                        {/* Using aspect-square for mobile 2-col grid
                          Using lg:h-96 for desktop 3-col grid
                        */}
                        <div className="relative aspect-square lg:h-96 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
                          
                          {/* Text Container */}
                          <div className="absolute bottom-0 left-0 p-3 md:p-5 text-white w-full">
                            {/* Badge */}
                            {item.type && (
                              <span className="inline-block px-3 py-1 bg-[#62009b]/80 backdrop-blur-sm rounded-full text-xs mb-2">
                                {item.type}
                              </span>
                            )}
                            {/* Title - smaller on mobile, larger on desktop */}
                            <h3 className="font-display text-lg md:text-2xl font-bold drop-shadow-md">
                              {item.title}
                            </h3>
                            
                            {/* --- HOVER BLOCK (for Mobile and Desktop) --- */}
                            <div className="
                              transition-all duration-300 ease-in-out 
                              overflow-hidden max-h-0 opacity-0 
                              group-hover:max-h-40 group-hover:opacity-100 group-hover:pt-2
                            ">
                              {/* Description - hidden on mobile, shown on desktop */}
                              <p className="font-body text-sm text-white/90 mb-2 line-clamp-2 hidden md:block">
                                {item.description}
                              </p>
                              <Link
                                to={`/collection/${item.title.toLowerCase().replace(/ /g, "-")}`}
                                className="inline-flex items-center text-accent hover:text-white font-medium transition-all duration-300 text-sm"
                              >
                                View Details
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            </div>
                            {/* --- END HOVER BLOCK --- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </InView>
              ))}
            </div>
          </div>

          {/* Mobile Grid: 2 columns | Desktop Grid: 3 columns */}
          {/* --- Shawl Collection Section --- */}
          <div ref={shawlRef} id="shawl" className="scroll-mt-24">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12 text-center text-[#5A386D]">
              Shawl Collection
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {shawlCollection.map((item, index) => (
                <InView
                  key={index}
                  triggerOnce
                  threshold={0.1}
                  rootMargin="0px 0px -50px 0px"
                >
                  {({ ref, inView }) => (
                    <div
                      ref={ref}
                      className={`
                        transition-all duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                        ${
                          inView
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-12"
                        }
                      `}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      {/* --- UNIFIED CARD STYLE (for Mobile and Desktop) --- */}
                      <div
                        className={`
                          group relative overflow-hidden rounded-lg cursor-pointer bg-card
                          shadow-soft hover:shadow-hover
                        `}
                      >
                        {/* Using aspect-square for mobile 2-col grid
                          Using lg:h-96 for desktop 3-col grid
                        */}
                        <div className="relative aspect-square lg:h-96 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none" />
                          
                          {/* Text Container */}
                          <div className="absolute bottom-0 left-0 p-3 md:p-5 text-white w-full">
                            {/* Badge */}
                            {item.type && (
                              <span className="inline-block px-3 py-1 bg-[#62009b]/80 backdrop-blur-sm rounded-full text-xs mb-2">
                                {item.type}
                              </span>
                            )}
                            {/* Title - smaller on mobile, larger on desktop */}
                            <h3 className="font-display text-lg md:text-2xl font-bold drop-shadow-md">
                              {item.title}
                            </h3>
                            
                            {/* --- HOVER BLOCK (for Mobile and Desktop) --- */}
                            <div className="
                              transition-all duration-300 ease-in-out 
                              overflow-hidden max-h-0 opacity-0 
                              group-hover:max-h-40 group-hover:opacity-100 group-hover:pt-2
                            ">
                              {/* Description - hidden on mobile, shown on desktop */}
                              <p className="font-body text-sm text-white/90 mb-2 line-clamp-2 hidden md:block">
                                {item.description}
                              </p>
                              <Link
                                to={`/collection/${item.title.toLowerCase().replace(/ /g, "-")}`}
                                className="inline-flex items-center text-accent hover:text-white font-medium transition-all duration-300 text-sm"
                              >
                                View Details
                                <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                              </Link>
                            </div>
                            {/* --- END HOVER BLOCK --- */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </InView>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Unchanged) */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-[#794299]">
              Interested in a Piece?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
              Contact us to discuss pricing, customization options, or to
              schedule a private viewing of any item in our collection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in your collection`}
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