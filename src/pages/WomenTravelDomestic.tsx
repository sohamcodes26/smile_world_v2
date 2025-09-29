import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Clock, Star, Heart, ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// Sample domestic women travel packages
const domesticWomenPackages = [
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
    groupSize: '8-12 women'
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
    groupSize: '6-10 women'
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
    groupSize: '10-15 women'
  }
];

export default function WomenTravelDomestic() {
  return (
    <Layout className="pink-theme">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/women" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Women Travel
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              🇮🇳 Women's Domestic Tours
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Explore India safely with fellow women travelers. 
              Specially curated experiences designed for women, by women.
            </p>
            
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span>100% Safe</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Women-Only Groups</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>Expert Female Guides</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Domestic Women Tours */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {domesticWomenPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="package-card group overflow-hidden">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-pink-500">
                        🇮🇳 Domestic
                      </Badge>
                    </div>
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-foreground">
                        <Shield className="w-3 h-3 mr-1" />
                        {pkg.safety}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-foreground">
                        👥 {pkg.groupSize}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{pkg.destination}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">({pkg.rating})</span>
                      </div>
                      <Badge variant="outline" className="text-xs bg-pink-50 text-pink-700">
                        ♀ Women Only
                      </Badge>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Special Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-pink-500 mt-1">💖</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-2 pt-4">
                      <Button className="flex-1" style={{background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'}}>
                        Book Women's Tour
                      </Button>
                      <Button variant="outline" size="icon" className="shrink-0">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Features */}
      <section className="py-16 px-4 bg-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Your Safety is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive safety measures for worry-free domestic travel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Verified Accommodations",
                description: "Pre-screened, women-friendly hotels and resorts with excellent safety records"
              },
              {
                icon: "👩‍🏫",
                title: "Female Tour Guides",
                description: "Experienced female guides who understand women travelers' needs and preferences"
              },
              {
                icon: "🚗",
                title: "Safe Transportation",
                description: "Reliable, well-maintained vehicles with verified drivers and GPS tracking"
              },
              {
                icon: "📱",
                title: "24/7 Support",
                description: "Round-the-clock assistance with dedicated women's helpline support"
              },
              {
                icon: "👥",
                title: "Small Groups",
                description: "Intimate group sizes (6-15 women) for better safety and personalized attention"
              },
              {
                icon: "🏥",
                title: "Medical Support",
                description: "First aid trained guides and tie-ups with local hospitals and clinics"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="info-card group"
              >
                <div className="info-card-icon">{feature.icon}</div>
                <h3 className="info-card-title">{feature.title}</h3>
                <p className="info-card-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What Our Women Travelers Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: "Priya Mehta",
                location: "Mumbai",
                review: "The Rajasthan women's tour was incredible! I felt safe throughout and made amazing friends. The female guide was knowledgeable and caring.",
                rating: 5,
                tour: "Rajasthan Queens Heritage Tour"
              },
              {
                name: "Sneha Patel",
                location: "Bangalore",
                review: "Kerala wellness retreat was exactly what I needed. The yoga sessions and Ayurveda treatments were rejuvenating. Highly recommend for solo women travelers!",
                rating: 5,
                tour: "Kerala Wellness Retreat"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="cloud-card p-6">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.review}"</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {testimonial.tour}
                    </Badge>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}