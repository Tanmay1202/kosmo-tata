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

export interface Vehicle {
  id: string;
  name: string;
  trim: string;
  category: VehicleCategory;
  price: string;
  availability: string;
  image: string; // Navigation thumbnail
  slug: string;
  isNew?: boolean;
  
  // Extended Details
  engineSpecs: VehicleSpecs;
  features: string[];
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
    image: '/assets/images/cars/aeris-dandeli-drizzle_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'aeris',
    isNew: true,
    engineSpecs: {
      power: '142 PS',
      engineOrBattery: '45 kWh Battery',
      groundClearance: '190 mm',
      bootCapacity: '350 L',
    },
    features: ['360 SVS Camera', 'Ventilated Seats', 'iRA Connected Tech', 'JBL Audio'],
    colors: [
      { name: 'Dandeli Drizzle', hex: '#4A5D5E', rotationArray: ["/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-0_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-1_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-3_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-5_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-6_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-7_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-9_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-10_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-11_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-12_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-13_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-14_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-15_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-16_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-17_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-18_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-19_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-20_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-21_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-22_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-23_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-24_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-27_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-28_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-29_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-30_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-31_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-32_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-33_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-34_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DandeliDrizzle-35_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] },
      { name: 'Pristine White', hex: '#FFFFFF', rotationArray: ["/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-0-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-1-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-2-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-3-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-4-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-5-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-6-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-7-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-8-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-9-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-10-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-11-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-12-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-13-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-14-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-15-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-16-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-17-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-18-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-19-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-20-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-21-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-22-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-23-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-24-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-25-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-26-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-27-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-28-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-29-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-30-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-31-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-32-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-33-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-34-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PristineWhite-35-4_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
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
    image: '/assets/images/cars/sierra-navigation_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'sierra',
    isNew: true,
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '1.5L TGDi Petrol',
      groundClearance: '205 mm',
      bootCapacity: '400 L',
    },
    features: ['Panoramic Sunroof', 'Level 2 ADAS', 'Harman Audio', 'Ventilated Seats'],
    colors: [
      { name: 'Oberon Black', hex: '#111111', rotationArray: [], hasDayNight: true },
      { name: 'Daytona Grey', hex: '#5A5A5A', rotationArray: ["/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-0-18_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-0-22_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-0-23_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-0-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-1-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-2-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-3-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-4-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-5-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-6-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-7-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-8-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-9-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-10-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-11-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-12-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-13-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-14-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-15-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-16-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-17-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-18-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-19-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-20-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-21-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-22-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-23-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-24-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-25-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-26-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-27-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-28-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-29-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-30-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-31-26_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/DaytonaGrey-32-25_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
    ],
    exteriorBanner: '/assets/images/cars/sierrakv-14-1_$TT-614-400-D$_fit_crop_fmt_avif-alpha.avif',
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
    image: '/assets/images/cars/harrier-ev-nav_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'harrier',
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '2.0L Kryotec Diesel',
      groundClearance: '205 mm',
      bootCapacity: '445 L',
    },
    features: ['ADAS Level 2', 'Smart E-Shifter', '360 Camera', 'JBL Sound'],
    colors: [
      { name: 'Sunlit Yellow', hex: '#F2C84B', rotationArray: [], hasDayNight: true },
      { name: 'Coral Red', hex: '#A83232' }
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
    image: '/assets/images/cars/safari-red-dark-navigation_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'safari',
    engineSpecs: {
      power: '170 PS',
      engineOrBattery: '2.0L Kryotec Diesel',
      groundClearance: '205 mm',
      bootCapacity: '420 L',
    },
    features: ['Boss Mode', 'Ventilated 2nd Row', 'Air Purifier', 'JBL Audio'],
    colors: [
      { name: 'Oberon Black', hex: '#111111', rotationArray: [], hasDayNight: true },
      { name: 'Starlight', hex: '#EBEBEB' }
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
    image: '/assets/images/cars/creative-plus-24-dehradun-dew_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'nexon',
    engineSpecs: {
      power: '120 PS',
      engineOrBattery: '1.2L Revotron Petrol',
      groundClearance: '208 mm',
      bootCapacity: '382 L',
    },
    features: ['Bi-Function LED', 'Sequential Indicators', 'Hidden Wiper', 'Ventilated Seats'],
    colors: [
      { name: 'Fearless Purple', hex: '#5E2B5A' },
      { name: 'Creative Ocean', hex: '#1E6C8E' }
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
    image: '/assets/images/cars/punch-mce-navigation_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'punch',
    engineSpecs: {
      power: '88 PS',
      engineOrBattery: '1.2L Revotron',
      groundClearance: '187 mm',
      bootCapacity: '366 L',
    },
    features: ['90-degree Doors', 'iRA Tech', 'Auto Headlamps', 'Rain Sensing Wipers'],
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
    image: '/assets/images/cars/all-new-altroz-navigation_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'altroz',
    engineSpecs: {
      power: '110 PS',
      engineOrBattery: '1.2L i-Turbo Petrol',
      groundClearance: '165 mm',
      bootCapacity: '345 L',
    },
    features: ['ALFA Arch', 'Laser Cut Alloys', 'iRA Tech', 'Harman Audio'],
    colors: [
      { name: 'High Street Gold', hex: '#C2A155', rotationArray: [], hasDayNight: true },
      { name: 'Opera Blue', hex: '#1C315E', rotationArray: ["/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-0-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-1-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-2-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-3-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-4-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-5-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-6-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-7-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-8-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-9-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-10-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-11-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-12-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-13-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-14-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-15-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-16-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-17-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-18-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-19-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-20-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-21-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-22-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-23-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-24-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-25-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-26-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-27-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-28-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-29-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-30-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-31-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-32-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-33-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-34-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/OperaBlue-35-2_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] }
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
    image: '/assets/images/cars/the-next-gen-tiago-navigation_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'tiago',
    engineSpecs: {
      power: '86 PS',
      engineOrBattery: '1.2L Revotron Petrol',
      groundClearance: '170 mm',
      bootCapacity: '242 L',
    },
    features: ['Projector Headlamps', 'Auto Fold ORVM', 'Digital Instrument', '8-Speaker Harman'],
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
    image: '/assets/images/cars/curvv-new-pure-grey_$HC-264-129-D$_fit_fit_fmt_avif-alpha.avif',
    slug: 'curvv',
    isNew: true,
    engineSpecs: {
      power: '125 PS',
      engineOrBattery: '1.2L Hyperion',
      groundClearance: '190 mm',
      bootCapacity: '500 L',
    },
    features: ['Aero Insert Alloys', 'Smart E-Shifter', 'Ventilated Seats', 'Level 2 ADAS'],
    colors: [
      { name: 'Pure Grey', hex: '#7A8086', rotationArray: ["/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-0-3_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-0-6_$PO-750-500-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-0-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-1-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-2-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-3-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-4-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-5-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-6-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-7-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-8-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-9-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-10-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-11-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-12-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-13-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-14-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-15-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-16-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-17-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-18-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-19-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-20-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-21-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-22-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-23-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-24-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-25-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-26-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-27-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-28-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-29-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-30-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-31-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-32-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif","/assets/tata.cars/s7ap1.scene7.com/is/image/tatamotors/PureGrey-33-8_$PO-1228-468-S$_fit_crop_fmt_avif-alpha.avif"] },
      { name: 'Virtual Sunrise', hex: '#E06B4B', rotationArray: [], hasDayNight: true }
    ],
    exteriorBanner: '/assets/images/cars/d-curvv-banner-kv_$BA-1920-925-D$_fit_crop_fmt_avif-alpha.avif',
    interiorShot: '/assets/images/cars/premium-openview-dashboard_$IMG-474-248-D$_fit_crop_fmt_avif-alpha.avif',
    rotationArray: [],
  }
];
