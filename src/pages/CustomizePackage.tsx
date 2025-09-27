import { motion } from "framer-motion";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, MapPin, Users, CreditCard, Sparkles, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CustomizePackage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    budget: "",
    travelers: "2",
    travelStyle: "",
    accommodation: "",
    interests: "",
    specialRequests: "",
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Customization Request Sent! 🎉",
      description: "Our travel experts will create a personalized itinerary for you within 24 hours.",
    });

    setIsSubmitting(false);
    // Reset form or redirect as needed
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
              ✨ Customize Your Dream Trip
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your travel dreams and we'll craft the perfect journey just for you. 
              Every detail will be personalized to match your preferences and style.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="cloud-card p-8 md:p-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Travel Preferences */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Travel Preferences</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Preferred Destination *</Label>
                    <Input
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Kerala, Rajasthan, Himalayas..."
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelers">Number of Travelers *</Label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"].map(num => (
                        <option key={num} value={num}>{num} {typeof num === 'number' && num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="startDate">Preferred Start Date</Label>
                    <Input
                      id="startDate"
                      name="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="endDate">Preferred End Date</Label>
                    <Input
                      id="endDate"
                      name="endDate"
                      type="date"
                      value={formData.endDate}
                      onChange={handleChange}
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Budget & Style */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <CreditCard className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Budget & Style</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range (INR) *</Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="15000-25000">₹15,000 - ₹25,000</option>
                      <option value="25000-50000">₹25,000 - ₹50,000</option>
                      <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                      <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                      <option value="200000+">₹2,00,000+</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelStyle">Travel Style</Label>
                    <select
                      id="travelStyle"
                      name="travelStyle"
                      value={formData.travelStyle}
                      onChange={handleChange}
                      className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select Style</option>
                      <option value="luxury">Luxury & Comfort</option>
                      <option value="adventure">Adventure & Thrill</option>
                      <option value="cultural">Cultural & Heritage</option>
                      <option value="relaxation">Relaxation & Wellness</option>
                      <option value="family">Family Friendly</option>
                      <option value="budget">Budget Conscious</option>
                    </select>
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="accommodation">Accommodation Preference</Label>
                    <select
                      id="accommodation"
                      name="accommodation"
                      value={formData.accommodation}
                      onChange={handleChange}
                      className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select Preference</option>
                      <option value="hotels">Hotels (3-5 Star)</option>
                      <option value="resorts">Beach/Hill Resorts</option>
                      <option value="heritage">Heritage Properties</option>
                      <option value="homestays">Homestays & Local Experience</option>
                      <option value="glamping">Glamping & Unique Stays</option>
                      <option value="budget">Budget Accommodations</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Interests & Requests */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Sparkles className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Your Interests</h2>
                </div>

                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="interests">What interests you most? *</Label>
                    <Textarea
                      id="interests"
                      name="interests"
                      value={formData.interests}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Historical monuments, Adventure sports, Local cuisine, Photography, Wildlife, Spiritual experiences, Art & crafts..."
                      className="rounded-xl"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests">Special Requests or Requirements</Label>
                    <Textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      placeholder="Dietary restrictions, accessibility needs, celebration occasions, photography sessions, specific activities..."
                      className="rounded-xl"
                      rows={3}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="text-primary" size={24} />
                  <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
                </div>

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

                  <div className="space-y-2 md:col-span-2">
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
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-8">
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
                  {isSubmitting ? "Creating Your Custom Package..." : "Create My Custom Package"}
                </Button>

                <p className="text-center text-sm text-muted-foreground mt-4">
                  Our travel experts will review your preferences and send you a personalized 
                  itinerary within 24 hours. No commitment required!
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}