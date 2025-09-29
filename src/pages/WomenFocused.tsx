import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import heroWomen from "@/assets/hero-women.jpg";
import { Link } from "react-router-dom";
import { MapPin, Sparkles, Plane, Users, Shield, Star, Heart } from "lucide-react";
import { useState } from "react";

// Sample women travel packages data
const womenTravelPackages = [
  // Domestic packages
  {
    id: 'wd-1',
    title: 'Rajasthan Queens Heritage Tour',
    destination: 'Jaipur - Udaipur - Jodhpur',
    duration: '7 Days 6 Nights',
    price: '₹35,999',
    image: '/placeholder.svg',
    highlights: ['Women-only group', 'Female guides', 'Safe accommodations', 'Cultural workshops'],
    rating: 4.9,
    safety: 'Maximum Safety',
    groupSize: '8-12 women',
    type: 'domestic' as const,
    includes: ['Accommodation', 'All meals', 'Transportation', 'Female guide']
  },
  {
    id: 'wd-2',
    title: 'Kerala Wellness Retreat',
    destination: 'Munnar - Alleppey - Kochi',
    duration: '6 Days 5 Nights',
    price: '₹42,999',
    image: '/placeholder.svg',
    highlights: ['Ayurveda treatments', 'Yoga sessions', 'Cooking classes', 'Nature walks'],
    rating: 4.8,
    safety: 'Women-Friendly',
    groupSize: '6-10 women',
    type: 'domestic' as const,
    includes: ['Resort stays', 'Spa treatments', 'All meals', 'Yoga sessions']
  },
  {
    id: 'wd-3',
    title: 'Himachal Adventure for Women',
    destination: 'Manali - Dharamshala - Dalhousie',
    duration: '8 Days 7 Nights',
    price: '₹38,999',
    image: '/placeholder.svg',
    highlights: ['Mountain trekking', 'Adventure activities', 'Bonfire evenings', 'Photography workshops'],
    rating: 4.7,
    safety: 'Adventure Safe',
    groupSize: '10-15 women',
    type: 'domestic' as const,
    includes: ['Mountain lodges', 'Adventure gear', 'All meals', 'Guide']
  },
  // International packages
  {
    id: 'wi-1',
    title: 'Bali Sisterhood Retreat',
    destination: 'Bali, Indonesia',
    duration: '7 Days 6 Nights',
    price: '₹95,999',
    image: '/placeholder.svg',
    highlights: ['Beach yoga sessions', 'Cultural immersion', 'Spa treatments', 'Female-only activities'],
    rating: 4.9,
    safety: 'Ultra Safe',
    groupSize: '8-12 women',
    type: 'international' as const,
    includes: ['Flights', 'Visa support', 'Beach resorts', 'Spa treatments']
  },
  {
    id: 'wi-2',
    title: 'Dubai Ladies Special',
    destination: 'Dubai, UAE',
    duration: '5 Days 4 Nights',
    price: '₹89,999',
    image: '/placeholder.svg',
    highlights: ['Ladies-only shopping tours', 'Desert safari', 'Luxury spa day', 'High tea experiences'],
    rating: 4.8,
    safety: 'Maximum Safety',
    groupSize: '10-15 women',
    type: 'international' as const,
    includes: ['Flights', 'Luxury hotels', 'All meals', 'Shopping tours']
  },
  {
    id: 'wi-3',
    title: 'Thailand Girls Trip',
    destination: 'Bangkok - Phuket',
    duration: '8 Days 7 Nights',
    price: '₹1,15,999',
    image: '/placeholder.svg',
    highlights: ['Island hopping', 'Thai cooking classes', 'Massage workshops', 'Beach relaxation'],
    rating: 4.7,
    safety: 'Women-Friendly',
    groupSize: '12-18 women',
    type: 'international' as const,
    includes: ['Flights', 'Hotels', 'Island tours', 'Cooking classes']
  }
];

export default function WomenFocused() {
  const [selectedType, setSelectedType] = useState<'domestic' | 'international'>('domestic');
  
  const filteredPackages = womenTravelPackages.filter(pkg => pkg.type === selectedType);
  return (
    <Layout className="pink-theme">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroWomen})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-pink-accent/20 to-pink-secondary/40" />
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
                className="text-2xl sm:text-4xl md:text-7xl font-bold text-foreground"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                Women's Safe Haven
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-xl md:text-4xl text-foreground/80 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Travel with confidence. Connect with sisterhood.
              </motion.p>
            </div>
            
            <motion.p 
              className="text-sm sm:text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Exclusively designed travel experiences for women, by women. 
              Every journey prioritizes safety, empowerment, and creating lasting friendships 
              with fellow female travelers.
            </motion.p>
            
            {/* Package Type Selection */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={() => setSelectedType('domestic')}
                className={`w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                  selectedType === 'domestic' 
                    ? 'bg-pink-primary hover:bg-pink-primary/90 text-white' 
                    : 'bg-white/90 text-pink-primary hover:bg-pink-primary hover:text-white'
                }`}
              >
                <MapPin className="mr-2" size={18} />
                Domestic Tours
              </Button>
              <Button 
                onClick={() => setSelectedType('international')}
                className={`w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
                  selectedType === 'international' 
                    ? 'bg-pink-primary hover:bg-pink-primary/90 text-white' 
                    : 'bg-white/90 text-pink-primary hover:bg-pink-primary hover:text-white'
                }`}
              >
                <Plane className="mr-2" size={18} />
                International Tours
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex justify-center pt-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button asChild variant="outline" className="w-full sm:w-auto rounded-full px-6 sm:px-8 py-3 border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white">
                <Link to="/customize">
                  <Sparkles className="mr-2" size={18} />
                  Customize My Journey
                </Link>
              </Button>
            </motion.div>
            

          </motion.div>
        </div>


      </section>

      {/* Women Travel Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedType === 'domestic' ? 'Domestic Women Tours' : 'International Women Tours'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {selectedType === 'domestic' 
                ? 'Explore India safely with fellow women travelers' 
                : 'International adventures designed for women\'s safety and comfort'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <PackageCard 
                  package={{
                    id: pkg.id,
                    title: pkg.title,
                    startDate: '20 Feb 2025',
                    endDate: '25 Feb 2025',
                    places: pkg.destination.split(' - '),
                    timeline: [
                      { day: 1, description: 'Arrival and welcome ceremony' },
                      { day: 2, description: 'City tour and cultural experiences' },
                      { day: 3, description: 'Adventure activities and sightseeing' }
                    ],
                    price: parseInt(pkg.price.replace(/[^0-9]/g, '')),
                    availableSeats: 10,
                    type: 'Women Only' as const,
                    thumbnail: pkg.image,
                    shortDescription: `${pkg.duration} women-only travel experience`,
                    inclusions: pkg.includes || ['Accommodation', 'Meals', 'Transportation', 'Guide'],
                    exclusions: ['Personal expenses', 'Travel insurance']
                  }}
                  showPinkTheme={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Women-Only Travel */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Women-Only Travel?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Experience the freedom, safety, and empowerment that comes with traveling 
              in a supportive community of like-minded women.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Enhanced Safety",
                description: "Women-only groups, female guides, and carefully vetted accommodations ensure your security throughout the journey.",
                decoration: "💪"
              },
              {
                icon: "👭", 
                title: "Sisterhood Bonds",
                description: "Connect with amazing women from diverse backgrounds and create lifelong friendships that extend beyond travel.",
                decoration: "💕"
              },
              {
                icon: "🦋",
                title: "Personal Growth",
                description: "Step out of your comfort zone in a supportive environment that encourages confidence and self-discovery.",
                decoration: "🌸"
              },
              {
                icon: "🌟",
                title: "Authentic Experiences", 
                description: "Access unique cultural experiences and perspectives that are often more open to women-only groups.",
                decoration: "✨"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="info-card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Whimsical floating decoration */}
                <div className="decorative-element -top-2 -right-2 text-xl" 
                     style={{ 
                       animationDelay: `${index * 0.5}s`,
                       filter: 'hue-rotate(320deg) saturate(1.5)'
                     }}>
                  {benefit.decoration}
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="info-card-icon whimsical-hover text-5xl" 
                       style={{ filter: 'hue-rotate(320deg) saturate(1.2)' }}>
                    {benefit.icon}
                  </div>
                  <h3 className="info-card-title text-xl" 
                      style={{ color: 'hsl(var(--pink-primary))' }}>
                    {benefit.title}
                  </h3>
                  <div className="info-card-description flex-grow">
                    <p className="text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
                
                {/* Pink-themed glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-4 bg-gradient-to-r from-pink-primary/10 to-pink-secondary/10 rounded-2xl blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Safety Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              🔐 Your Safety, Our Priority
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive safety measures designed specifically for women travelers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Female-Only Groups",
                description: "Travel exclusively with other women in small, carefully curated groups of 8-12 participants.",
                color: "text-pink-primary",
                emoji: "👭",
                decoration: "💕"
              },
              {
                icon: Shield,
                title: "Vetted Accommodations", 
                description: "Women-friendly hotels and resorts with enhanced security measures and female staff availability.",
                color: "text-pink-primary",
                emoji: "🏨",
                decoration: "🛡️"
              },
              {
                icon: Star,
                title: "24/7 Support",
                description: "Round-the-clock support hotline staffed by women who understand the unique needs of female travelers.",
                color: "text-pink-primary", 
                emoji: "📞",
                decoration: "🌙"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="info-card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Whimsical floating decoration */}
                <div className="decorative-element -top-3 -right-3 text-2xl"
                     style={{ 
                       animationDelay: `${index * 0.7}s`,
                       filter: 'hue-rotate(320deg) saturate(1.5)'
                     }}>
                  {feature.decoration}
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <feature.icon className={`w-16 h-16 ${feature.color} group-hover:animate-bounce-gentle whimsical-hover`} />
                      <div className="absolute -top-2 -right-2 text-2xl" 
                           style={{ filter: 'hue-rotate(320deg) saturate(1.2)' }}>
                        {feature.emoji}
                      </div>
                    </div>
                  </div>
                  <h3 className="info-card-title text-xl" 
                      style={{ color: 'hsl(var(--pink-primary))' }}>
                    {feature.title}
                  </h3>
                  <div className="info-card-description flex-grow">
                    <p className="leading-relaxed">{feature.description}</p>
                  </div>
                </div>
                
                {/* Pink-themed glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-4 bg-gradient-to-r from-pink-primary/10 to-pink-secondary/10 rounded-2xl blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gradient-to-r from-pink-accent/20 to-pink-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              💬 What Our Sisters Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Sharma",
                location: "Mumbai",
                text: "Traveling with Smiles World's women-only group gave me the confidence to explore places I never thought I could visit alone. The sisterhood formed during our Goa retreat is something I'll cherish forever.",
                emoji: "🌟"
              },
              {
                name: "Anjali Patel",
                location: "Delhi",
                text: "As a first-time solo traveler, the Rishikesh women's retreat was perfect. I felt safe, supported, and came back feeling empowered and with amazing new friends from across India.",
                emoji: "🦋"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="cloud-card p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-4xl mb-4">{testimonial.emoji}</div>
                <p className="text-muted-foreground mb-4 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center space-x-2">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
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
              Ready to Join Our Sisterhood? 💕
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take the first step towards empowering travel experiences. 
              Connect with amazing women and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-pink-primary hover:bg-pink-primary/90 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                <Heart className="mr-2" size={20} />
                Join Women's Travel Group
              </Button>
              <Button asChild variant="outline" className="text-lg px-8 py-4 rounded-full border-pink-primary text-pink-primary hover:bg-pink-primary hover:text-white">
                <Link to="/contact">
                  <MapPin className="mr-2" size={20} />
                  Ask Questions
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}