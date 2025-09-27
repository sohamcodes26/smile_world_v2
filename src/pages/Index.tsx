import { motion } from "framer-motion";
import { MapPin, Heart, Star, Sparkles } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { travelPackages } from "@/data/packages";
import heroTravel from "@/assets/hero-travel.jpg";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroTravel})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-background/40" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                🌍 Smiles World
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-4xl text-foreground/80 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Explore more. Smile wider.
              </motion.p>
            </div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Discover magical destinations with our carefully crafted travel packages. 
              Each journey is designed to create unforgettable memories and bring smiles to your adventures.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild className="btn-travel">
                <Link to="/customize">
                  <Sparkles className="mr-2" size={18} />
                  Customize Your Trip
                </Link>
              </Button>
              <Button asChild className="btn-adventure">
                <Link to="/women">
                  <Heart className="mr-2" size={18} />
                  Women's Safe Travel
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-4xl float-element">☁️</div>
        <div className="absolute top-32 right-16 text-3xl float-element animate-bounce-gentle">✈️</div>
        <div className="absolute bottom-20 left-20 text-2xl float-element">🗺️</div>
        <div className="absolute bottom-32 right-10 text-3xl float-element animate-bounce-gentle">🎒</div>
      </section>

      {/* Featured Packages Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              ✨ Featured Travel Packages
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hand-picked destinations that promise incredible experiences. Click on any blurred section to request detailed information about pricing, itinerary, and availability.
            </p>
          </motion.div>

          {/* Package Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {travelPackages.slice(0, 6).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PackageCard package={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🌟 Why Travel With Us?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Safe & Secure",
                description: "Your safety is our priority. We ensure secure accommodations, reliable transportation, and 24/7 support throughout your journey."
              },
              {
                icon: "👥",
                title: "Expert Guides",
                description: "Local, experienced guides who know the hidden gems and cultural secrets of each destination, making your trip truly authentic."
              },
              {
                icon: "💝",
                title: "Personalized Experience",
                description: "Every package is customizable to your preferences. We create unique experiences that match your travel style and interests."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="cloud-card p-8 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-6xl mb-6 group-hover:animate-bounce-gentle">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cloud-card p-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready for Your Next Adventure? 🚀
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us craft the perfect journey just for you. Share your travel dreams and we'll make them reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="btn-travel text-lg px-8 py-4">
                <Link to="/customize">
                  <MapPin className="mr-2" size={20} />
                  Plan My Trip
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-4 rounded-full">
                <Link to="/contact">
                  <Heart className="mr-2" size={20} />
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}