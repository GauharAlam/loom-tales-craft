import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/hero-carpet.jpg";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Appointment request sent! We'll confirm shortly.");
    setFormData({ name: "", email: "", phone: "", service: "", date: "", time: "", details: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    "General Consultation", "Professional Washing", "Premium Dry Cleaning", "Steam Cleaning Treatment", 
    "Expert Repairing", "Complete Restoration", "Sell & Exchange", "Wall Hanging Care", "Moth & Pest Treatment"
  ];

  const timeSlots = [
    "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM", "12:00 PM - 1:00 PM",
    "2:00 PM - 3:00 PM", "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM", "5:00 PM - 6:00 PM", "6:00 PM - 7:00 PM"
  ];

  return (
    <div className="bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Book an Appointment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brown/60 via-brown/50 to-brown/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Book an Appointment
            </h1>
            <p className="font-body text-xl text-white leading-relaxed">
              Schedule a consultation with our experts to discuss your carpet and shawl care needs.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-elegant border border-black/5">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="font-display text-2xl font-bold text-[#62009b]">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block font-body font-medium mb-2 text-[#794299]">Full Name *</label>
                      <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-body font-medium mb-2 text-[#794299]">Phone Number *</label>
                      <Input id="phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body font-medium mb-2 text-[#794299]">Email Address *</label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="space-y-6 pt-8 border-t border-border">
                  <h2 className="font-display text-2xl font-bold text-[#62009b]">Service Details</h2>
                  <div>
                    <label htmlFor="service" className="block font-body font-medium mb-2 text-[#794299]">Select Service *</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })} required>
                      <SelectTrigger><SelectValue placeholder="Choose a service" /></SelectTrigger>
                      {/* FIXED: Added position="item-aligned" to solve scrollbar issue */}
                      <SelectContent position="item-aligned" className="max-h-72 overflow-y-auto">
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>{service}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block font-body font-medium mb-2 text-[#794299]">Preferred Date *</label>
                      <div className="relative">
                        <Input id="date" name="date" type="date" required value={formData.date} onChange={handleChange} min={new Date().toISOString().split('T')[0]} />
                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="time" className="block font-body font-medium mb-2 text-[#794299]">Preferred Time *</label>
                      <Select value={formData.time} onValueChange={(value) => setFormData({ ...formData, time: value })} required>
                        <SelectTrigger><SelectValue placeholder="Choose a time slot" /></SelectTrigger>
                        {/* FIXED: Added position="item-aligned" to solve scrollbar issue */}
                        <SelectContent position="item-aligned" className="max-h-72 overflow-y-auto">
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="details" className="block font-body font-medium mb-2 text-[#794299]">Additional Details</label>
                    <Textarea id="details" name="details" value={formData.details} onChange={handleChange} placeholder="Tell us about your item, any specific concerns, or questions you have..." rows={5} />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-[#794299] hover:bg-[#62009b] text-white text-lg h-14 transition-all duration-200 ease-out transform hover:scale-[1.02]">
                  Schedule Appointment
                </Button>
                <p className="text-center font-body text-sm text-foreground">
                  We'll confirm your appointment via WhatsApp and email within business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookAppointment;