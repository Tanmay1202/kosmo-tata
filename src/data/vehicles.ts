export type VehicleCategory = 'SUVs' | 'EVs' | 'Hatchbacks & Sedans';

export interface VehicleColor {
  name: string;
  hex: string;
  rotationArray?: string[];
  hasDayNight?: boolean;
}

export interface VehicleSpecs {
  power: string;
  engineOrBattery: string;
  groundClearance: string;
  bootCapacity: string;
}


export interface DetailedSpecs {
  engine: { displacement: string; maxPower: string; maxTorque: string; cylinders: string; transmission: string; driveModes: string; };
  dimensions: { length: string; width: string; height: string; wheelbase: string; groundClearance: string; bootSpace: string; };
  suspensionAndBrakes: { frontSuspension: string; rearSuspension: string; frontBrakes: string; rearBrakes: string; };
  keyFeatures: { infotainment: string; instrumentCluster: string; soundSystem: string; comfort: string; };
  safety: { airbags: string; absEbd: string; esp: string; gncapRating: string; };
}

export interface ExclusiveFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  isReversed: boolean;
}

export interface Vehicle {
  id: string;
  name: string;
  trim: string;
  category: VehicleCategory;
  price: string;
  availability: string;
  image: string; // High-resolution vehicle image
  slug: string;
  isNew?: boolean;
  
  // Extended Details
  engineSpecs: VehicleSpecs;
  detailedSpecs?: DetailedSpecs;
  features: string[];
  exclusiveFeatures?: ExclusiveFeature[];
  textFeatures?: { category: string; details: string }[];
  colors: VehicleColor[];

  exteriorBanner: string;
  interiorShot: string;
  rotationArray: string[]; // 360 degree frame sequence
}

export const vehicles: Vehicle[] = [
  {
    id: 'aeris',
    name: 'Aeris',
    trim: 'Fearless+',
    category: 'EVs',
    price: '₹ 15.49 Lakh',
    availability: 'Pre-book Now • Priority Delivery',
    image: '/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'aeris',
    isNew: true,
    detailedSpecs: {
    engine: { displacement: '45 kWh', maxPower: '142 PS', maxTorque: '215 Nm', cylinders: 'N/A (Electric)', transmission: 'Single Speed Auto', driveModes: 'Eco, City, Sport' },
    dimensions: { length: '3993 mm', width: '1811 mm', height: '1606 mm', wheelbase: '2498 mm', groundClearance: '190 mm', bootSpace: '350 L' },
    suspensionAndBrakes: { frontSuspension: 'Independent MacPherson', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Drum/Disc' },
    keyFeatures: { infotainment: '12.3" Cinematic', instrumentCluster: '10.25" Digital', soundSystem: 'JBL 9-Speaker', comfort: 'Ventilated Front Seats' },
    safety: { airbags: '6 Airbags Standard', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star' }
  },
    engineSpecs: {
      power: '142 PS',
      engineOrBattery: '45 kWh Battery',
      groundClearance: '190 mm',
      bootCapacity: '350 L',
    },
    features: ['360 SVS Camera', 'Ventilated Seats', 'iRA Connected Tech', 'JBL Audio'],
    exclusiveFeatures: [
    { title: "Aerodynamic Excellence", subtitle: "Designed to Defeat Boring", description: "The Aeris features an ultra-low drag coefficient for maximum electric range, combined with flush door handles and aero-optimized wheels for a truly futuristic aesthetic.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Smart Ambient Lounge", subtitle: "Your Private Sanctuary", description: "Step into an intelligent cabin that adapts to your mood. Featuring biometric climate control, a 12.3-inch cinematic display, and a continuous glowing light-bar spanning the dashboard.", image: "/assets/images/cars/aeris-interior-ai.jpg", isReversed: true },
    { title: "Ultra-Fast Charging", subtitle: "Ready in Minutes", description: "Experience next-generation high-speed charging. The futuristic electric architecture ensures your SUV is powered up and ready to go with glowing ambient charging indicators.", image: "/assets/images/cars/futuristic_electric_suv_charging.jpg", isReversed: false }
  ],
    textFeatures: [
      {
            "category": "Born Electric Architecture",
            "details": "Built on a dedicated EV skateboard platform, the Aeris maximizes interior space by eliminating the transmission tunnel and packaging the battery flat into the floor, achieving perfect weight distribution."
          },
      {
            "category": "Ultra-Fast Charging Capability",
            "details": "Equipped with a high-voltage electrical architecture capable of ultra-fast DC charging, enabling the vehicle to gain hundreds of kilometers of range in just minutes of charging."
          },
      {
            "category": "Biometric & AI Integration",
            "details": "The cabin learns and adapts to the driver using biometric sensors, automatically adjusting climate, seat position, and infotainment preferences the moment you step inside."
          },
      {
            "category": "Futuristic Aerodynamics",
            "details": "Design elements like active aero flaps, a continuous light-bar spanning the front, and a completely flat underbelly ensure the Aeris cuts through the air with minimal resistance, maximizing range."
          }
],
    colors: [
      { name: 'Dandeli Drizzle', hex: '#4A5D5E', rotationArray: ["/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-0_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-1_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-3_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-5_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-6_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-7_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-9_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-10_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-11_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-12_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-13_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-14_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-15_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-16_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-17_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-18_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-19_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-20_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-21_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-22_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-23_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-24_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-27_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-28_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-29_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-30_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-31_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-32_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-33_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-34_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DandeliDrizzle/DandeliDrizzle-35_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] },
      { name: 'Pristine White', hex: '#FFFFFF', rotationArray: ["/assets/360-viewer/PristineWhite/PristineWhite-0-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-1-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-2-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-3-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-4-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-5-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-6-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-7-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-8-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-9-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-10-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-11-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-12-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-13-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-14-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-15-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-16-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-17-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-18-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-19-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-20-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-21-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-22-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-23-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-24-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-25-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-26-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-27-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-28-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-29-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-30-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-31-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-32-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-33-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-34-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PristineWhite/PristineWhite-35-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
    ],
    exteriorBanner: '/assets/images/cars/aeris-i-petrol-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/aeris-interior-petrol_$IMG-1326-721-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'sierra',
    name: 'Sierra',
    trim: '#DARK Edition',
    category: 'SUVs',
    price: '₹ 14.99 Lakh',
    availability: 'In Showroom • Express 48h Delivery',
    image: '/assets/images/cars/sierra-horses_$B-1228-488-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'sierra',
    isNew: true,
    detailedSpecs: {
    engine: { displacement: '1.5L TGDi', maxPower: '170 PS', maxTorque: '280 Nm', cylinders: '4', transmission: '7-Speed DCA', driveModes: 'Eco, City, Sport, Terrain' },
    dimensions: { length: '4400 mm', width: '1820 mm', height: '1650 mm', wheelbase: '2650 mm', groundClearance: '205 mm', bootSpace: '400 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Torsion Beam', frontBrakes: 'Disc', rearBrakes: 'Disc' },
    keyFeatures: { infotainment: '12.3" Touchscreen', instrumentCluster: '10.25" Digital', soundSystem: 'Harman 10-Speaker', comfort: 'Panoramic Sunroof, Lounge Seating' },
    safety: { airbags: '6 Airbags Standard', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star Expected' }
  },
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '1.5L TGDi Petrol',
      groundClearance: '205 mm',
      bootCapacity: '400 L',
    },
    features: ['Panoramic Sunroof', 'Level 2 ADAS', 'Harman Audio', 'Ventilated Seats'],
    exclusiveFeatures: [
    { title: "Lounge Seating", subtitle: "First-Class Travel", description: "The Sierra reinvents the SUV interior with executive lounge seating, a massive panoramic glass roof, and gesture-controlled amenities that make every journey feel like first class.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Powered Tailgate", subtitle: "Smart Convenience", description: "Access your cargo space effortlessly with the gesture-controlled powered tailgate. The Sierra makes loading and unloading simple, even when your hands are full.", image: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg", isReversed: true },
    { title: "Panoramic Starry Roof", subtitle: "A View of the Stars", description: "Experience an expansive luxury panoramic glass sunroof revealing a brilliant starry night sky above premium white leather seats with warm ambient lighting.", image: "/assets/images/cars/luxury_suv_panoramic_sunroof_stars.jpg", isReversed: false }
  ],
    textFeatures: [
      {
            "category": "Lounge Concept Interior",
            "details": "The Sierra reimagines vehicle interiors with a true lounge-like experience, featuring premium executive seating, expansive legroom, and rotating seats that transform the cabin into a social space."
          },
      {
            "category": "Expansive Panoramic Glass",
            "details": "A massive, uninterrupted panoramic glass roof extends all the way to the rear, bathing the cabin in natural light during the day and offering a view of the stars at night, echoing the iconic original Sierra's design."
          },
      {
            "category": "Sustainable Materials",
            "details": "The interior is crafted using eco-friendly, sustainable materials including recycled plastics and vegan leather, emphasizing a commitment to environmental consciousness without sacrificing luxury."
          },
      {
            "category": "Intelligent Ambient Tech",
            "details": "Hidden screens, gesture controls, and contextual ambient lighting seamlessly integrate technology into the cabin only when needed, creating a calm, uncluttered sanctuary for passengers."
          }
],
    colors: [
      { name: 'Oberon Black', hex: '#111111', rotationArray: [], hasDayNight: true },
      { name: 'Daytona Grey', hex: '#5A5A5A', rotationArray: ["/assets/360-viewer/DaytonaGrey/DaytonaGrey-0-18_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-0-22_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-0-23_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-0-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-1-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-2-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-3-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-4-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-5-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-6-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-7-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-8-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-9-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-10-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-11-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-12-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-13-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-14-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-15-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-16-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-17-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-18-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-19-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-20-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-21-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-22-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-23-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-24-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-25-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-26-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-27-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-28-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-29-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-30-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-31-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/DaytonaGrey/DaytonaGrey-32-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
    ],
    exteriorBanner: '/assets/images/cars/sierra-horses_$B-1228-488-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'harrier',
    name: 'Harrier',
    trim: 'Fearless+',
    category: 'SUVs',
    price: '₹ 15.49 Lakh',
    availability: 'In Showroom',
    image: '/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'harrier',
    detailedSpecs: {
    engine: { displacement: '2.0L Kryotec', maxPower: '170 PS', maxTorque: '350 Nm', cylinders: '4', transmission: '6-Speed AT', driveModes: 'Eco, City, Sport, Wet, Rough' },
    dimensions: { length: '4605 mm', width: '1922 mm', height: '1718 mm', wheelbase: '2741 mm', groundClearance: '205 mm', bootSpace: '445 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Blade', frontBrakes: 'Disc', rearBrakes: 'Disc' },
    keyFeatures: { infotainment: '12.3" Touchscreen', instrumentCluster: '10.25" Digital', soundSystem: 'JBL 10-Speaker', comfort: 'Panoramic Sunroof, Ventilated Seats' },
    safety: { airbags: 'Up to 7 Airbags', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star (BNCAP)' }
  },
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '2.0L Kryotec Diesel',
      groundClearance: '205 mm',
      bootCapacity: '445 L',
    },
    features: ['ADAS Level 2', 'Smart E-Shifter', '360 Camera', 'JBL Sound'],
    exclusiveFeatures: [
    { title: "Kryotec Performance", subtitle: "Engineered to Thrill", description: "The powerful 170PS Kryotec diesel engine combined with Terrain Response Modes ensures the Harrier dominates both highways and harsh off-road terrains with ease.", image: "/assets/images/cars/harrier-offroad-ai.jpg", isReversed: false },
    { title: "JBL Acoustic Experience", subtitle: "Concert on Wheels", description: "Immerse yourself in crystal-clear audio with the 10-speaker JBL sound system, tuned specifically for the Harrier's cabin acoustics.", image: "/assets/images/lifestyle/terrain-repsonse.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "OMEGA-ARC Platform",
            "details": "Built on the Optimal Modular Efficient Global Advanced Architecture, derived from Land Rover's legendary D8 platform. This gives the Harrier unparalleled driving dynamics, torsional rigidity, and a commanding stance suited for all terrains."
          },
      {
            "category": "Kryotec Performance",
            "details": "At the heart of the Harrier is the 2.0L Kryotec turbocharged diesel engine, delivering a massive 170 PS of power and 350 Nm of torque. It is mated to a seamless 6-speed automatic transmission with advanced Terrain Response Modes (Normal, Rough, Wet)."
          },
      {
            "category": "Intelligent ADAS Level 2",
            "details": "Safety is paramount with 11 Advanced Driver Assistance Systems (ADAS) features, including Autonomous Emergency Braking, Lane Keep Assist, Blind Spot Detection, and Rear Cross Traffic Alert, ensuring peace of mind on every journey."
          },
      {
            "category": "Opulent Interior",
            "details": "The cabin is a sanctuary of luxury, featuring premium Benecke-Kaliko oak brown leather upholstery, a massive voice-assisted panoramic sunroof, and a 10-speaker JBL audio system tailored for immersive acoustic perfection."
          }
],
    colors: [
      { name: 'Sunlit Yellow', hex: '#F2C84B', rotationArray: [], hasDayNight: true },
      { name: 'Coral Red', hex: '#A83232', hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/harrier-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-ventilated-leatherette-seats-1_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'safari',
    name: 'Safari',
    trim: 'Red Dark Edition',
    category: 'SUVs',
    price: '₹ 16.19 Lakh',
    availability: 'In Showroom • Express 48h Delivery',
    image: '/assets/images/cars/safari-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'safari',
    detailedSpecs: {
    engine: { displacement: '2.0L Kryotec', maxPower: '170 PS', maxTorque: '350 Nm', cylinders: '4', transmission: '6-Speed AT', driveModes: 'Eco, City, Sport, Terrain' },
    dimensions: { length: '4668 mm', width: '1922 mm', height: '1795 mm', wheelbase: '2741 mm', groundClearance: '205 mm', bootSpace: '420 L (3rd row down)' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Blade', frontBrakes: 'Disc', rearBrakes: 'Disc' },
    keyFeatures: { infotainment: '12.3" Touchscreen', instrumentCluster: '10.25" Digital', soundSystem: 'JBL 10-Speaker', comfort: 'Ventilated 1st & 2nd Row, Boss Mode' },
    safety: { airbags: 'Up to 7 Airbags', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star (BNCAP)' }
  },
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '2.0L Kryotec Diesel',
      groundClearance: '205 mm',
      bootCapacity: '420 L',
    },
    features: ['Boss Mode', 'Ventilated 2nd Row', 'Air Purifier', 'JBL Audio'],
    exclusiveFeatures: [
    { title: "Boss Mode Comfort", subtitle: "Uncompromising Space", description: "The Safari offers ventilated seats in both the first and second rows. The exclusive Boss Mode lets the rear passenger adjust the co-driver seat for maximum legroom.", image: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg", isReversed: false },
    { title: "Level 2 ADAS", subtitle: "Intelligent Protection", description: "Advanced Driver Assistance Systems including Autonomous Emergency Braking and Lane Keep Assist act as your co-pilot, keeping you and your family safe.", image: "/assets/images/lifestyle/terrain-repsonse.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "Pedigree of Legends",
            "details": "The Safari inherits the legendary OMEGA-ARC architecture (derived from Land Rover D8), offering unmatched off-road capability, structural durability, and a towering road presence."
          },
      {
            "category": "Unrivaled Comfort",
            "details": "Designed for royalty, the Safari features unique 'Boss Mode' for the co-driver seat to increase rear legroom, ventilated seats in both the first and second rows, and stadium-style seating ensuring excellent visibility for all three rows."
          },
      {
            "category": "Cutting-Edge Technology",
            "details": "Equipped with a 12.3-inch Harman touchscreen infotainment system, a 10.25-inch digital driver display, and seamless wireless Apple CarPlay and Android Auto integration. The cabin environment is maintained by a dual-zone automatic climate control system."
          },
      {
            "category": "Advanced Safety",
            "details": "Ensuring family safety with a 5-star GNCAP rating, 7 airbags, and Level 2 ADAS capabilities. Features like Electronic Parking Brake with Auto Hold and a 360-degree surround-view system make maneuvering this flagship SUV effortless."
          }
],
    colors: [
      { name: 'Oberon Black', hex: '#111111', rotationArray: [], hasDayNight: true },
      { name: 'Starlight', hex: '#EBEBEB', hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/safari-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'nexon',
    name: 'Nexon',
    trim: 'Creative',
    category: 'SUVs',
    price: '₹ 8.10 Lakh',
    availability: 'In Showroom',
    image: '/assets/images/cars/nexon-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'nexon',
    detailedSpecs: {
    engine: { displacement: '1.2L Revotron', maxPower: '120 PS', maxTorque: '170 Nm', cylinders: '3', transmission: '7-Speed DCA', driveModes: 'Eco, City, Sport' },
    dimensions: { length: '3995 mm', width: '1804 mm', height: '1620 mm', wheelbase: '2498 mm', groundClearance: '208 mm', bootSpace: '382 L' },
    suspensionAndBrakes: { frontSuspension: 'Independent MacPherson', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Drum' },
    keyFeatures: { infotainment: '10.25" Touchscreen', instrumentCluster: '10.25" Digital', soundSystem: 'JBL 9-Speaker', comfort: 'Ventilated Seats, Electric Sunroof' },
    safety: { airbags: '6 Airbags Standard', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star (GNCAP)' }
  },
    engineSpecs: {
      power: '120 PS',
      engineOrBattery: '1.2L Revotron Petrol',
      groundClearance: '208 mm',
      bootCapacity: '382 L',
    },
    features: ['Bi-Function LED', 'Sequential Indicators', 'Hidden Wiper', 'Ventilated Seats'],
    exclusiveFeatures: [
    { title: "Bi-Function LED", subtitle: "Striking Visibility", description: "The aggressive front fascia features sequential LED DRLs and bi-function LED headlamps that give the Nexon a distinctly modern and commanding road presence.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Hidden Wiper", subtitle: "Clean Aesthetics", description: "The seamlessly integrated hidden rear wiper not only improves the aerodynamic profile of the car but ensures the rear glass design remains uncluttered and sleek.", image: "/assets/images/lifestyle/terrain-repsonse.jpg", isReversed: true },
    { title: "Aggressive Lighting", subtitle: "Cut Through the Fog", description: "The sharp LED headlights are engineered to cut through dense fog and rain, providing unparalleled visibility on winding mountain roads.", image: "/assets/images/cars/mountain_fog_car_headlights.jpg", isReversed: false }
  ],
    textFeatures: [
      {
            "category": "Design & Lighting",
            "details": "The Nexon commands attention with its aerodynamic, futuristic silhouette. The front fascia boasts sequential LED DRLs and bi-function LED headlamps for superior visibility. The seamless integration of a hidden rear wiper enhances the clean, uncluttered rear aesthetic, giving it a premium road presence."
          },
      {
            "category": "Performance & Powertrain",
            "details": "Powered by a highly responsive 1.2L Turbocharged Revotron engine or a robust 1.5L Revotorq diesel, paired with a state-of-the-art 7-speed DCA (Dual Clutch Automatic) transmission. Features multiple drive modes (Eco, City, Sport) allowing you to effortlessly switch between maximum fuel efficiency and thrilling performance."
          },
      {
            "category": "Tech & Infotainment",
            "details": "Step into a digitized cinematic cabin featuring a 10.25-inch high-definition floating touchscreen and a matching 10.25-inch fully digital instrument cluster. Audio is delivered through an acoustically tuned 9-speaker JBL premium sound system including a subwoofer for concert-like audio."
          },
      {
            "category": "Comfort & Safety",
            "details": "Built on a high-strength steel structure that previously secured a 5-star GNCAP rating. It comes packed with 6 airbags as standard, 360-degree surround-view cameras, ventilated front seats, an electric sunroof, and an illuminated 2-spoke steering wheel that redefines cabin luxury."
          }
],
    colors: [
      { name: 'Fearless Purple', hex: '#5E2B5A', hasDayNight: true },
      { name: 'Creative Ocean', hex: '#1E6C8E', hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/nexon-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'punch',
    name: 'Punch',
    trim: 'Accomplished',
    category: 'SUVs',
    price: '₹ 6.12 Lakh',
    availability: 'In Showroom',
    image: '/assets/images/cars/punch-new-revised-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'punch',
    detailedSpecs: {
    engine: { displacement: '1.2L Revotron', maxPower: '88 PS', maxTorque: '115 Nm', cylinders: '3', transmission: '5-Speed AMT', driveModes: 'Eco, City' },
    dimensions: { length: '3827 mm', width: '1742 mm', height: '1615 mm', wheelbase: '2445 mm', groundClearance: '187 mm', bootSpace: '366 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Drum' },
    keyFeatures: { infotainment: '7" Touchscreen', instrumentCluster: '7" TFT Digital', soundSystem: 'Harman 6-Speaker', comfort: 'Auto AC, 90-Degree Doors' },
    safety: { airbags: 'Dual Airbags', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star (GNCAP)' }
  },
    engineSpecs: {
      power: '88 PS',
      engineOrBattery: '1.2L Revotron',
      groundClearance: '187 mm',
      bootCapacity: '366 L',
    },
    features: ['90-degree Doors', 'iRA Tech', 'Auto Headlamps', 'Rain Sensing Wipers'],
    exclusiveFeatures: [
    { title: "90-Degree Doors", subtitle: "Effortless Access", description: "The Punch makes ingress and egress a breeze for all ages with doors that open to a full 90 degrees, offering unparalleled access to the cabin.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Commanding Stance", subtitle: "SUV DNA", description: "Despite its compact footprint, the Punch features high ground clearance, a tall seating position, and rugged body cladding, staying true to authentic SUV DNA.", image: "/assets/images/lifestyle/terrain-repsonse.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "Authentic SUV DNA",
            "details": "Despite its compact dimensions, the Punch delivers authentic SUV characteristics including 187mm of high ground clearance, a commanding driving position, and robust body cladding designed to tackle urban jungles and rough terrains alike."
          },
      {
            "category": "ALFA Architecture",
            "details": "Built on the Agile Light Flexible Advanced (ALFA) architecture, securing a formidable 5-star Global NCAP safety rating. It provides exceptional cabin space and structural rigidity."
          },
      {
            "category": "90-Degree Door Opening",
            "details": "Ingress and egress are incredibly effortless for all passengers, especially the elderly, thanks to doors that open to a full 90 degrees."
          },
      {
            "category": "Traction Pro Mode",
            "details": "The AMT variants feature a unique Traction Pro Mode that intelligently applies braking to the wheel with low traction, transferring power to the wheel with grip, ensuring you can navigate muddy or slippery conditions with ease."
          }
],
    colors: [
      { name: 'Atomic Orange', hex: '#D6562A', rotationArray: [], hasDayNight: true },
      { name: 'Meteor Bronze', hex: '#7A6250', rotationArray: [], hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/punch-new-revised-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'altroz',
    name: 'Altroz',
    trim: 'XZA+',
    category: 'Hatchbacks & Sedans',
    price: '₹ 6.65 Lakh',
    availability: 'In Showroom • Express 48h Delivery',
    image: '/assets/images/cars/altroz-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'altroz',
    detailedSpecs: {
    engine: { displacement: '1.2L i-Turbo', maxPower: '110 PS', maxTorque: '140 Nm', cylinders: '3', transmission: '6-Speed DCA', driveModes: 'Eco, City' },
    dimensions: { length: '3990 mm', width: '1755 mm', height: '1523 mm', wheelbase: '2501 mm', groundClearance: '165 mm', bootSpace: '345 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Drum' },
    keyFeatures: { infotainment: '7" Touchscreen', instrumentCluster: '7" TFT Digital', soundSystem: 'Harman 8-Speaker', comfort: 'Auto Headlamps, Rain Sensing Wipers' },
    safety: { airbags: 'Dual Airbags', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star (GNCAP)' }
  },
    engineSpecs: {
      power: '110 PS',
      engineOrBattery: '1.2L i-Turbo Petrol',
      groundClearance: '165 mm',
      bootCapacity: '345 L',
    },
    features: ['ALFA Arch', 'Laser Cut Alloys', 'iRA Tech', 'Harman Audio'],
    exclusiveFeatures: [
    { title: "ALFA Architecture", subtitle: "Gold Standard of Safety", description: "Built on the Agile Light Flexible Advanced (ALFA) architecture, the Altroz delivers exceptional structural rigidity and a 5-star Global NCAP safety rating.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Acoustic Harmony", subtitle: "Premium Audio", description: "Enjoy your favorite tracks in high fidelity with the custom-tuned Harman audio system, integrated seamlessly into the Altroz's premium dashboard.", image: "/assets/images/cars/altroz-audio-ai.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "Gold Standard of Design",
            "details": "The Altroz stands out with its striking laser-cut design language, featuring aggressive swooping lines, sleek blacked-out C-pillars, and eye-catching laser-cut alloy wheels."
          },
      {
            "category": "Uncompromised Safety",
            "details": "Recognized as India's safest hatchback with a 5-star Global NCAP crash test rating. The ALFA architecture ensures energy is absorbed effectively during impacts, protecting the passenger cell."
          },
      {
            "category": "Advanced Powertrain (DCA)",
            "details": "Experience seamless power delivery with the advanced Dual Clutch Automatic (DCA) transmission featuring planetary gear systems, shift-by-wire technology, and machine learning software adapted specifically for stop-and-go Indian traffic conditions."
          },
      {
            "category": "Premium Cabin Acoustics",
            "details": "The interior is a marvel of packaging, offering exceptional legroom and a flat rear floor. The acoustic experience is elevated by a custom-tuned Harman audio system that delivers crisp, distortion-free sound."
          }
],
    colors: [
      { name: 'High Street Gold', hex: '#C2A155', rotationArray: [], hasDayNight: true },
      { name: 'Opera Blue', hex: '#1C315E', rotationArray: ["/assets/360-viewer/OperaBlue/OperaBlue-0-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-1-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-2-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-3-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-4-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-5-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-6-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-7-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-8-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-9-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-10-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-11-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-12-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-13-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-14-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-15-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-16-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-17-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-18-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-19-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-20-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-21-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-22-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-23-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-24-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-25-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-26-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-27-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-28-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-29-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-30-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-31-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-32-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-33-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-34-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/OperaBlue/OperaBlue-35-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
    ],
    exteriorBanner: '/assets/images/cars/altroz-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'tiago',
    name: 'Tiago',
    trim: 'XZ+',
    category: 'Hatchbacks & Sedans',
    price: '₹ 5.65 Lakh',
    availability: 'In Showroom',
    image: '/assets/images/cars/tiago-new-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'tiago',
    detailedSpecs: {
    engine: { displacement: '1.2L Revotron', maxPower: '86 PS', maxTorque: '113 Nm', cylinders: '3', transmission: '5-Speed AMT', driveModes: 'City' },
    dimensions: { length: '3765 mm', width: '1677 mm', height: '1535 mm', wheelbase: '2400 mm', groundClearance: '170 mm', bootSpace: '242 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Drum' },
    keyFeatures: { infotainment: '7" Touchscreen', instrumentCluster: 'Digital', soundSystem: 'Harman 8-Speaker', comfort: 'Auto AC, Cooled Glovebox' },
    safety: { airbags: 'Dual Airbags', absEbd: 'Yes', esp: 'Standard', gncapRating: '4 Star (GNCAP)' }
  },
    engineSpecs: {
      power: '86 PS',
      engineOrBattery: '1.2L Revotron Petrol',
      groundClearance: '170 mm',
      bootCapacity: '242 L',
    },
    features: ['Projector Headlamps', 'Auto Fold ORVM', 'Digital Instrument', '8-Speaker Harman'],
    exclusiveFeatures: [
    { title: "Dynamic Handling", subtitle: "Zippy & Fun", description: "The Tiago offers a peppy Revotron engine paired with a precisely tuned suspension, making city commutes fun and effortless.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Digital Cluster", subtitle: "Information at a Glance", description: "Stay informed with the segment-first fully digital instrument cluster that displays vital vehicle information in a crisp, modern layout.", image: "/assets/images/lifestyle/safari-interior-lifestyle-resized-new.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "Zippy & Energetic Performance",
            "details": "Powered by a refined 1.2L Revotron petrol engine, the Tiago offers a perfect balance of peppy performance and exceptional fuel economy, making it the ideal companion for daily city commutes."
          },
      {
            "category": "Segment-Leading Infotainment",
            "details": "Stay connected with a 7-inch touchscreen infotainment system by Harman, paired with an 8-speaker surround sound system that offers an acoustic experience unheard of in its class."
          },
      {
            "category": "Digital Instrument Cluster",
            "details": "The driver is greeted by an advanced, fully digital instrument cluster that displays vital vehicle telemetry in a crisp, modern, and easily readable layout."
          },
      {
            "category": "Robust Build Quality",
            "details": "Safety is never compromised, with the Tiago boasting a solid 4-star Global NCAP safety rating, dual airbags, ABS with EBD, and Corner Stability Control as standard across all variants."
          }
],
    colors: [
      { name: 'Flame Red', hex: '#BA2222', rotationArray: [], hasDayNight: true },
      { name: 'Opal White', hex: '#F0F0F0', rotationArray: [], hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/tiago-new-banner-d_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  },
  {
    id: 'curvv',
    name: 'Curvv',
    trim: 'Pure Grey',
    category: 'SUVs',
    price: '₹ 9.99 Lakh',
    availability: 'Pre-book Now • Priority Delivery',
    image: '/assets/images/cars/d-curvv-banner-kv_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    slug: 'curvv',
    isNew: true,
    detailedSpecs: {
    engine: { displacement: '1.2L Hyperion', maxPower: '125 PS', maxTorque: '225 Nm', cylinders: '3', transmission: '7-Speed DCA', driveModes: 'Eco, City, Sport' },
    dimensions: { length: '4308 mm', width: '1810 mm', height: '1630 mm', wheelbase: '2560 mm', groundClearance: '190 mm', bootSpace: '500 L' },
    suspensionAndBrakes: { frontSuspension: 'MacPherson Strut', rearSuspension: 'Twist Beam', frontBrakes: 'Disc', rearBrakes: 'Disc' },
    keyFeatures: { infotainment: '12.3" Touchscreen', instrumentCluster: '10.25" Digital', soundSystem: 'JBL 9-Speaker', comfort: 'Panoramic Sunroof, Flush Door Handles' },
    safety: { airbags: '6 Airbags Standard', absEbd: 'Yes', esp: 'Standard', gncapRating: '5 Star Expected' }
  },
    engineSpecs: {
      power: '125 PS',
      engineOrBattery: '1.2L Hyperion',
      groundClearance: '190 mm',
      bootCapacity: '500 L',
    },
    features: ['Aero Insert Alloys', 'Smart E-Shifter', 'Ventilated Seats', 'Level 2 ADAS'],
    exclusiveFeatures: [
    { title: "Coupe-SUV Silhouette", subtitle: "A Class Apart", description: "The Curvv breaks conventions with its striking coupe-SUV roofline, blending the toughness of an SUV with the elegance of a sports coupe.", image: '/assets/images/lifestyle/terrain-repsonse.jpg', isReversed: false },
    { title: "Cinematic Cockpit", subtitle: "Future of Infotainment", description: "Experience a fully digital cockpit featuring an illuminated steering wheel logo, intuitive digital controls, and dual ultra-wide displays for navigation and entertainment.", image: "/assets/images/cars/curvv-interior-ai.jpg", isReversed: true }
  ],
    textFeatures: [
      {
            "category": "Coupe-SUV Silhouette",
            "details": "The Curvv breaks the mold with a striking aerodynamic coupe-SUV roofline. It combines the toughness and ground clearance of an SUV with the sporty, elegant proportions of a coupe."
          },
      {
            "category": "Next-Gen Cockpit",
            "details": "The interior features a minimalist, tech-driven design centered around an illuminated steering wheel logo, a cinematic 12.3-inch infotainment display, and a smart E-shifter for the transmission."
          },
      {
            "category": "Advanced Aerodynamics",
            "details": "Featuring flush door handles, aero-insert alloy wheels, and an optimized front fascia that significantly reduces drag coefficient, enhancing both performance and efficiency."
          },
      {
            "category": "Comprehensive Safety Suite",
            "details": "Equipped with Level 2 ADAS features, 6 airbags as standard, electronic stability program, and a 360-degree camera with blind-spot monitoring to ensure maximum safety in all driving conditions."
          }
],
    colors: [
      { name: 'Pure Grey', hex: '#7A8086', rotationArray: ["/assets/360-viewer/PureGrey/PureGrey-0-3_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-0-6_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-0-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-0_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-1-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-1_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-2-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-3-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-3_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-4-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-5-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-5_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-6-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-6_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-7-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-7_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-8-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-9-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-9_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-10-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-10_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-11-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-11_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-12-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-12_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-13-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-13_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-14-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-14_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-15-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-15_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/PureGrey-16-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/360-viewer/PureGrey/puregrey-16_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] },
      { name: 'Virtual Sunrise', hex: '#E06B4B', rotationArray: [], hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/d-curvv-banner-kv_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  }
];
