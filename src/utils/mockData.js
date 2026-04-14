// utils/mockData.js

// ============================================
// MOCK VEHICLE DATASET – CAR DEALERSHIP PROJECT
// ============================================

export const cars = [
  {
    id: 1,
    make: "Mercedes-Benz",
    model: "C-Class AMG",
    trim: "C 63 S E Performance",
    year: 2024,
    price: 65000,
    msrp: 68000,
    mileage: 1200,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "2.0L Turbo I4 + Electric Motor",
    horsepower: 671,
    exteriorColor: "Spectral Blue Magno",
    interiorColor: "Black Nappa Leather",
    vin: "W1KAF8HB7PR123456",
    stock: "MB2401",
    location: "Main Showroom",
    description:
      "Brand new 2024 Mercedes-AMG C 63 S E Performance. Combining electrified power with iconic AMG performance. 0-60 in 3.3 seconds with F1-derived hybrid technology.",
    features: [
      "AMG Night Package",
      "Panoramic Sunroof",
      "Burmester 3D Surround Sound",
      "Head-Up Display",
      "AMG Track Pace",
      "Wireless Charging",
      "360° Camera",
    ],
    images: {
      primary: "/car-1.avif",
      gallery: [
        "/car-2.jpg",
       "/car-3.jpg",
       "/car-4.jpg",
      ],
    },
    badge: {
      text: "New Arrival",
      variant: "primary", // primary, secondary, success, danger, warning
    },
    isSold: false,
    isCertifiedPreOwned: false,
  },
  {
    id: 2,
    make: "BMW",
    model: "M4 Competition",
    trim: "M xDrive",
    year: 2023,
    price: 78000,
    msrp: 82500,
    mileage: 5400,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "3.0L Twin-Turbo I6",
    horsepower: 503,
    exteriorColor: "Isle of Man Green",
    interiorColor: "Silverstone/Black Merino Leather",
    vin: "WBS43AZ05PCL45678",
    stock: "BMW2315",
    location: "Main Showroom",
    description:
      "Nearly new 2023 BMW M4 Competition xDrive. Impeccable condition with all service records. A true driver's car with everyday usability.",
    features: [
      "M Carbon Exterior Package",
      "M Driver's Package",
      "Carbon Fiber Trim",
      "Harmon Kardon Surround Sound",
      "Executive Package",
      "Parking Assistant Plus",
      "Ventilated Seats",
    ],
    images: {
      primary: "/car-4.jpg",
      gallery: [
       "/car-5.webp",
       "/car-6.webp",
      
      ],
    },
    badge: {
      text: "Best Seller",
      variant: "secondary",
    },
    isSold: false,
    isCertifiedPreOwned: true,
  },
  {
    id: 3,
    make: "Tesla",
    model: "Model S",
    trim: "Plaid",
    year: 2024,
    price: 92000,
    msrp: 89990,
    mileage: 100,
    mileageUnit: "miles",
    fuel: "Electric",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "Tri Motor Electric",
    horsepower: 1020,
    exteriorColor: "Ultra Red",
    interiorColor: "Black and White Premium",
    vin: "5YJSA1E68PF123789",
    stock: "TS2402",
    location: "EV Center",
    description:
      "2024 Tesla Model S Plaid – the quickest production car in the world. 0-60 mph in 1.99 seconds. Full Self-Driving capability included.",
    features: [
      "Full Self-Driving Capability",
      "22\" Arachnid Wheels",
      "Premium Connectivity",
      "Tri-Zone Climate Control",
      "HEPA Air Filtration",
      "Yoke Steering",
      "17\" Cinematic Display",
    ],
    images: {
      primary: "/car-7.webp",
      gallery: [
       
      ],
    },
    badge: {
      text: "Eco Friendly",
      variant: "success",
    },
    isSold: false,
    isCertifiedPreOwned: false,
  },
  {
    id: 4,
    make: "Porsche",
    model: "911",
    trim: "Carrera GTS",
    year: 2022,
    price: 115000,
    msrp: 122000,
    mileage: 8900,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Manual",
    drivetrain: "RWD",
    engine: "3.0L Twin-Turbo Flat-6",
    horsepower: 473,
    exteriorColor: "GT Silver Metallic",
    interiorColor: "Bordeaux Red Leather",
    vin: "WP0AB2A98NS456123",
    stock: "PC2210",
    location: "Premium Collection",
    description:
      "Immaculate 2022 Porsche 911 Carrera GTS with a 7-speed manual transmission. The perfect balance of analog driving pleasure and modern performance.",
    features: [
      "Sport Chrono Package",
      "PASM Sport Suspension",
      "Rear-Axle Steering",
      "Bose Surround Sound",
      "18-way Adaptive Sport Seats",
      "Carbon Fiber Interior Package",
      "Premium Package",
    ],
    images: {
      primary: "/car-8.jpg",
      gallery: [
    "/car-9.jpg",
   
      ],
    },
    badge: null,
    isSold: false,
    isCertifiedPreOwned: true,
  },
  {
    id: 5,
    make: "Audi",
    model: "RS e-tron GT",
    trim: "Performance",
    year: 2024,
    price: 105000,
    msrp: 108900,
    mileage: 500,
    mileageUnit: "miles",
    fuel: "Electric",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "Dual Motor Electric",
    horsepower: 637,
    exteriorColor: "Tactics Green",
    interiorColor: "Monaco Gray Valcona Leather",
    vin: "WAUZZZF25PN789123",
    stock: "AU2403",
    location: "EV Center",
    description:
      "Stunning 2024 Audi RS e-tron GT. Porsche Taycan Turbo sibling with Audi's sophisticated design language. Instant torque and exhilarating performance.",
    features: [
      "Performance Package",
      "Carbon Ceramic Brakes",
      "Bang & Olufsen 3D Advanced Sound",
      "Matrix LED Headlights",
      "Adaptive Air Suspension",
      "Four-Zone Climate Control",
      "Night Vision Assistant",
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=1000",
      gallery: [
        "https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1606152421802-db97e6d78a5b?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    badge: {
      text: "Electric",
      variant: "success",
    },
    isSold: false,
    isCertifiedPreOwned: false,
  },
  {
    id: 6,
    make: "Land Rover",
    model: "Defender",
    trim: "110 X-Dynamic SE",
    year: 2023,
    price: 68000,
    msrp: 72500,
    mileage: 12000,
    mileageUnit: "miles",
    fuel: "Diesel",
    transmission: "Automatic",
    drivetrain: "4WD",
    engine: "3.0L Turbo Diesel I6",
    horsepower: 296,
    exteriorColor: "Pangea Green",
    interiorColor: "Ebony Windsor Leather",
    vin: "SALEA7BU8P2123456",
    stock: "LR2311",
    location: "Adventure Center",
    description:
      "Capable 2023 Land Rover Defender 110. Perfect for both urban adventures and off-road expeditions. Includes Cold Climate and Off-Road Packs.",
    features: [
      "Off-Road Pack",
      "Cold Climate Pack",
      "Meridian Surround Sound",
      "ClearSight Rear View Mirror",
      "Electronic Air Suspension",
      "Terrain Response 2",
      "Head-Up Display",
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000",
      gallery: [
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    badge: {
      text: "Off-Road",
      variant: "warning",
    },
    isSold: false,
    isCertifiedPreOwned: true,
  },
  // Additional cars for richer inventory
  {
    id: 7,
    make: "Lexus",
    model: "LC",
    trim: "500 Inspiration Series",
    year: 2024,
    price: 102000,
    msrp: 105000,
    mileage: 15,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    engine: "5.0L V8",
    horsepower: 471,
    exteriorColor: "Structural Blue",
    interiorColor: "White and Blue Semi-Aniline Leather",
    vin: "JTHHP5AY0PA123456",
    stock: "LX2401",
    location: "Premium Collection",
    description:
      "Exclusive 2024 Lexus LC 500 Inspiration Series. One of the most beautiful grand tourers ever made. Naturally aspirated V8 symphony.",
    features: [
      "Mark Levinson Reference Audio",
      "Carbon Fiber Roof",
      "21\" Forged Alloy Wheels",
      "Alcantara Headliner",
      "Dynamic Handling Package",
      "Torsen Limited-Slip Differential",
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000",
      gallery: [
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    badge: null,
    isSold: false,
    isCertifiedPreOwned: false,
  },
  {
    id: 8,
    make: "Ford",
    model: "Mustang",
    trim: "Dark Horse Premium",
    year: 2024,
    price: 62000,
    msrp: 63500,
    mileage: 250,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Manual",
    drivetrain: "RWD",
    engine: "5.0L Coyote V8",
    horsepower: 500,
    exteriorColor: "Blue Ember Metallic",
    interiorColor: "Deep Indigo Leather",
    vin: "1FA6P8R05R5501234",
    stock: "FD2405",
    location: "Main Showroom",
    description:
      "All-new 2024 Ford Mustang Dark Horse. The most powerful naturally aspirated 5.0L V8 ever. Track-ready with MagneRide suspension.",
    features: [
      "Dark Horse Handling Package",
      "MagneRide Damping System",
      "Brembo Brakes",
      "Torsen Differential",
      "Recaro Sport Seats",
      "B&O Sound System",
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=1000",
      gallery: [
        "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    badge: {
      text: "New Model",
      variant: "primary",
    },
    isSold: false,
    isCertifiedPreOwned: false,
  },
  {
    id: 9,
    make: "Chevrolet",
    model: "Corvette",
    trim: "Stingray 3LT",
    year: 2023,
    price: 89000,
    msrp: 92000,
    mileage: 3800,
    mileageUnit: "miles",
    fuel: "Petrol",
    transmission: "Automatic",
    drivetrain: "RWD",
    engine: "6.2L LT2 V8",
    horsepower: 495,
    exteriorColor: "Rapid Blue",
    interiorColor: "Sky Cool Gray Leather",
    vin: "1G1YC3D40P5601234",
    stock: "CV2308",
    location: "Premium Collection",
    description:
      "Like-new 2023 Corvette Stingray with Z51 Performance Package. Mid-engine supercar performance at a fraction of the cost.",
    features: [
      "Z51 Performance Package",
      "Front Lift System",
      "Performance Data Recorder",
      "Bose Performance Series Audio",
      "GT2 Bucket Seats",
      "Carbon Flash Metallic Accents",
    ],
    images: {
      primary: "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=1000",
      gallery: [
        "https://images.unsplash.com/photo-1562911791-c7a97b729ec5?auto=format&fit=crop&q=80&w=1000",
        "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&q=80&w=1000",
      ],
    },
    badge: {
      text: "Like New",
      variant: "secondary",
    },
    isSold: false,
    isCertifiedPreOwned: true,
  },
  {
    id: 10,
    make: "Rivian",
    model: "R1S",
    trim: "Adventure Package",
    year: 2024,
    price: 96000,
    msrp: 98000,
    mileage: 200,
    mileageUnit: "miles",
    fuel: "Electric",
    transmission: "Automatic",
    drivetrain: "AWD",
    engine: "Quad Motor Electric",
    horsepower: 835,
    exteriorColor: "Forest Green",
    interiorColor: "Ocean Coast Vegan Leather",
    vin: "7PDSGABA8PN123456",
    stock: "RV2401",
    location: "EV Center",
    description:
      "Nearly new 2024 Rivian R1S with Quad-Motor setup. 0-60 in 3.1 seconds, 321 miles range, and seating for seven. Adventure ready.",
    features: [
      "Quad-Motor AWD",
      "Large Battery Pack",
      "Reinforced Underbody Shield",
      "Camp Speaker",
      "Air Compressor",
      "Meridian Elevation Audio",
      "Panoramic Glass Roof",
    ],
    images: {
      primary: "/car-11.webp",
      gallery: [
    "/car-12.jpeg",
    
      ],
    },
    badge: {
      text: "EV",
      variant: "success",
    },
    isSold: false,
    isCertifiedPreOwned: false,
  },
];

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get a single car by its ID
 * @param {number|string} id - The car ID
 * @returns {Object|undefined} Car object or undefined if not found
 */
export const getCarById = (id) => {
  return cars.find((car) => car.id === parseInt(id));
};

/**
 * Get featured cars (top 4 with badges or low mileage)
 * @returns {Array} Array of featured cars
 */
export const getFeaturedCars = () => {
  return cars
    .filter((car) => car.badge !== null && !car.isSold)
    .slice(0, 4);
};

/**
 * Get new arrivals (cars with mileage < 1000)
 * @returns {Array} Array of new arrival cars
 */
export const getNewArrivals = () => {
  return cars.filter((car) => car.mileage < 1000 && !car.isSold).slice(0, 6);
};

/**
 * Get similar cars based on make, fuel type, or price range
 * @param {Object} car - Reference car object
 * @param {number} limit - Maximum number of similar cars to return
 * @returns {Array} Array of similar cars
 */
export const getSimilarCars = (car, limit = 3) => {
  if (!car) return [];
  return cars
    .filter(
      (c) =>
        c.id !== car.id &&
        !c.isSold &&
        (c.make === car.make ||
          c.fuel === car.fuel ||
          (c.price >= car.price * 0.7 && c.price <= car.price * 1.3))
    )
    .slice(0, limit);
};

/**
 * Filter cars by various criteria
 * @param {Object} filters - Filter criteria object
 * @returns {Array} Filtered cars array
 */
export const filterCars = (filters = {}) => {
  const {
    make,
    minPrice,
    maxPrice,
    minYear,
    maxYear,
    fuel,
    transmission,
    isCertifiedPreOwned,
  } = filters;

  return cars.filter((car) => {
    if (make && car.make !== make) return false;
    if (minPrice && car.price < minPrice) return false;
    if (maxPrice && car.price > maxPrice) return false;
    if (minYear && car.year < minYear) return false;
    if (maxYear && car.year > maxYear) return false;
    if (fuel && car.fuel !== fuel) return false;
    if (transmission && car.transmission !== transmission) return false;
    if (isCertifiedPreOwned !== undefined && car.isCertifiedPreOwned !== isCertifiedPreOwned)
      return false;
    return true;
  });
};

/**
 * Get all unique makes from the dataset
 * @returns {Array} Array of unique makes
 */
export const getMakes = () => {
  return [...new Set(cars.map((car) => car.make))].sort();
};

/**
 * Format price to USD currency string
 * @param {number} price - Price value
 * @returns {string} Formatted price
 */
export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

/**
 * Format mileage with commas
 * @param {number} mileage - Mileage value
 * @returns {string} Formatted mileage
 */
export const formatMileage = (mileage) => {
  return mileage.toLocaleString("en-US");
};

export default cars;