import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Clock, Star, Heart, ArrowLeft, Shield, Plane } from "lucide-react";
import { Link } from "react-router-dom";

// Sample international women travel packages
const internationalWomenPackages = [
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
    includes: ['Flights', 'Visa support', 'Insurance']
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
    includes: ['Flights', 'Luxury hotels', 'All meals']
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
    includes: ['Flights', 'Hotels', 'Island tours']
  },
  {
    id: 'wi-4',
    title: 'Singapore Shopping Extravaganza',
    destination: 'Singapore',
    duration: '4 Days 3 Nights',
    price: '₹75,999',
    image: '/placeholder.svg',
    highlights: ['Orchard Road shopping', 'Gardens by the Bay', 'Food tours', 'Marina Bay experience'],
    rating: 4.6,
    safety: 'Super Safe',
    groupSize: '8-14 women',
    includes: ['Flights', 'City hotels', 'Shopping vouchers']
  }
];

export default function WomenTravelInternational() {
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
              🌍 Women's International Adventures
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Explore the world safely with fellow women adventurers. 
              International tours designed with women's safety, comfort, and interests in mind.
            </p>
            
            <div className="flex justify-center flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                <Shield className="w-4 h-4" />
                <span>Visa Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>Women-Only Groups</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                <Plane className="w-4 h-4" />
                <span>Flights Included</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full">
                <Star className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* International Women Tours */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {internationalWomenPackages.map((pkg, index) => (
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
                      <Badge variant="secondary" className="bg-blue-500 text-white">
                        <Plane className="w-3 h-3 mr-1" />
                        International
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
                    <div className="absolute bottom-4 right-4">
                      <Badge variant="outline" className="bg-pink-500 text-white">
                        ♀ Women Only
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                        <div className="text-xs text-green-600">✈️ All Inclusive</div>
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

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(pkg.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        <span className="text-sm text-muted-foreground ml-1">({pkg.rating})</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {pkg.includes.map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-blue-50 text-blue-700">
                            ✈️ {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Special Women's Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {pkg.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-pink-500 mt-1">💖</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                        <span>🛂 Visa assistance</span>
                        <span>🏥 Travel insurance</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1" style={{background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'}}>
                          Book International Tour
                        </Button>
                        <Button variant="outline" size="icon" className="shrink-0">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* International Safety Features */}
      <section className="py-16 px-4 bg-pink-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              International Travel Made Safe & Easy
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for worry-free international adventures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛂",
                title: "Complete Visa Support",
                description: "End-to-end visa assistance, documentation help, and embassy coordination"
              },
              {
                icon: "✈️",
                title: "Premium Flight Experience",
                description: "Carefully selected airlines with good safety records and women-friendly policies"
              },
              {
                icon: "🏨",
                title: "Verified Accommodations",
                description: "Women-safe hotels in prime locations with excellent security and reviews"
              },
              {
                icon: "📱",
                title: "Global Connectivity",
                description: "International SIM cards, WiFi access, and 24/7 communication support"
              },
              {
                icon: "🗣️",
                title: "Language Assistance",
                description: "Local female guides and translators who understand women's needs"
              },
              {
                icon: "🚨",
                title: "Emergency Support",
                description: "Embassy contacts, medical assistance, and emergency evacuation coverage"
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

      {/* Popular Destinations */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Popular International Destinations for Women
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { country: "Dubai, UAE", emoji: "🏙️", reason: "Ultra-safe, luxury shopping" },
              { country: "Singapore", emoji: "🌸", reason: "Clean, safe, food paradise" },
              { country: "Bali, Indonesia", emoji: "🏝️", reason: "Spiritual, wellness-focused" },
              { country: "Thailand", emoji: "🏖️", reason: "Beautiful beaches, culture" },
              { country: "Malaysia", emoji: "🏛️", reason: "Diverse culture, great food" },
              { country: "Japan", emoji: "🗾", reason: "Safe, unique experiences" },
              { country: "South Korea", emoji: "🏯", reason: "K-culture, beauty tourism" },
              { country: "Nepal", emoji: "🏔️", reason: "Spiritual journeys, nature" }
            ].map((dest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-6 cloud-card hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{dest.emoji}</div>
                <h3 className="font-bold text-foreground mb-2">{dest.country}</h3>
                <p className="text-sm text-muted-foreground">{dest.reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Ready to Explore the World Safely?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of confident women who have traveled internationally with us. 
              Your dream destination awaits!
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" style={{background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)'}}>
                📞 Call Women's Travel Expert
              </Button>
              <Button size="lg" variant="outline">
                💬 Join Women's Travel Community
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}