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
                color: "text-primary"
              },
              {
                icon: Heart,
                title: "Authentic Experiences",
                description: "We focus on genuine cultural connections and meaningful travel experiences.",
                color: "text-secondary"
              },
              {
                icon: Users,
                title: "Inclusive Travel",
                description: "Creating welcoming spaces for travelers of all backgrounds and comfort levels.",
                color: "text-accent"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Committed to delivering exceptional service and unforgettable memories.",
                color: "text-primary"
              },
              {
                icon: MapPin,
                title: "Sustainable Tourism",
                description: "Supporting local communities while preserving the beauty of our destinations.",
                color: "text-nature"
              },
              {
                icon: Award,
                title: "Trust & Transparency",
                description: "Honest pricing, clear communication, and reliable service you can depend on.",
                color: "text-adventure"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="cloud-card p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <value.icon className={`w-12 h-12 mx-auto mb-4 ${value.color} group-hover:animate-bounce-gentle`} />
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
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
                description: "15+ years of travel experience across 40+ countries. Specializes in adventure and cultural tours."
              },
              {
                name: "Maya Wanderer",
                role: "Women's Travel Specialist",
                emoji: "🌸",
                description: "Expert in women-only travel programs and safety protocols. Passionate about empowering female travelers."
              },
              {
                name: "Arjun Guide",
                role: "Cultural Experience Director",
                emoji: "🎭",
                description: "Local heritage expert with deep knowledge of Indian culture, traditions, and hidden gems."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="cloud-card p-6 text-center group hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="text-6xl mb-4 group-hover:animate-bounce-gentle">
                  {member.emoji}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
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