// destinations img
import tour4 from "../assets/images/tour/kandy.jpg";
import tour5 from "../assets/images/tour/unawatuna.jpg";
import tour6 from "../assets/images/tour/ella.jpg";
import tour7 from "../assets/images/tour/nuwaraeliya.jpg";
import tour8 from "../assets/images/tour/galle.jpg";
import tour9 from "../assets/images/tour/bentota.jpg";
import tour10 from "../assets/images/tour/jaffna.jpg";
import tour11 from "../assets/images/tour/arugambay.jpg";

// populars img
import Sigiriya from "../assets/images/popular/sigiriya.png";
import Yala from "../assets/images/popular/yala.webp";
import Mirissa from "../assets/images/popular/mirissa.jpg";
import Train from "../assets/images/popular/train.jpg";
import Arugambay from "../assets/images/popular/arugambay.jpeg";
import Hikkaduwa from "../assets/images/popular/hikkaduwa.jpg";
import Adam from "../assets/images/popular/adam.jpg";
import Udawalawe from "../assets/images/popular/udawalawe.jpg";

// tour detail img
import image1 from "../assets/images/new/adam.jpg";
import image2 from "../assets/images/new/arugambay.jpeg";
import image3 from "../assets/images/new/hikkaduwa.jpg";
import image4 from "../assets/images/new/mirissa.jpg";

export const destinationsData = [
  {
    id: 0,
    name: "Unawatuna",
    tours: "",
    image: tour5,
    link: "tour-name",
    shortDes: "",
  },
  {
    id: 1,
    name: "Kandy",
    tours: "",
    image: tour4,
    link: "tour-name",
  },

  {
    id: 2,
    name: "Ella",
    tours: "",
    image: tour6,
    link: "tour-name",
  },

  {
    id: 3,
    name: "Nuwara Eliya",
    tours: "",
    image: tour7,
    link: "tour-name",
  },
  {
    id: 4,
    name: "Galle",
    tours: " ",
    image: tour8,
    link: "tour-name",
  },
  {
    id: 5,
    name: "Bentota",
    tours: "",
    image: tour9,
    link: "tour-name",
  },
  {
    id: 6,
    name: "Jaffna",
    tours: "",
    image: tour10,
    link: "tour-name",
  },
  {
    id: 7,
    name: "Arugambay",
    tours: "",
    image: tour11,
    link: "tour-name",
  },
];

export const popularsData = [
  {
    id: 0,
    title: "Safari in Yala National Park",
    image: Yala,
    location: "Yala, Southern Province",
    category: ["Wildlife Safari"],
    days: "1 (Half/Full Day)",
    price: 100,
    afterDiscount: 40,
    rating: 4.8,
    reviews: 1200,
  },
  {
    id: 1,
    title: "Sigiriya Rock Fortress Climb",
    image: Sigiriya,
    location: "Sigiriya, Central Province",
    category: ["Historical Adventure"],
    days: "1 (2-3 hours)",
    price: 30,
    afterDiscount: 25,
    rating: 4.7,
    reviews: 950,
  },
  {
    id: 2,
    title: "Whale Watching in Mirissa",
    image: Mirissa,
    location: "Mirissa, Southern Coast",
    category: ["Marine Wildlife"],
    days: "Half-day (5 AM - 12 PM)",
    price: 80,
    afterDiscount: 50,
    rating: 4.6,
    reviews: 800,
  },
  {
    id: 3,
    title: "Train Ride (Kandy to Ella)",
    image: Train,
    location: "Kandy to Ella",
    category: ["Scenic Journey"],
    days: "1 (6-7 hours)",
    price: 25,
    afterDiscount: 0,
    rating: 4.9,
    reviews: 1500,
  },
  {
    id: 4,
    title: "Surfing in Arugam Bay",
    image: Arugambay,
    location: "Arugam Bay, East Coast",
    category: ["Adventure Sports"],
    days: "1 day",
    price: 50,
    afterDiscount: 15,
    rating: 4.7,
    reviews: 700,
  },
  {
    id: 5,
    title: "Diving in Hikkaduwa",
    image: Hikkaduwa,
    location: "Hikkaduwa, West Coast",
    category: ["Water Sports"],
    days: "1 day",
    price: 90,
    afterDiscount: 50,
    rating: 4.5,
    reviews: 600,
  },
  {
    id: 6,
    title: "Adam’s Peak Sunrise Hike",
    image: Adam,
    location: "Ratnapura/Nuwara Eliya",
    category: ["Trekking"],
    days: "1 day",
    price: 0,
    afterDiscount: 0,
    rating: 4.8,
    reviews: 1000,
  },
  {
    id: 7,
    title: "Udawalawe Elephant Safari",
    image: Udawalawe,
    location: "Udawalawe National Park",
    category: ["Wildlife"],
    days: "Half Day",
    price: 70,
    afterDiscount: 35,
    rating: 4.7,
    reviews: 850,
  },
];

export const tourDetails = {
  id:0,
  title: "Lorem Ipsum is simply dummy",
  des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  price: "100.00",
  rating: " 4.5",
  reviews: "365 reviews",
  tourInfo: [
    '<strong className="font-bold"> Place Covered</strong>: Lorem Ipsum is simply dummy',
    ' <strong className="font-bold">Duration:</strong>Lorem Ipsum is simply dummy',
    '<strong className="font-bold">Start Point:</strong> Lorem Ipsum is simply dummy',
    '<strong className="font-bold">End Point:</strong>  Lorem Ipsum is simply dummy',
  ],

  highlights: [
    " Lorem Ipsum is simply dummy",
    " Lorem Ipsum is simply dummy",
    " Lorem Ipsum is simply dummy",
    " Lorem Ipsum is simply dummy",
  ],

  itinerary: [
    {
      title: `<span class="me-1 fw-bold">Day 1:</span>  Lorem Ipsum is simply dummy `,
      des: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },

    {
      title: `<span class="me-1 fw-bold">Day 2:</span>  Lorem Ipsum is simply dummy `,
      des: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, `,
    },
    {
      title: `<span class="me-1 fw-bold">Day 3:</span>  Lorem Ipsum is simply dummy`,
      des: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 4:</span>  Lorem Ipsum is simply dummy `,
      des: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 5:</span>  Lorem Ipsum is simply dummy `,
      des: ` Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
    {
      title: `<span class="me-1 fw-bold">Day 6:</span> Lorem Ipsum is simply dummy`,
      des: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,`,
    },
  ],

  included: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
  ],
  exclusion: [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  ],

  images: [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image2,
      thumbnail: image2,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image4,
      thumbnail: image4,
    },
  ],
};

export const location = [
  "Yala",
  "Sigiriya",
  "Mirissa",
  "Kandy",
  "Arugam Bay",
  "Hikkaduwa",
  "Nuwaraeliya",
  "Udawalawe",
];

export const Categories = [
  "Wildlife",
  "Historic",
  "Marine",
  "Scenic",
  "Water",
];

export const Duration = ["1-3 Days", "3-5 Days", "5-7 Days", "7-10 Day"];
export const PriceRange = [
  "$ 0 - $50",
  "$ 50 - $ 100",
  "$ 100 - $ 200",
  "$ 200 - ₹ $ 400",
  "$ 400 - ₹ $ 800",
];

export const Ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];