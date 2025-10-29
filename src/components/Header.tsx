import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/collection", label: "Collection" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/faqs", label: "FAQs" },
    { path: "/contact", label: "Contact" },
  ];

  const whatsappNumber = "+911234567890";
  
  const pagesWithHero = ['/', '/about', '/blog', '/collection', '/services', '/faqs', '/contact', '/book-appointment'];
  const hasHeroImage = pagesWithHero.includes(location.pathname);

  const isTransparent = hasHeroImage && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-fade-in-down ${
        isTransparent
          ? "bg-transparent"
          // ✅ CHANGED: Updated the background and border color for the scrolled state
          : "bg-[#43305d]/95 backdrop-blur-sm border-b border-white/20 shadow-lg"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 group">
            <h1
              className={`font-display text-3xl font-bold transition-colors group-hover:text-white/80 ${
                isTransparent
                  ? "text-white drop-shadow-lg animate-text-flicker"
                  // ✅ CHANGED: Text color to contrast with the new dark purple background
                  : "text-white" 
              }`}
            >
              Loom Tales
            </h1>
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 font-body font-medium transition-all duration-300 group opacity-0 animate-fade-in-down ${
                  isActive(link.path)
                    // ✅ CHANGED: Text color for active link on scrolled header
                    ? "text-white"
                    : isTransparent
                    ? "text-white hover:text-white/80"
                    // ✅ CHANGED: Text color for inactive link on scrolled header
                    : "text-gray-300 hover:text-white"
                }`}
                style={{ animationDelay: `${150 * (index + 2)}ms` }}
              >
                {link.label}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 transform origin-left 
                    transition-transform duration-300 ease-in-out
                    ${isActive(link.path) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"} 
                    // ✅ CHANGED: Underline color to be white for both states
                    bg-white`
                  }
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="
                relative overflow-hidden
                bg-gradient-to-b from-[#c18c5d] to-[#8b5a36] text-[#2c1a0f]
                font-serif tracking-wider text-[1.1rem] border-0 rounded-lg
                px-6 h-12 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:from-[#b97b4c] hover:to-[#75482a] hover:shadow-[0_6px_20px_rgba(0,0,0,0.6)]
                hover:text-white 
                opacity-0 animate-fade-in-down"
              style={{ animationDelay: '1200ms' }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 z-10 relative transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Phone className="w-4 h-4 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                WhatsApp
              </a>
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="
                relative overflow-hidden
                bg-gradient-to-b from-[#c18c5d] to-[#8b5a36] text-[#2c1a0f]
                font-serif tracking-wider text-[1rem] border-0 rounded-lg
                px-4 h-12 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_1px_2px_rgba(255,255,255,0.2)]
                transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
                hover:from-[#b97b4c] hover:to-[#75482a] hover:text-white
                after:absolute after:inset-0 after:rounded-lg after:shadow-[0_0_20px_4px_rgba(255,200,150,0.6)]
                after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100
                opacity-0 animate-fade-in-down"
              style={{ animationDelay: '1300ms' }}
            >
              <a
                href={`/book-appointment`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 z-10 relative transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Phone className="w-4 h-4 transition-colors duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" />
                Book Now
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80 drop-shadow-lg"
                // ✅ CHANGED: Hamburger menu icon color on scrolled header
                : "text-white hover:text-gray-300"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          // ✅ CHANGED: Mobile menu background color
          <nav className="lg:hidden py-4 bg-[#5A386D]/95 backdrop-blur-sm animate-fade-in-down">
            <div className="flex flex-col space-y-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md font-body font-medium transition-all ${
                    isActive(link.path)
                      // ✅ CHANGED: Active link style in mobile menu
                      ? "bg-white/10 text-white"
                      // ✅ CHANGED: Inactive link style in mobile menu
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;