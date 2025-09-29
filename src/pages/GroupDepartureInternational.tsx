import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Clock, Star, Heart, ArrowLeft, Plane } from "lucide-react";
import { groupDepartures } from "@/data/groupDepartures";
import { Link } from "react-router-dom";

export default function GroupDepartureInternational() {
  const internationalDepartures = groupDepartures.filter(d => d.type === 'international');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link to="/group-departure" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Group Departures
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              🌍 International Group Tours
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              Embark on international adventures with like-minded travelers. 
              From exotic beaches to bustling cities, explore the world together!
            </p>
          </motion.div>
        </div>
      </section>

      {/* International Tours Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {internationalDepartures.map((departure, index) => (
              <motion.div
                key={departure.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Card className="package-card group overflow-hidden">
                  <div className="relative">
                    <img
                      src={departure.image}
                      alt={departure.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-blue-500 text-white">
                        <Plane className="w-3 h-3 mr-1" />
                        International
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge variant="outline" className="bg-white/90 text-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        {departure.currentBookings}/{departure.maxCapacity} Booked
                      </Badge>
                    </div>
                    {departure.currentBookings >= departure.maxCapacity * 0.8 && (
                      <div className="absolute top-4 left-4">
                        <Badge variant="destructive" className="animate-pulse">
                          Almost Full!
                        </Badge>
                      </div>
                    )}
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {departure.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{departure.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                        <div className="text-xs text-green-600">✈️ Flights Included</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span className="text-sm">{departure.destination}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span className="text-sm">{departure.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar size={16} />
                        <span>Departs: {new Date(departure.startDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Tour Highlights:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {departure.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Package Includes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {departure.includes.slice(0, 4).map((item, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                        {departure.includes.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{departure.includes.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                        <span>🛂 Visa assistance included</span>
                        <span>💼 Travel insurance recommended</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button className="flex-1 btn-adventure">
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

      {/* Why Choose International Group Travel */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Explore the World Together
            </h2>
            <p className="text-xl text-muted-foreground">
              International group travel made easy with comprehensive support and expert planning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛂",
                title: "Visa Support",
                description: "Complete visa assistance and documentation support for hassle-free travel"
              },
              {
                icon: "✈️",
                title: "Flight Included",
                description: "Round-trip flights, airport transfers, and all transportation included"
              },
              {
                icon: "🏨",
                title: "Premium Stays",
                description: "Carefully selected accommodations in prime locations worldwide"
              },
              {
                icon: "🗣️",
                title: "Language Support",
                description: "Local guides and tour managers who speak your language"
              },
              {
                icon: "💱",
                title: "Currency Exchange",
                description: "Guidance on currency exchange and local payment methods"
              },
              {
                icon: "📞",
                title: "24/7 Support",
                description: "Round-the-clock assistance throughout your international journey"
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

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-foreground">
              Ready for Your International Adventure?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of happy travelers who have explored the world with us. 
              Book your spot today and create memories that last a lifetime!
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="btn-adventure">
                📞 Call for Booking
              </Button>
              <Button size="lg" variant="outline">
                💬 Chat with Expert
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}