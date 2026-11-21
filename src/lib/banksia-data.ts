/* ------------------------------------------------------------------ */
/*  Banksia Table — demonstration content                              */
/*  All menu items, prices, hours and events are fictional demo data.  */
/* ------------------------------------------------------------------ */

export type Dietary = "V" | "VG" | "GF";

export const DIETARY_LABELS: Record<Dietary, string> = {
  V: "Vegetarian",
  VG: "Vegan",
  GF: "Gluten Free",
};

export interface MenuItem {
  name: string;
  price: string;
  description: string;
  dietary: Dietary[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  tagline: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    tagline: "Slow mornings, served daily from 8:00 AM",
    items: [
      {
        name: "Smashed Avocado Toast",
        price: "$19",
        description:
          "Toasted sourdough, smashed avocado, whipped feta, poached egg and a touch of chilli oil.",
        dietary: ["V"],
        image: "/images/menu-avocado.jpg",
      },
      {
        name: "Ricotta Hotcakes",
        price: "$22",
        description:
          "A stack of fluffy hotcakes with whipped ricotta, macerated berries and honey butter.",
        dietary: ["V"],
        image: "/images/dish-hotcakes.jpg",
      },
      {
        name: "Classic Eggs on Toast",
        price: "$17",
        description:
          "Poached free-range eggs on wood-fired sourdough with herb butter and greens.",
        dietary: [],
      },
      {
        name: "Mushroom Toast",
        price: "$21",
        description:
          "Wild mushrooms sautéed with thyme on sourdough, finished with whipped ricotta.",
        dietary: ["V"],
      },
      {
        name: "Granola and Seasonal Fruit",
        price: "$16",
        description:
          "House granola with coconut yoghurt and fresh seasonal Victorian fruit.",
        dietary: ["VG", "GF"],
      },
    ],
  },
  {
    id: "small-plates",
    label: "Small Plates",
    tagline: "Made for sharing, from the kitchen and hearth",
    items: [
      {
        name: "Crispy Calamari",
        price: "$18",
        description:
          "Salt and pepper calamari with lemon and house-made aioli.",
        dietary: [],
        image: "/images/gallery-plate.jpg",
      },
      {
        name: "Grilled Halloumi",
        price: "$17",
        description:
          "Grilled halloumi with roasted capsicum, olive relish and herbs.",
        dietary: ["V", "GF"],
      },
      {
        name: "Roast Pumpkin Salad",
        price: "$19",
        description:
          "Roast pumpkin, rocket, whipped feta, toasted seeds and citrus dressing.",
        dietary: ["VG", "GF"],
        image: "/images/menu-pumpkin.jpg",
      },
      {
        name: "Charred Garlic Bread",
        price: "$12",
        description:
          "Charred sourdough with garlic butter and native sea salt.",
        dietary: ["V"],
      },
    ],
  },
  {
    id: "mains",
    label: "Main Courses",
    tagline: "Seasonal produce, cooked over fire and patience",
    items: [
      {
        name: "Grilled Barramundi",
        price: "$32",
        description:
          "Australian barramundi with lemon myrtle butter and seasonal greens.",
        dietary: ["GF"],
        image: "/images/dish-barramundi.jpg",
      },
      {
        name: "Slow-Cooked Beef Brisket",
        price: "$34",
        description:
          "Slow-cooked brisket with charred onion, root vegetables and rich jus.",
        dietary: ["GF"],
        image: "/images/dish-brisket.jpg",
      },
      {
        name: "Wild Mushroom Risotto",
        price: "$27",
        description:
          "Creamy arborio rice with wild mushrooms, parmesan and thyme.",
        dietary: ["V", "GF"],
        image: "/images/menu-risotto.jpg",
      },
      {
        name: "Herb-Roasted Chicken",
        price: "$29",
        description:
          "Roasted chicken with native herbs, roasted lemon and pan juices.",
        dietary: ["GF"],
      },
      {
        name: "Seasonal Vegetable Plate",
        price: "$25",
        description:
          "Market vegetables, wholesome grains and a bright green sauce.",
        dietary: ["VG", "GF"],
      },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    tagline: "A sweet finish, worth lingering for",
    items: [
      {
        name: "Classic Pavlova",
        price: "$15",
        description:
          "Crisp meringue, whipped cream, passionfruit and seasonal berries.",
        dietary: ["V", "GF"],
        image: "/images/dish-pavlova.jpg",
      },
      {
        name: "Chocolate Brownie",
        price: "$14",
        description:
          "Warm chocolate brownie with vanilla bean ice cream.",
        dietary: ["V"],
      },
      {
        name: "Seasonal Fruit Tart",
        price: "$15",
        description:
          "Vanilla custard tart topped with fresh seasonal fruit.",
        dietary: ["V"],
        image: "/images/menu-dessert.jpg",
      },
    ],
  },
  {
    id: "drinks",
    label: "Drinks",
    tagline: "Coffee brewed with care, all day long",
    items: [
      {
        name: "Flat White",
        price: "$5.50",
        description: "Double shot of espresso with silky steamed milk.",
        dietary: [],
        image: "/images/menu-coffee.jpg",
      },
      {
        name: "Cappuccino",
        price: "$5.50",
        description: "Double shot with frothed milk and a dusting of cocoa.",
        dietary: [],
      },
      {
        name: "Long Black",
        price: "$5",
        description: "Double shot poured over hot water.",
        dietary: [],
      },
      {
        name: "Fresh Orange Juice",
        price: "$7",
        description: "Freshly pressed, served over ice.",
        dietary: ["VG", "GF"],
      },
      {
        name: "Iced Coffee",
        price: "$7",
        description: "Chilled coffee with milk over ice.",
        dietary: [],
      },
    ],
  },
];

export interface FeaturedDish {
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
}

export const FEATURED_DISHES: FeaturedDish[] = [
  {
    name: "Grilled Barramundi",
    price: "$32",
    description:
      "A signature plate of Australian barramundi, lemon myrtle butter and seasonal greens.",
    image: "/images/dish-barramundi.jpg",
    category: "Main Courses",
  },
  {
    name: "Slow-Cooked Beef Brisket",
    price: "$34",
    description:
      "Tender slow-cooked brisket with charred onion, root vegetables and a rich jus.",
    image: "/images/dish-brisket.jpg",
    category: "Main Courses",
  },
  {
    name: "Ricotta Hotcakes",
    price: "$22",
    description:
      "Fluffy hotcakes stacked with whipped ricotta, macerated berries and honey butter.",
    image: "/images/dish-hotcakes.jpg",
    category: "Breakfast",
  },
  {
    name: "Classic Pavlova",
    price: "$15",
    description:
      "Crisp meringue, whipped cream, passionfruit and seasonal berries — an Australian classic.",
    image: "/images/dish-pavlova.jpg",
    category: "Desserts",
  },
];

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  span?: "wide" | "tall";
}

export const GALLERY: GalleryImage[] = [
  {
    src: "/images/gallery-room.jpg",
    alt: "Warm timber dining room at Banksia Table",
    caption: "The dining room",
    span: "wide",
  },
  {
    src: "/images/gallery-table.jpg",
    alt: "Candlelit tables set for dinner service",
    caption: "Evenings, candlelit",
  },
  {
    src: "/images/gallery-plate.jpg",
    alt: "A plated dish served at the table",
    caption: "From the kitchen",
  },
  {
    src: "/images/menu-coffee.jpg",
    alt: "Flat white coffee with latte art",
    caption: "Coffee, all day",
  },
  {
    src: "/images/gallery-group.jpg",
    alt: "Friends sharing a meal and toasting together",
    caption: "Good company",
    span: "tall",
  },
  {
    src: "/images/gallery-chef.jpg",
    alt: "Chef finishing a dish by hand",
    caption: "Finished by hand",
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Corner of the restaurant with warm terracotta tones",
    caption: "A quieter corner",
  },
];

export interface WhatsOnEvent {
  title: string;
  schedule: string;
  description: string;
}

export const WHATS_ON: WhatsOnEvent[] = [
  {
    title: "Sunday Long Table Lunch",
    schedule: "Sundays · 12:00 PM – 3:00 PM",
    description:
      "A relaxed long-table gathering celebrating seasonal produce, shared plates and good company.",
  },
  {
    title: "Wine & Wander Thursdays",
    schedule: "Thursdays · From 5:30 PM",
    description:
      "An easy evening of Australian wines by the glass, matched with small plates from the hearth.",
  },
  {
    title: "Seasonal Menu Launch",
    schedule: "Each new season",
    description:
      "A refreshed set menu inspired by the markets of Victoria — announced here first.",
  },
];

export interface EventCard {
  title: string;
  description: string;
  image?: string;
}

export const EVENT_CARDS: EventCard[] = [
  {
    title: "Birthday Celebrations",
    description:
      "Gather your favourite people around one long table, with dessert and sparkling on arrival.",
  },
  {
    title: "Corporate Dining",
    description:
      "Business breakfasts, working lunches and client dinners in a refined, easy setting.",
  },
  {
    title: "Family Gatherings",
    description:
      "Generous plates and a welcoming room for milestones, reunions and weekend lunches.",
  },
  {
    title: "Private Events",
    description:
      "Take the room for yourself — tailored menus and dedicated hosts for private occasions.",
  },
];

export interface Faq {
  question: string;
  answer: string;
}

export const FAQS: Faq[] = [
  {
    question: "Where is Banksia Table located?",
    answer:
      "Banksia Table is located in Fitzroy, Melbourne, Victoria, Australia — a neighbourhood celebrated for its dining culture. Full location details and our planned map integration can be found in the Visit Us section below.",
  },
  {
    question: "What type of food do you serve?",
    answer:
      "We serve modern Australian cuisine — seasonal produce, contemporary flavours and a relaxed approach to dining. Explore our menu for breakfast, small plates, main courses, desserts and drinks.",
  },
  {
    question: "Can I make a table reservation?",
    answer:
      "Yes. Use the reservation form in the Booking section of this website to send us your preferred date, time and number of guests. This is a demonstration form — your request is confirmed only within this concept website.",
  },
  {
    question: "Do you cater for private events?",
    answer:
      "We would love to host your gathering. Our Private Dining section covers birthdays, corporate dining, family gatherings and private events. Send an enquiry through the contact form and select “Private Events”.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "Our demonstration hours are: Monday closed; Tuesday to Friday 8:00 AM – 9:00 PM; Saturday 9:00 AM – 10:00 PM; and Sunday 9:00 AM – 4:00 PM.",
  },
  {
    question: "Can I enquire about dietary requirements?",
    answer:
      "Absolutely. Our menu carries simple dietary labels for vegetarian, vegan and gluten-free dishes, and our team is always happy to help. Please share any dietary needs with us when ordering or in your booking request.",
  },
  {
    question: "How can I contact the restaurant?",
    answer:
      "Call (03) 5550 1234 or +61 3 5550 1234 from overseas, or email hello@banksiatable.example. You can also send a message using the enquiry form in the Contact section.",
  },
];

export const HOURS = [
  { day: "Monday", time: "Closed", closed: true },
  { day: "Tuesday – Friday", time: "8:00 AM – 9:00 PM", closed: false },
  { day: "Saturday", time: "9:00 AM – 10:00 PM", closed: false },
  { day: "Sunday", time: "9:00 AM – 4:00 PM", closed: false },
];

export const CONTACT = {
  name: "Banksia Table",
  tagline: "Modern Australian Kitchen",
  location: "Fitzroy, Melbourne, Victoria, Australia",
  phone: "(03) 5550 1234",
  phoneIntl: "+61 3 5550 1234",
  email: "hello@banksiatable.example",
  website: "www.banksiatable.example",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "What's On", href: "#whats-on" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Contact", href: "#contact" },
];
