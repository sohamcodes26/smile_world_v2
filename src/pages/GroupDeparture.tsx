import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { PackageCard } from "@/components/PackageCard";
import { Button } from "@/components/ui/button";
import { MapPin, Plane } from "lucide-react";
import { groupDepartures } from "@/data/groupDepartures";
import { useState } from "react";

export default function GroupDeparture() {
  const [selectedType, setSelectedType] = useState<'domestic' | 'international'>('domestic');
  
  const filteredDepartures = groupDepartures.filter(departure => departure.type === selectedType);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground">
              Group Departures
            </h1>
            <p className="text-sm sm:text-base md:text-2xl text-muted-foreground max-w-4xl mx-auto px-4">
              Join fellow travelers on our carefully curated group tours. 
              Make new friends while exploring incredible destinations together!
            </p>
            
            {/* Package Type Selection */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 px-4">
              <Button 
                size="lg" 
                onClick={() => setSelectedType('domestic')}
                className={`w-full sm:w-auto transition-all duration-300 ${
                  selectedType === 'domestic' 
                    ? 'btn-travel' 
                    : 'bg-white/90 text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <MapPin className="mr-2 h-5 w-5" />
                Domestic Tours
              </Button>
              <Button 
                size="lg" 
                onClick={() => setSelectedType('international')}
                className={`w-full sm:w-auto transition-all duration-300 ${
                  selectedType === 'international' 
                    ? 'btn-travel' 
                    : 'bg-white/90 text-primary hover:bg-primary hover:text-primary-foreground'
                }`}
              >
                <Plane className="mr-2 h-5 w-5" />
                International Tours
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Group Departure Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              {selectedType === 'domestic' ? 'Domestic Group Tours' : 'International Group Tours'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              {selectedType === 'domestic' 
                ? 'Explore India together with fellow travelers' 
                : 'International adventures with group support and guidance'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDepartures.map((departure, index) => (
              <motion.div
                key={departure.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <PackageCard 
                  package={{
                    id: departure.id,
                    title: departure.title,
                    startDate: new Date(departure.startDate).toLocaleDateString(),
                    endDate: new Date(departure.endDate).toLocaleDateString(),
                    places: [departure.destination],
                    timeline: [
                      { day: 1, description: 'Departure and journey begins' },
                      { day: 2, description: 'Group activities and sightseeing' },
                      { day: 3, description: 'Exploration and cultural experiences' }
                    ],
                    price: parseInt(departure.price.replace(/[^0-9]/g, '')),
                    availableSeats: departure.maxCapacity - departure.currentBookings,
                    type: departure.type === 'domestic' ? 'Family' : 'Adventure',
                    thumbnail: departure.image,
                    shortDescription: `${departure.duration} group travel experience`,
                    inclusions: ['Accommodation', 'Meals', 'Transportation', 'Group activities'],
                    exclusions: ['Personal expenses', 'Travel insurance']
                  }}
                  showPinkTheme={false}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Group Travel */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Group Travel?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👫",
                title: "Make New Friends",
                description: "Connect with like-minded travelers and create lasting friendships"
              },
              {
                icon: "💰",
                title: "Better Value",
                description: "Enjoy competitive prices with group discounts and shared costs"
              },
              {
                icon: "🛡️",
                title: "Safety & Support",
                description: "Travel with confidence knowing you have support and companionship"
              },
              {
                icon: "📋",
                title: "Hassle-Free Planning",
                description: "Leave the planning to us while you focus on enjoying your trip"
              },
              {
                icon: "🏛️",
                title: "Expert Guides",
                description: "Learn from experienced local guides who know the best spots"
              },
              {
                icon: "🎊",
                title: "Shared Experiences",
                description: "Share magical moments and create memories together"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="info-card group"
              >
                <div className="info-card-icon">{benefit.icon}</div>
                <h3 className="info-card-title">{benefit.title}</h3>
                <p className="info-card-description">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}