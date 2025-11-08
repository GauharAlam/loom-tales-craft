import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// IMPORTANT: Make sure these image paths are correct in your project!
import washingImg from "@/assets/service-washing.jpg";
import repairImg from "@/assets/service-repair.jpg";
import restorationImg from "@/assets/service-restoration.jpg";
import heroImage from "@/assets/hero-carpet.jpg";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Traditional Carpet Weaving",
      excerpt: "Discover the ancient techniques and craftsmanship that go into creating each masterpiece.",
      image: washingImg,
      date: "March 15, 2024",
      category: "Craftsmanship",
      readTime: "5 min read",
    },
    {
      title: "How to Care for Your Persian Carpet",
      excerpt: "Essential maintenance tips to preserve the beauty and longevity of your precious textiles.",
      image: repairImg,
      date: "March 10, 2024",
      category: "Care Tips",
      readTime: "7 min read",
    },
    {
      title: "Understanding Carpet Restoration",
      excerpt: "A deep dive into the restoration process and how we bring vintage carpets back to life.",
      image: restorationImg,
      date: "March 5, 2024",
      category: "Restoration",
      readTime: "6 min read",
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
            alt="Blog"
            className="w-full h-full object-cover"
          />
          {/* MODIFIED: Gradient is now more transparent for a cleaner image */}
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/50 to-brown/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Stories & Insights
            </h1>
            <p className="font-body text-xl text-white/90 leading-relaxed">
              Explore the art, heritage, and craftsmanship behind every thread.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group flex flex-col bg-card rounded-lg overflow-hidden shadow-soft hover:shadow-hover transition-all duration-300 border border-black/5"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#6a2e8c] rounded-full text-white">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold mb-3 text-foreground group-hover:text-[#794299] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-body text-muted-foreground mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Button
                    variant="link"
                    className="text-[#794299] hover:text-[#62009b] p-0 h-auto justify-start self-start group-hover:gap-2 transition-all mt-auto"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#794299] mb-6">
              Stay Connected
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Subscribe to receive the latest stories, care tips, and exclusive insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg font-body bg-background border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="bg-[#794299] hover:bg-[#62009b] text-white transition-all duration-200 ease-out transform hover:scale-[1.02]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;