import { motion } from "framer-motion";
import { MapPin, Calendar, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { InquiryModal } from "./InquiryModal";

interface TravelPackage {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  places: string[];
  timeline: { day: number; description: string }[];
  price: number;
  availableSeats: number;
  type: "Family" | "Adventure" | "Women Only" | "Culture";
  thumbnail: string;
  shortDescription: string;
  inclusions: string[];
  exclusions: string[];
}

interface PackageCardProps {
  package: TravelPackage;
  showPinkTheme?: boolean;
}

export function PackageCard({ package: pkg, showPinkTheme = false }: PackageCardProps) {
  const [showInquiry, setShowInquiry] = useState(false);

  const visiblePlaces = pkg.places.slice(0, 2);
  const hiddenPlacesCount = pkg.places.length - 2;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="package-card group"
      >
        {/* Thumbnail */}
        <div className="relative h-48 mb-3 rounded-2xl overflow-hidden">
          <img
            src={pkg.thumbnail}
            alt={pkg.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              showPinkTheme
                ? "bg-pink-primary text-white"
                : pkg.type === "Adventure"
                ? "bg-adventure text-white"
                : pkg.type === "Culture"
                ? "bg-culture text-white"
                : "bg-nature text-white"
            }`}>
              {pkg.type}
            </span>
          </div>
        </div>

        {/* Package Info */}
        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-1">{pkg.title}</h3>
            <p className="text-muted-foreground text-sm line-clamp-2">{pkg.shortDescription}</p>
          </div>

          {/* Dates */}
          <div className="flex items-center space-x-2 text-sm">
            <Calendar size={16} className="text-primary" />
            <span>{pkg.startDate} - {pkg.endDate}</span>
          </div>

          {/* Places */}
          <div className="flex items-start space-x-2 text-sm">
            <MapPin size={16} className="text-primary mt-0.5" />
            <div>
              <span>{visiblePlaces.join(", ")}</span>
              {hiddenPlacesCount > 0 && (
                <span className="text-muted-foreground">
                  {" "}and {hiddenPlacesCount} more places
                </span>
              )}
            </div>
          </div>

          {/* Price & Seats */}
          <div className="flex justify-between items-center">
            <div className="text-lg font-bold text-primary">₹{pkg.price.toLocaleString()}</div>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Users size={14} />
              <span>{pkg.availableSeats} seats</span>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-2">
            <div>
              <h4 className="font-medium text-foreground text-sm">Full Itinerary & Details</h4>
            </div>

            <div className="space-y-1 transition-all duration-300 relative">
              {/* Timeline */}
              <div className="space-y-1">
                <div className="text-xs text-muted-foreground">
                  Day 1: {pkg.timeline[0]?.description || 'Journey begins'}
                </div>
                {/* Hidden content with backdrop blur */}
                <div className="relative">
                  <div className="text-xs text-muted-foreground space-y-1 select-none pointer-events-none">
                    <div>Day 2: Explore local attractions and cultural experiences</div>
                    <div>Day 3: Adventure activities and scenic tours</div>
                    <div>Day 4: Cultural immersion and local cuisine</div>
                    <div>Day 5: Final exploration and departure</div>
                  </div>
                  {/* Backdrop blur overlay - only covers Day 2 onwards */}
                  <div className="absolute inset-0 backdrop-blur-sm rounded-xl pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Button at very bottom */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInquiry(true);
            }}
            className={`w-full px-4 py-2 rounded-md text-sm font-medium text-center cursor-pointer transition-colors z-10 relative ${
              showPinkTheme 
                ? "bg-pink-primary hover:bg-pink-primary/90 text-white" 
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
            type="button"
          >
            Request Full Details
          </button>
        </div>
      </motion.div>

      <InquiryModal
        isOpen={showInquiry}
        onClose={() => setShowInquiry(false)}
        packageTitle={pkg.title}
        showPinkTheme={showPinkTheme}
      />
    </>
  );
}