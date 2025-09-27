import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { Heart, Users, MapPin, Award, Shield, Star } from "lucide-react";

export default function About() {
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
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About Smiles World 🌍
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto">
              We believe travel is more than just visiting places – it's about creating 
              connections, discovering cultures, and collecting smiles along the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-foreground">Our Story 📖</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded with a simple belief that every journey should bring joy, 
                  Smiles World started as a small team of passionate travelers who 
                  wanted to share the magic of exploration with others.
                </p>
                <p>
                  What began as weekend adventures with friends has grown into a 
                  trusted travel community that has helped thousands of travelers 
                  create unforgettable memories across incredible destinations.
                </p>
                <p>
                  Today, we're not just a travel company – we're your travel 
                  companions, ensuring every step of your journey is safe, 
                  comfortable, and filled with genuine smiles.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="cloud-card p-8 text-center"
            >
              <div className="text-8xl mb-6">🌏</div>
              <h3 className="text-3xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-xl text-muted-foreground">
                To make travel accessible, safe, and joyful for everyone, 
                especially empowering women to explore the world with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values ✨
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide every journey we create
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "Your security and well-being are our top priority in every destination we visit.",
                color: "text-primary",
                emoji: "🛡️"
              },
              {
                icon: Heart,
                title: "Authentic Experiences", 
                description: "We focus on genuine cultural connections and meaningful travel experiences.",
                color: "text-secondary",
                emoji: "💝"
              },
              {
                icon: Users,
                title: "Inclusive Travel",
                description: "Creating welcoming spaces for travelers of all backgrounds and comfort levels.",
                color: "text-accent",
                emoji: "🤝"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Committed to delivering exceptional service and unforgettable memories.",
                color: "text-primary",
                emoji: "⭐"
              },
              {
                icon: MapPin,
                title: "Sustainable Tourism",
                description: "Supporting local communities while preserving the beauty of our destinations.",
                color: "text-nature",
                emoji: "🌱"
              },
              {
                icon: Award,
                title: "Trust & Transparency",
                description: "Honest pricing, clear communication, and reliable service you can depend on.",
                color: "text-adventure",
                emoji: "🏆"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="info-card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Whimsical floating decoration */}
                <div className="decorative-element -top-2 -right-2 text-xl">
                  {value.emoji}
                </div>
                
                <div className="flex flex-col h-full">
                  <value.icon className={`w-16 h-16 mx-auto mb-6 ${value.color} group-hover:animate-bounce-gentle whimsical-hover`} />
                  <h3 className="info-card-title text-xl">
                    {value.title}
                  </h3>
                  <div className="info-card-description flex-grow">
                    <p>{value.description}</p>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Meet Our Team 👥
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate travelers dedicated to making your journey extraordinary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Adventure",
                role: "Founder & Lead Explorer",
                emoji: "🧭",
                description: "15+ years of travel experience across 40+ countries. Specializes in adventure and cultural tours.",
                decoration: "✈️"
              },
              {
                name: "Maya Wanderer", 
                role: "Women's Travel Specialist",
                emoji: "🌸",
                description: "Expert in women-only travel programs and safety protocols. Passionate about empowering female travelers.",
                decoration: "💕"
              },
              {
                name: "Arjun Guide",
                role: "Cultural Experience Director", 
                emoji: "🎭",
                description: "Local heritage expert with deep knowledge of Indian culture, traditions, and hidden gems.",
                decoration: "🏛️"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="info-card group relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                {/* Whimsical floating decoration */}
                <div className="decorative-element -top-3 -right-3 text-2xl">
                  {member.decoration}
                </div>
                
                <div className="flex flex-col h-full">
                  <div className="info-card-icon whimsical-hover">
                    {member.emoji}
                  </div>
                  <h3 className="info-card-title text-xl">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4 text-sm">
                    {member.role}
                  </p>
                  <div className="info-card-description flex-grow">
                    <p className="text-xs">{member.description}</p>
                  </div>
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Journey in Numbers 📊
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "5000+", label: "Happy Travelers", emoji: "😊" },
              { number: "150+", label: "Destinations", emoji: "🗺️" },
              { number: "500+", label: "Successful Trips", emoji: "✈️" },
              { number: "98%", label: "Satisfaction Rate", emoji: "⭐" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}