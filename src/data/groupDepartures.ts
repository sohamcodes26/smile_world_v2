// Group departure packages data
export interface GroupDeparture {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  startDate: string;
  endDate: string;
  maxCapacity: number;
  currentBookings: number;
  image: string;
  highlights: string[];
  includes: string[];
  itinerary: string[];
  type: 'domestic' | 'international';
}

export const groupDepartures: GroupDeparture[] = [
  // Domestic Group Departures
  {
    id: 'gd-dom-1',
    title: 'Golden Triangle Explorer',
    destination: 'Delhi - Agra - Jaipur',
    duration: '6 Days 5 Nights',
    price: '₹25,999',
    startDate: '2024-12-15',
    endDate: '2024-12-20',
    maxCapacity: 20,
    currentBookings: 15,
    image: '/placeholder.svg',
    type: 'domestic',
    highlights: [
      'Visit the iconic Taj Mahal',
      'Explore the majestic Red Fort',
      'Experience the Pink City of Jaipur',
      'Traditional Rajasthani dinner'
    ],
    includes: [
      'Accommodation in 4-star hotels',
      'All meals',
      'Transportation',
      'Professional guide',
      'Entry tickets'
    ],
    itinerary: [
      'Day 1: Arrival in Delhi - City tour',
      'Day 2: Delhi to Agra - Taj Mahal visit',
      'Day 3: Agra to Jaipur via Fatehpur Sikri',
      'Day 4: Jaipur city tour - Amber Fort',
      'Day 5: Jaipur local sightseeing',
      'Day 6: Return to Delhi - Departure'
    ]
  },
  {
    id: 'gd-dom-2',
    title: 'Kerala Backwaters & Hills',
    destination: 'Kochi - Munnar - Alleppey',
    duration: '7 Days 6 Nights',
    price: '₹32,999',
    startDate: '2024-11-20',
    endDate: '2024-11-26',
    maxCapacity: 16,
    currentBookings: 12,
    image: '/placeholder.svg',
    type: 'domestic',
    highlights: [
      'Houseboat stay in Alleppey',
      'Tea plantation tours in Munnar',
      'Spice garden visits',
      'Traditional Kathakali performance'
    ],
    includes: [
      'Houseboat accommodation',
      'Resort stays',
      'All meals',
      'Airport transfers',
      'Sightseeing tours'
    ],
    itinerary: [
      'Day 1: Arrival in Kochi',
      'Day 2: Kochi to Munnar',
      'Day 3: Munnar sightseeing',
      'Day 4: Munnar to Alleppey',
      'Day 5: Backwater cruise',
      'Day 6: Alleppey to Kochi',
      'Day 7: Departure'
    ]
  },

  // International Group Departures
  {
    id: 'gd-int-1',
    title: 'Dubai Extravaganza',
    destination: 'Dubai, UAE',
    duration: '5 Days 4 Nights',
    price: '₹89,999',
    startDate: '2024-12-10',
    endDate: '2024-12-14',
    maxCapacity: 25,
    currentBookings: 18,
    image: '/placeholder.svg',
    type: 'international',
    highlights: [
      'Burj Khalifa observation deck',
      'Desert safari with BBQ dinner',
      'Dubai Mall shopping experience',
      'Dhow cruise with dinner'
    ],
    includes: [
      '4-star hotel accommodation',
      'Daily breakfast',
      'Return flights',
      'Visa assistance',
      'City tours'
    ],
    itinerary: [
      'Day 1: Arrival - Dubai city tour',
      'Day 2: Desert safari adventure',
      'Day 3: Burj Khalifa & Dubai Mall',
      'Day 4: Dhow cruise & free time',
      'Day 5: Departure'
    ]
  },
  {
    id: 'gd-int-2',
    title: 'Thailand Paradise',
    destination: 'Bangkok - Pattaya - Phuket',
    duration: '8 Days 7 Nights',
    price: '₹1,25,999',
    startDate: '2024-11-25',
    endDate: '2024-12-02',
    maxCapacity: 20,
    currentBookings: 8,
    image: '/placeholder.svg',
    type: 'international',
    highlights: [
      'Phi Phi Island tour',
      'Bangkok temple visits',
      'Pattaya beach activities',
      'Traditional Thai massage'
    ],
    includes: [
      'Beach resort stays',
      'All meals',
      'International flights',
      'Visa on arrival',
      'Island hopping tours'
    ],
    itinerary: [
      'Day 1: Arrival in Bangkok',
      'Day 2: Bangkok city & temple tour',
      'Day 3: Bangkok to Pattaya',
      'Day 4: Pattaya beach & activities',
      'Day 5: Pattaya to Phuket',
      'Day 6: Phi Phi Island tour',
      'Day 7: Phuket local sightseeing',
      'Day 8: Departure'
    ]
  }
];

// Blog posts data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: '10 Essential Tips for First-Time Solo Female Travelers',
    excerpt: 'Discover the key strategies and safety tips that will make your first solo adventure both safe and unforgettable.',
    content: `
      Solo travel as a woman can be one of the most empowering experiences of your life. Here are our top 10 tips to help you navigate your journey with confidence...

      1. Research Your Destination Thoroughly
      Before you go, learn about local customs, dress codes, and cultural norms. Understanding the local culture will help you blend in and show respect for the places you visit.

      2. Choose Your Accommodation Wisely
      Opt for well-reviewed hotels or hostels in safe neighborhoods. Consider women-only accommodations if available, and always read recent reviews from other female travelers.

      3. Pack Smart and Light
      Bring versatile clothing that respects local customs while keeping you comfortable. A good rule is to pack items you can mix and match easily.

      4. Stay Connected
      Share your itinerary with family or friends, and check in regularly. Consider getting a local SIM card or international roaming plan.

      5. Trust Your Instincts
      If something doesn't feel right, remove yourself from the situation. Your intuition is your best travel companion.
    `,
    author: 'Priya Sharma',
    publishDate: '2024-10-15',
    category: 'Solo Travel',
    tags: ['solo travel', 'women safety', 'travel tips', 'first time'],
    image: '/placeholder.svg',
    readTime: '8 min read'
  },
  {
    id: 'blog-2',
    title: 'Hidden Gems of Rajasthan: Beyond the Golden Triangle',
    excerpt: 'Explore the lesser-known treasures of Rajasthan that offer authentic experiences away from the tourist crowds.',
    content: `
      While the Golden Triangle offers incredible experiences, Rajasthan has so much more to offer beyond Delhi, Agra, and Jaipur...

      Bundi: The Blue City's Hidden Cousin
      Often overshadowed by Jodhpur, Bundi offers stunning architecture, beautiful step wells, and a more authentic local experience.

      Shekhawati: The Open Art Gallery
      This region is famous for its painted havelis and is often called the world's largest open-air art gallery.

      Mount Abu: Rajasthan's Only Hill Station
      Escape the desert heat in this cool hill station, home to the famous Dilwara Jain temples.
    `,
    author: 'Rajesh Kumar',
    publishDate: '2024-10-10',
    category: 'Destinations',
    tags: ['rajasthan', 'hidden gems', 'india travel', 'culture'],
    image: '/placeholder.svg',
    readTime: '6 min read'
  },
  {
    id: 'blog-3',
    title: 'Sustainable Travel: How to Explore Responsibly',
    excerpt: 'Learn how to minimize your environmental impact while maximizing your travel experiences with these eco-friendly tips.',
    content: `
      Sustainable travel is more important than ever. Here's how you can explore the world while being mindful of your environmental impact...

      Choose Eco-Friendly Accommodations
      Look for hotels and lodges that have green certifications and implement sustainable practices.

      Support Local Communities
      Buy from local artisans, eat at family-owned restaurants, and choose locally-operated tour companies.

      Minimize Plastic Use
      Carry a reusable water bottle, shopping bag, and avoid single-use plastics whenever possible.

      Respect Wildlife and Nature
      Maintain safe distances from animals, don't touch coral reefs, and follow Leave No Trace principles.
    `,
    author: 'Dr. Meera Patel',
    publishDate: '2024-10-05',
    category: 'Sustainable Travel',
    tags: ['eco travel', 'sustainability', 'responsible tourism', 'environment'],
    image: '/placeholder.svg',
    readTime: '7 min read'
  },
  {
    id: 'blog-4',
    title: 'Group Travel Etiquette: Making the Most of Your Journey Together',
    excerpt: 'Essential dos and don\'ts for group travelers to ensure everyone has an amazing and harmonious trip.',
    content: `
      Traveling in a group can create lifelong memories, but it requires consideration and planning. Here's how to ensure everyone has a great time...

      Communicate Expectations Early
      Discuss budgets, activity preferences, and accommodation standards before booking anything.

      Be Flexible and Compromise
      Not everyone will want to do the same things. Be open to trying new activities and compromising on plans.

      Respect Personal Space
      Even in a group, people need downtime. Don't take it personally if someone wants to explore alone for a bit.

      Share Responsibilities
      Rotate who handles navigation, restaurant research, or other planning tasks to avoid burnout.
    `,
    author: 'Amit Gupta',
    publishDate: '2024-09-28',
    category: 'Group Travel',
    tags: ['group travel', 'travel tips', 'planning', 'etiquette'],
    image: '/placeholder.svg',
    readTime: '5 min read'
  }
];