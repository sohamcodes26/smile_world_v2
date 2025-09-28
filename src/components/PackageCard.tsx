import { motion } from "framer-motion";
import { MapPin, Calendar, Users, Eye, EyeOff } from "lucide-react";
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
  const [isContentVisible, setIsContentVisible] = useState(false);

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
        <div className="relative h-48 mb-4 rounded-2xl overflow-hidden">
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
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
            <p className="text-muted-foreground text-sm">{pkg.shortDescription}</p>
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
              <span>{pkg.availableSeats} seats left</span>
            </div>
          </div>

          {/* Blurred Content Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-foreground">Full Itinerary & Details</h4>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsContentVisible(!isContentVisible);
                }}
                className="flex items-center justify-center px-3 py-1.5 rounded-md text-primary hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
              >
                {isContentVisible ? <EyeOff size={16} /> : <Eye size={16} />}
              </div>
            </div>

            <div className={`space-y-3 transition-all duration-300 relative ${
              !isContentVisible ? "cursor-pointer" : ""
            }`} onClick={() => !isContentVisible && setShowInquiry(true)}>
              {/* Timeline */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-foreground">Day-wise Timeline:</h5>
                <div className="space-y-1">
                  {pkg.timeline.slice(0, 3).map((day) => (
                    <div key={day.day} className="text-xs text-muted-foreground">
                      Day {day.day}: {day.description}
                    </div>
                  ))}
                  {pkg.timeline.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      ...and {pkg.timeline.length - 3} more days
                    </div>
                  )}
                </div>
              </div>

              {/* All Places */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-foreground">All Places Covered:</h5>
                <div className="flex flex-wrap gap-1">
                  {pkg.places.map((place, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                    >
                      {place}
                    </span>
                  ))}
                </div>
              </div>

              {/* Inclusions */}
              <div className="space-y-2">
                <h5 className="text-sm font-medium text-foreground">Inclusions:</h5>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {pkg.inclusions.slice(0, 3).map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
              
              {!isContentVisible && (
                <div className={`absolute inset-0 backdrop-blur-sm rounded-xl pointer-events-none flex items-center justify-center ${
                  !isContentVisible ? "content-blur" : ""
                }`}></div>
              )}
            </div>

            {!isContentVisible && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setShowInquiry(true);
                }}
                className={`w-full px-4 py-2 rounded-md text-sm font-medium text-center cursor-pointer transition-colors ${
                  showPinkTheme 
                    ? "bg-pink-primary hover:bg-pink-primary/90 text-white" 
                    : "bg-primary hover:bg-primary/90 text-primary-foreground"
                }`}
              >
                Request Full Details
              </div>
            )}
          </div>
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