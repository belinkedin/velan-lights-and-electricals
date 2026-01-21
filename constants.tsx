
import React from 'react';
import {
  Lightbulb,
  Zap,
  ShieldCheck,
  Truck,
  Headphones,
  Layers,
  LayoutGrid,
  Radio,
  Pipette,
  Car,
  Sparkles,
  Award,
  Calendar,
  User,
  MapPin,
  ClipboardCheck
} from 'lucide-react';
import { Category, Product, Service } from './types';

export const COMPANY_INFO = {
  name: "Velan Lights And Electricals",
  tagline: "Illuminating Spaces with Elegance and Excellence",
  contactPerson: "Elangovan",
  legalStatus: "Partnership Firm",
  gstNo: "33AARFV2513L1ZW",
  registrationDate: "28-01-2019",
  turnover: "₹0 – ₹40 Lakhs",
  address: "Old No 37, Spensioner Street, Palani Main Road, Dindigul – 624001, Tamil Nadu, India",
  email: "sales@velanlights.com",
  phone: "+91 98765 43210"
};

export const CATEGORIES: Category[] = [
  { id: 'chandeliers', name: 'Crystal Chandeliers', iconName: 'Sparkles', description: 'Premium crystal hanging and modern ceiling chandeliers.' },
  { id: 'led-lighting', name: 'LED & Lighting', iconName: 'Lightbulb', description: 'LED lights, Spotlights, and high-intensity discharge lamps.' },
  { id: 'specialty-lamps', name: 'Specialty Lamps', iconName: 'Radio', description: 'UV lamps and decorative lamp fittings.' },
  { id: 'automotive', name: 'Automotive Lights', iconName: 'Car', description: 'Sealed beam lamps and specialized LED name plates.' },
  { id: 'cables', name: 'Cables & Electricals', iconName: 'Layers', description: 'Insulated cables, conductors, and fiber optic solutions.' },
  { id: 'pipes', name: 'Cast Iron Pipes', iconName: 'LayoutGrid', description: 'Spun pipes, double flanged, and bend pipe solutions.' }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'c1',
    name: 'Crystal Hanging Chandelier',
    category: 'chandeliers',
    price: 16000,
    image: '/chandelier-gold-crystal.png',
    isFeatured: true,
    description: 'Elegant multi-tier crystal hanging chandelier for grand halls. (Model: D8809-500x500)'
  },
  {
    id: 'c2',
    name: 'Modern Square LED Chandelier',
    category: 'chandeliers',
    price: 9500,
    image: '/chandelier-square-led.png',
    isFeatured: false,
    description: 'Contemporary square geometric design with crystal accents. (Model: 8317-6+2RGD)'
  },
  {
    id: 'c3',
    name: 'Circular Leaf LED Chandelier',
    category: 'chandeliers',
    price: 12500,
    image: '/chandelier-round-led.png',
    isFeatured: false,
    description: 'Stunning circular arrangement with leaf motifs. (Model: 805/8+4 RGD)'
  },
  {
    id: 'c4',
    name: 'Floral Pattern LED Chandelier',
    category: 'chandeliers',
    price: 13000,
    image: 'images/chandelier-flower-led.png',
    isFeatured: true,
    description: 'Artistic flower-shaped LED chandelier with dimmable remote options. (Model: 801/8+4RGD)'
  },
  {
    id: 'l1',
    name: 'High Intensity Discharge Light',
    category: 'led-lighting',
    price: 4200,
    image: 'images/high-intensity-discharge.png',
    isFeatured: true,
    description: 'High-performance lighting for commercial and outdoor spaces.'
  },
  {
    id: 'l4',
    name: 'Commercial Tube Light',
    category: 'led-lighting',
    price: 1200,
    image: 'images/led-product-1.png',
    isFeatured: false,
    description: 'Energy-efficient LED tube light for office and home use.'
  },
  {
    id: 'l5',
    name: 'LED Spot Bulb',
    category: 'led-lighting',
    price: 850,
    image: '/led-product-2.png',
    isFeatured: false,
    description: 'Focused beam LED spotlight for accent lighting.'
  },
  {
    id: 'l6',
    name: 'Flood Light',
    category: 'led-lighting',
    price: 3500,
    image: '/led-product-3.png',
    isFeatured: true,
    description: 'High-power flood light for outdoor security and illumination.'
  },
  {
    id: 'a1',
    name: 'Sealed Beam Lamps',
    category: 'automotive',
    price: 850,
    image: '/sealed-beam-lamp.png',
    isFeatured: true,
    description: 'Durable automotive sealed beam lamps for all-weather visibility.'
  },
  {
    id: 'l2',
    name: 'Modern Gold Wall Sconce',
    category: 'led-lighting',
    price: 3400,
    image: '/gold-wall-sconce.png',
    isFeatured: false,
    description: 'Minimalist gold wall lamp for living rooms and corridors.'
  },
  {
    id: 'l3',
    name: 'Industrial Hanging Pendant',
    category: 'led-lighting',
    price: 4800,
    image: '/industrial-hanging-pendant.png',
    isFeatured: true,
    description: 'Matte black metal pendant light with vintage bulb.'
  },
  {
    id: 'p1',
    name: 'Cast Iron Double Flanged Pipe',
    category: 'pipes',
    price: 5600,
    image: '/cast-iron-pipe.png',
    isFeatured: true,
    description: 'Industrial grade double flanged CI pipes for robust plumbing.'
  },
  {
    id: 'w1',
    name: 'Insulated Fiber Optic Cable',
    category: 'cables',
    price: 3200,
    image: '/fiber-optic-cable.png',
    isFeatured: false,
    description: 'High-speed data transmission cable with premium insulation.'
  },
  {
    id: 'w2',
    name: 'Heavy Duty Copper Wiring',
    category: 'cables',
    price: 8500,
    image: '/heavy-duty-copper-wiring.png',
    isFeatured: true,
    description: 'Industrial grade multi-core copper wiring for large installations.'
  },
  {
    id: 'u1',
    name: 'Industrial UV Lamp',
    category: 'specialty-lamps',
    price: 2100,
    image: '/industrial-uv-lamp.png',
    isFeatured: false,
    description: 'Germicidal and specialty UV lamps for industrial applications.'
  },
  {
    id: 'a2',
    name: 'Automotive LED Headlight',
    category: 'automotive',
    price: 1200,
    image: '/automotive-led-headlight.png',
    isFeatured: false,
    description: 'Bright LED headlight conversion kit for modern vehicles.'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Timely Delivery',
    description: 'Effective and prompt distribution across Tamil Nadu and beyond.',
    iconName: 'Truck'
  },
  {
    title: 'Expert Guidance',
    description: 'Technical support from our experienced team for choosing the right products.',
    iconName: 'Headphones'
  },
  {
    title: 'Best Pricing',
    description: 'Competitive wholesale and retail rates for all lighting solutions.',
    iconName: 'Zap'
  },
  {
    title: 'Quality Certified',
    description: 'BIS certified and industry-standard electrical components.',
    iconName: 'Award'
  }
];

export const IconMap: Record<string, React.FC<any>> = {
  Lightbulb,
  Zap,
  ShieldCheck,
  Truck,
  Headphones,
  Layers,
  LayoutGrid,
  Radio,
  Car,
  Sparkles,
  Award,
  Calendar,
  User,
  MapPin,
  ClipboardCheck
};
