import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle?: string;
  showPinkTheme?: boolean;
}

export function InquiryModal({ isOpen, onClose, packageTitle, showPinkTheme = false }: InquiryModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Inquiry Sent! 🌟",
      description: "We'll get back to you within 24 hours with detailed information.",
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", travelers: "2", notes: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="cloud-card max-w-md w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className={`text-2xl font-bold ${showPinkTheme ? "text-pink-primary" : "text-primary"}`}>
                    Get Full Details
                  </h2>
                  {packageTitle && (
                    <p className="text-sm text-muted-foreground mt-1">
                      For: {packageTitle}
                    </p>
                  )}
                </div>
                <Button variant="ghost" size="sm" onClick={onClose}>
                  <X size={20} />
                </Button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
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

                <div className="space-y-2">
                  <Label htmlFor="travelers">Number of Travelers</Label>
                  <select
                    id="travelers"
                    name="travelers"
                    value={formData.travelers}
                    onChange={handleChange}
                    className="w-full p-3 border border-input bg-background rounded-xl focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Special Requests (Optional)</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any special requirements, dietary preferences, accessibility needs, etc."
                    className="rounded-xl"
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-xl ${showPinkTheme ? "bg-pink-primary hover:bg-pink-primary/90" : ""}`}
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-xs text-muted-foreground">
                We'll respond within 24 hours with complete package details,
                availability, and pricing information.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}