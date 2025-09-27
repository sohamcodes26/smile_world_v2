import packageBg1 from "@/assets/package-bg-1.jpg";
import packageBg2 from "@/assets/package-bg-2.jpg";

export interface TravelPackage {
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

export const travelPackages: TravelPackage[] = [
  {
    id: "1",
    title: "Golden Triangle Explorer",
    startDate: "15 Dec 2024",
    endDate: "22 Dec 2024",
    places: ["Delhi", "Agra", "Jaipur", "Fatehpur Sikri", "Bharatpur"],
    timeline: [
      { day: 1, description: "Arrival in Delhi, Red Fort & India Gate visit" },
      { day: 2, description: "Delhi sightseeing - Humayun's Tomb, Lotus Temple" },
      { day: 3, description: "Travel to Agra, Taj Mahal sunset visit" },
      { day: 4, description: "Agra Fort, Mehtab Bagh, travel to Jaipur" },
      { day: 5, description: "Amber Fort, City Palace, local markets" },
      { day: 6, description: "Hawa Mahal, Jantar Mantar, departure" }
    ],
    price: 25999,
    availableSeats: 12,
    type: "Culture",
    thumbnail: packageBg1,
    shortDescription: "Discover India's rich heritage through the iconic Golden Triangle circuit.",
    inclusions: [
      "Accommodation in 4-star hotels",
      "All meals (breakfast, lunch, dinner)",
      "AC transportation throughout",
      "Professional tour guide",
      "All monument entry tickets",
      "Airport transfers"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips and gratuities",
      "Optional activities"
    ]
  },
  {
    id: "2",
    title: "Himalayan Adventure Trek",
    startDate: "10 Jan 2025",
    endDate: "18 Jan 2025",
    places: ["Manali", "Kasol", "Tosh", "Malana", "Kheerganga"],
    timeline: [
      { day: 1, description: "Arrival in Manali, acclimatization" },
      { day: 2, description: "Manali local sightseeing, Hadimba Temple" },
      { day: 3, description: "Drive to Kasol, explore Parvati Valley" },
      { day: 4, description: "Trek to Tosh village, mountain views" },
      { day: 5, description: "Malana village visit, ancient culture" },
      { day: 6, description: "Kheerganga trek, hot springs" },
      { day: 7, description: "Return to Manali, leisure day" },
      { day: 8, description: "Departure" }
    ],
    price: 18999,
    availableSeats: 8,
    type: "Adventure",
    thumbnail: packageBg2,
    shortDescription: "Experience the thrill of Himalayan trekking with breathtaking mountain views.",
    inclusions: [
      "Mountain accommodation",
      "All meals during trek",
      "Trekking equipment",
      "Experienced trek guide",
      "First aid support",
      "Transportation from Manali"
    ],
    exclusions: [
      "Travel to/from Manali",
      "Personal trekking gear",
      "Travel insurance",
      "Emergency evacuation",
      "Personal expenses"
    ]
  },
  {
    id: "3",
    title: "Kerala Backwaters Bliss",
    startDate: "05 Feb 2025",
    endDate: "12 Feb 2025",
    places: ["Kochi", "Munnar", "Thekkady", "Alleppey", "Kumarakom"],
    timeline: [
      { day: 1, description: "Arrival in Kochi, Fort Kochi exploration" },
      { day: 2, description: "Drive to Munnar, tea plantation visit" },
      { day: 3, description: "Munnar hill station, Mattupetty Dam" },
      { day: 4, description: "Travel to Thekkady, spice plantation tour" },
      { day: 5, description: "Periyar Wildlife Sanctuary boat ride" },
      { day: 6, description: "Alleppey houseboat experience begins" },
      { day: 7, description: "Kumarakom bird sanctuary, backwater cruise" },
      { day: 8, description: "Return to Kochi, departure" }
    ],
    price: 32999,
    availableSeats: 15,
    type: "Family",
    thumbnail: packageBg1,
    shortDescription: "Relax in Kerala's serene backwaters with luxury houseboat stays.",
    inclusions: [
      "Luxury houseboat accommodation",
      "Resort stays in hills",
      "All meals with Kerala cuisine",
      "AC transportation",
      "Boat rides and cruises",
      "Wildlife sanctuary tickets"
    ],
    exclusions: [
      "Flights to/from Kochi",
      "Travel insurance",
      "Ayurvedic treatments",
      "Personal expenses",
      "Optional activities"
    ]
  },
  {
    id: "4",
    title: "Women's Safe Haven - Goa Retreat",
    startDate: "20 Feb 2025",
    endDate: "25 Feb 2025",
    places: ["North Goa", "South Goa", "Old Goa", "Panaji"],
    timeline: [
      { day: 1, description: "Arrival, women-only resort check-in, welcome dinner" },
      { day: 2, description: "Beach yoga, spa treatments, Baga Beach" },
      { day: 3, description: "Cultural tour - Old Goa churches, local markets" },
      { day: 4, description: "Adventure activities, sunset cruise" },
      { day: 5, description: "Relaxation day, shopping, departure" }
    ],
    price: 22999,
    availableSeats: 10,
    type: "Women Only",
    thumbnail: packageBg2,
    shortDescription: "A safe, empowering retreat designed exclusively for women travelers.",
    inclusions: [
      "Women-only resort accommodation",
      "Female tour guides throughout",
      "Spa and wellness sessions",
      "All meals and beverages",
      "Safe transportation",
      "24/7 support helpline"
    ],
    exclusions: [
      "Flights to/from Goa",
      "Travel insurance",
      "Personal shopping",
      "Additional spa treatments",
      "Optional water sports"
    ]
  },
  {
    id: "5",
    title: "Rajasthan Royal Heritage",
    startDate: "12 Mar 2025",
    endDate: "22 Mar 2025",
    places: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer", "Pushkar"],
    timeline: [
      { day: 1, description: "Arrival in Jaipur, City Palace visit" },
      { day: 2, description: "Amber Fort, Hawa Mahal, local bazaars" },
      { day: 3, description: "Travel to Jodhpur, Mehrangarh Fort" },
      { day: 4, description: "Blue City tour, travel to Jaisalmer" },
      { day: 5, description: "Golden Fort, Thar Desert camel safari" },
      { day: 6, description: "Desert camping, cultural performances" },
      { day: 7, description: "Travel to Udaipur, City of Lakes" },
      { day: 8, description: "Lake Pichola boat ride, palace visits" },
      { day: 9, description: "Pushkar holy city, Brahma Temple" },
      { day: 10, description: "Return to Jaipur, departure" }
    ],
    price: 45999,
    availableSeats: 6,
    type: "Culture",
    thumbnail: packageBg1,
    shortDescription: "Experience the grandeur of Rajasthan's palaces, forts, and desert landscapes.",
    inclusions: [
      "Heritage hotel stays",
      "Palace and fort visits",
      "Desert safari with camping",
      "Cultural performances",
      "All meals with Rajasthani cuisine",
      "AC transportation"
    ],
    exclusions: [
      "International flights",
      "Travel insurance",
      "Shopping expenses",
      "Tips and gratuities",
      "Optional activities"
    ]
  },
  {
    id: "6",
    title: "Women Entrepreneurs Retreat - Rishikesh",
    startDate: "28 Mar 2025",
    endDate: "02 Apr 2025",
    places: ["Rishikesh", "Haridwar", "Dehradun"],
    timeline: [
      { day: 1, description: "Arrival, yoga session, networking dinner" },
      { day: 2, description: "Morning meditation, business workshops" },
      { day: 3, description: "River rafting, team building activities" },
      { day: 4, description: "Spiritual tour, Ganga Aarti ceremony" },
      { day: 5, description: "Final workshop session, departure" }
    ],
    price: 19999,
    availableSeats: 12,
    type: "Women Only",
    thumbnail: packageBg2,
    shortDescription: "Combine spiritual wellness with professional networking in the yoga capital.",
    inclusions: [
      "Ashram accommodation",
      "Daily yoga and meditation",
      "Business networking sessions",
      "All vegetarian meals",
      "Workshop materials",
      "Spiritual tour guide"
    ],
    exclusions: [
      "Travel to/from Rishikesh",
      "Personal expenses",
      "Additional workshops",
      "Shopping",
      "Travel insurance"
    ]
  }
];

export const womenPackages = travelPackages.filter(pkg => pkg.type === "Women Only");