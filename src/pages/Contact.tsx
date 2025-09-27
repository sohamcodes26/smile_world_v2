import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully! 🌟",
      description: "We'll get back to you within 24 hours. Thank you for reaching out!",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              💌 Get In Touch
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our travel packages? Need help planning your perfect trip? 
              We're here to help you every step of the way!
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div className="cloud-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                  <MessageCircle className="mr-3 text-primary" size={24} />
                  Let's Connect
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Call Us</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat: 9 AM - 8 PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email Us</h3>
                      <p className="text-muted-foreground">hello@smilesworld.com</p>
                      <p className="text-sm text-muted-foreground">We reply within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Visit Us</h3>
                      <p className="text-muted-foreground">123 Travel Street<br />Mumbai, Maharashtra 400001</p>
                      <p className="text-sm text-muted-foreground">By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="cloud-card p-8">
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Clock className="mr-3 text-primary" size={20} />
                  Quick Help
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Package Inquiries:</span>
                    <span className="text-foreground font-medium">Instant</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Custom Itinerary:</span>
                    <span className="text-foreground font-medium">24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Booking Support:</span>
                    <span className="text-foreground font-medium">2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Emergency Support:</span>
                    <span className="text-foreground font-medium">Immediate</span>
                  </div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="cloud-card p-8 text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Join Our Community</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Over 5,000 happy travelers have chosen Smiles World for their adventures
                </p>
                <div className="flex justify-center space-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">4.9/5 average rating</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="cloud-card p-8 md:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Send us a message 📝
                </h2>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible. 
                  For urgent inquiries, please call us directly.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a subject</option>
                    <option value="package-inquiry">Package Inquiry</option>
                    <option value="custom-trip">Custom Trip Planning</option>
                    <option value="women-travel">Women's Travel Programs</option>
                    <option value="booking-support">Booking Support</option>
                    <option value="feedback">Feedback & Suggestions</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                    className="rounded-xl min-h-32"
                    rows={6}
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-travel text-lg py-4"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                      />
                    ) : (
                      <Send size={20} className="mr-3" />
                    )}
                    {isSubmitting ? "Sending Message..." : "Send Message"}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    We typically respond within 24 hours. For urgent matters, 
                    please call us at +91 98765 43210
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-muted/30 to-accent/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">
              ❓ Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our travel services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How far in advance should I book?",
                answer: "We recommend booking 4-6 weeks in advance for domestic trips and 8-12 weeks for international travel to get the best rates and availability."
              },
              {
                question: "Are your women-only trips really safe?",
                answer: "Absolutely! Our women-only trips feature female guides, vetted accommodations, small group sizes, and 24/7 support specifically designed for women's safety."
              },
              {
                question: "Can you customize existing packages?",
                answer: "Yes! All our packages can be customized based on your preferences, budget, dates, and special requirements. Just let us know what you'd like to change."
              },
              {
                question: "What's included in package prices?",
                answer: "Package prices typically include accommodation, meals as specified, transportation, guided tours, and entry tickets. International flights are usually excluded."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="cloud-card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-foreground mb-3 flex items-start">
                  <Heart className="mr-2 text-primary flex-shrink-0 mt-1" size={18} />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}