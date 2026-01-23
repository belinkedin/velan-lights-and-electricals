
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

import { getAssetPath } from './utils';

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
  phones: ["+91 98650 36351", "+91 96555 04341"]
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
    image: getAssetPath('images/chandelier-gold-crystal.png'),
    isFeatured: true,
    description: 'Elegant multi-tier crystal hanging chandelier for grand halls. (Model: D8809-500x500)'
  },
  {
    id: 'c2',
    name: 'Modern Square LED Chandelier',
    category: 'chandeliers',
    price: 9500,
    image: getAssetPath('images/chandelier-square-led.png'),
    isFeatured: false,
    description: 'Contemporary square geometric design with crystal accents. (Model: 8317-6+2RGD)'
  },
  {
    id: 'c3',
    name: 'Circular Leaf LED Chandelier',
    category: 'chandeliers',
    price: 12500,
    image: getAssetPath('images/chandelier-round-led.png'),
    isFeatured: false,
    description: 'Stunning circular arrangement with leaf motifs. (Model: 805/8+4 RGD)'
  },
  {
    id: 'c4',
    name: 'Floral Pattern LED Chandelier',
    category: 'chandeliers',
    price: 13000,
    image: getAssetPath('images/chandelier-flower-led.png'),
    isFeatured: true,
    description: 'Artistic flower-shaped LED chandelier with dimmable remote options. (Model: 801/8+4RGD)'
  },
  {
    id: 'l1',
    name: 'High Intensity Discharge Light',
    category: 'led-lighting',
    price: 4200,
    image: getAssetPath('images/high-intensity-discharge.png'),
    isFeatured: true,
    description: 'High-performance lighting for commercial and outdoor spaces.'
  },
  {
    id: 'l4',
    name: 'Commercial Tube Light',
    category: 'led-lighting',
    price: 1200,
    image: getAssetPath('images/led-product-1.png'),
    isFeatured: false,
    description: 'Energy-efficient LED tube light for office and home use.'
  },
  {
    id: 'l5',
    name: 'LED Spot Bulb',
    category: 'led-lighting',
    price: 850,
    image: getAssetPath('images/led-product-2.png'),
    isFeatured: false,
    description: 'Focused beam LED spotlight for accent lighting.'
  },
  {
    id: 'l6',
    name: 'Flood Light',
    category: 'led-lighting',
    price: 3500,
    image: getAssetPath('images/led-product-3.png'),
    isFeatured: true,
    description: 'High-power flood light for outdoor security and illumination.'
  },
  {
    id: 'a1',
    name: 'Sealed Beam Lamps',
    category: 'automotive',
    price: 850,
    image: getAssetPath('images/sealed-beam-lamp.png'),
    isFeatured: true,
    description: 'Durable automotive sealed beam lamps for all-weather visibility.'
  },
  {
    id: 'l2',
    name: 'Modern Gold Wall Sconce',
    category: 'led-lighting',
    price: 3400,
    image: getAssetPath('images/gold-wall-sconce.png'),
    isFeatured: false,
    description: 'Minimalist gold wall lamp for living rooms and corridors.'
  },
  {
    id: 'l3',
    name: 'Industrial Hanging Pendant',
    category: 'led-lighting',
    price: 4800,
    image: getAssetPath('images/industrial-hanging-pendant.png'),
    isFeatured: true,
    description: 'Matte black metal pendant light with vintage bulb.'
  },
  {
    id: 'p1',
    name: 'Cast Iron Double Flanged Pipe',
    category: 'pipes',
    price: 5600,
    image: getAssetPath('images/cast-iron-pipe.png'),
    isFeatured: true,
    description: 'Industrial grade double flanged CI pipes for robust plumbing.'
  },
  {
    id: 'w1',
    name: 'Insulated Fiber Optic Cable',
    category: 'cables',
    price: 3200,
    image: getAssetPath('images/fiber-optic-cable.png'),
    isFeatured: false,
    description: 'High-speed data transmission cable with premium insulation.'
  },
  {
    id: 'w2',
    name: 'Heavy Duty Copper Wiring',
    category: 'cables',
    price: 8500,
    image: getAssetPath('images/heavy-duty-copper-wiring.png'),
    isFeatured: true,
    description: 'Industrial grade multi-core copper wiring for large installations.'
  },
  {
    id: 'u1',
    name: 'Industrial UV Lamp',
    category: 'specialty-lamps',
    price: 2100,
    image: getAssetPath('images/industrial-uv-lamp.png'),
    isFeatured: false,
    description: 'Germicidal and specialty UV lamps for industrial applications.'
  },
  {
    id: 'a2',
    name: 'Automotive LED Headlight',
    category: 'automotive',
    price: 1200,
    image: getAssetPath('images/automotive-led-headlight.png'),
    isFeatured: false,
    description: 'Bright LED headlight conversion kit for modern vehicles.'
  },
  {
    id: 'c5',
    name: 'Modern Spiral Cloud Chandelier',
    category: 'chandeliers',
    price: 18500,
    image: getAssetPath('images/chandelier-s305-12.jpg'),
    isFeatured: true,
    description: 'Breathtaking 12-light spiral chandelier with unique cloud-like glass elements. (Model: S305-12 3in1)'
  },
  {
    id: 'c6',
    name: 'Petal Drop Crystal Chandelier',
    category: 'chandeliers',
    price: 22000,
    image: getAssetPath('images/chandelier-s164-17.jpg'),
    isFeatured: true,
    description: 'Exquisite 17-light chandelier featuring crystal-encrusted petal drops. (Model: S164-17 3in1)'
  },
  {
    id: 'c7',
    name: 'Helical Crystal Column Chandelier',
    category: 'chandeliers',
    price: 19800,
    image: getAssetPath('images/chandelier-s185-12.jpg'),
    isFeatured: false,
    description: 'Sophisticated 12-light helical design with golden butterfly accents and crystal columns. (Model: S185-12 GD 3in1)'
  },
  {
    id: 'c8',
    name: 'Grand Ring Vortex Chandelier',
    category: 'chandeliers',
    price: 45000,
    image: getAssetPath('images/chandelier-21704-11b.jpg'),
    isFeatured: true,
    description: 'Monumental 11-ring vortex chandelier with multi-diameter LED rings. (Model: 21704-11B)'
  },
  {
    id: 'c9',
    name: 'Rose Gold Vortex Chandelier',
    category: 'chandeliers',
    price: 25230,
    image: getAssetPath('images/chandelier-21704-7b-rgd.jpg'),
    isFeatured: true,
    description: 'Elegant 7-ring spiral design in rose gold finish. (Model: 21704-7B-RGD)'
  },
  {
    id: 'c10',
    name: 'Rose Gold Petal Chandelier',
    category: 'chandeliers',
    price: 21000,
    image: getAssetPath('images/chandelier-s184-12-rgd.jpg'),
    isFeatured: false,
    description: 'Exquisite 12-light chandelier with rose gold petal drops. (Model: S184-12 RGD 3in1)'
  },
  {
    id: 'c11',
    name: 'Classic Gold Tiered Chandelier',
    category: 'chandeliers',
    price: 32000,
    image: getAssetPath('images/chandelier-classic-gold-tiered.jpg'),
    isFeatured: true,
    description: 'Premium multi-tiered gold chandelier with vertical crystal prisms.'
  },
  {
    id: 'c12',
    name: 'Rose Gold Grand Ring Chandelier',
    category: 'chandeliers',
    price: 38000,
    image: getAssetPath('images/chandelier-21704-9b-rgd.jpg'),
    isFeatured: false,
    description: 'Majestic 9-ring rose gold chandelier with graduated diameters. (Model: 21704-9B RGD)'
  },
  {
    id: 'c13',
    name: 'Majestic Crystal Drop Chandelier',
    category: 'chandeliers',
    price: 28500,
    image: getAssetPath('images/chandelier-s184-27.jpg'),
    isFeatured: true,
    description: 'Stunning 27-light crystal masterpiece for grand spaces. (Model: S184/27)'
  },
  {
    id: 'c14',
    name: 'Elegant Spiral Diamond Chandelier',
    category: 'chandeliers',
    price: 32000,
    image: getAssetPath('images/chandelier-ym203-9h.jpg'),
    isFeatured: true,
    description: 'Breathtaking 9-light spiral chandelier with diamond-shaped crystal elements. (Model: YM203/9H)'
  },
  {
    id: 'c15',
    name: 'Majestic Spiral Ring Chandelier',
    category: 'chandeliers',
    price: 34000,
    image: getAssetPath('images/chandelier-ym202-9h.jpg'),
    isFeatured: true,
    description: 'Grand 9-light spiral chandelier with crystalline ring drops. (Model: YM202/9H)'
  },
  {
    id: 'c16',
    name: 'Luminous Bloom LED Chandelier',
    category: 'chandeliers',
    price: 28000,
    image: getAssetPath('images/chandelier-bt202-8-4.jpg'),
    isFeatured: true,
    description: 'Modern 12-light LED chandelier inspired by blooming flower petals. (Model: BT202/8+4)'
  },
  {
    id: 'c17',
    name: 'Radiant Circle LED Chandelier',
    category: 'chandeliers',
    price: 26500,
    image: getAssetPath('images/chandelier-bt201-8-4.jpg'),
    isFeatured: false,
    description: 'Sophisticated 12-light LED chandelier with halo-style light rings. (Model: BT201/8+4)'
  },
  {
    id: 'c18',
    name: 'Geometric Prism LED Chandelier',
    category: 'chandeliers',
    price: 29500,
    image: getAssetPath('images/chandelier-bt203-8-4.jpg'),
    isFeatured: true,
    description: 'Contemporary 12-light LED chandelier with interlocking diamond geometric frames. (Model: BT203/8+4)'
  },
  {
    id: 'c19',
    name: 'Modern Tree-Branch LED Chandelier',
    category: 'chandeliers',
    price: 31000,
    image: getAssetPath('images/chandelier-square-multi.jpg'),
    isFeatured: true,
    description: 'Artistic ceiling chandelier with tree-branch patterns and square LED frames.'
  },
  {
    id: 'l7',
    name: 'Crystal Prism Wall Sconce',
    category: 'led-lighting',
    price: 4500,
    image: getAssetPath('images/wall-jnl-2708.jpg'),
    isFeatured: false,
    description: 'Elegant wall sconce with suspended crystal prisms and ambient glow. (Model: JNL-2708)'
  },
  {
    id: 'l8',
    name: 'Swirl Glass Wall Lamp',
    category: 'led-lighting',
    price: 3800,
    image: getAssetPath('images/wall-jnl-5042.jpg'),
    isFeatured: false,
    description: 'Contemporary wall lamp featuring a swirling glass globe design. (Model: JNL-5042)'
  },
  {
    id: 'l9',
    name: 'Golden Halo Wall Light',
    category: 'led-lighting',
    price: 4200,
    image: getAssetPath('images/wall-jnl-5051.jpg'),
    isFeatured: true,
    description: 'Stunning halo-style wall light with golden accents and crystal texture. (Model: JNL-5051)'
  },
  {
    id: 'l10',
    name: 'Pineapple Crystal Wall Sconce',
    category: 'led-lighting',
    price: 4800,
    image: getAssetPath('images/wall-jnl-2765.jpg'),
    isFeatured: false,
    description: 'Unique pineapple-inspired crystal wall sconce for a touch of tropical elegance. (Model: JNL-2765)'
  },
  {
    id: 'l11',
    name: 'Elegant Halo Wall Light',
    category: 'led-lighting',
    price: 4300,
    image: getAssetPath('images/wall-jnl-5052.jpg'),
    isFeatured: true,
    description: 'Breathtaking halo-style wall light with a decorative golden base. (Model: JNL-5052)'
  },
  {
    id: 'l12',
    name: 'Radiant Crystalline Wall Sconce',
    category: 'led-lighting',
    price: 4100,
    image: getAssetPath('images/wall-jnl-5050.jpg'),
    isFeatured: false,
    description: 'Sophisticated wall sconce with a crystalline textures and radiant output. (Model: JNL-5050)'
  },
  {
    id: 'l13',
    name: 'Floral Sparkle Wall Lamp',
    category: 'led-lighting',
    price: 4600,
    image: getAssetPath('images/wall-jnl-2770.jpg'),
    isFeatured: true,
    description: 'Charming floral-shaped wall lamp with diamond geometric accents. (Model: JNL-2770)'
  },
  {
    id: 'l14',
    name: 'Glittering Shell Wall Sconce',
    category: 'led-lighting',
    price: 3900,
    image: getAssetPath('images/wall-jnl-5019.jpg'),
    isFeatured: false,
    description: 'Unique shell-inspired wall sconce with a glittering glass finish. (Model: JNL-5019)'
  },
  {
    id: 'l15',
    name: 'Twisted Diamond Wall Light',
    category: 'led-lighting',
    price: 4900,
    image: getAssetPath('images/wall-jnl-2811.jpg'),
    isFeatured: true,
    description: 'Artistic wall light featuring a twisted metal frame and diamond-shaped crystal. (Model: JNL-2811)'
  },
  {
    id: 'l16',
    name: 'Royal Goblet Wall Sconce',
    category: 'led-lighting',
    price: 4400,
    image: getAssetPath('images/wall-jnl-5053.jpg'),
    isFeatured: false,
    description: 'Stately wall sconce with a goblet-shaped crystalline fixture. (Model: JNL-5053)'
  },
  {
    id: 'l17',
    name: 'Crescent Moon Wall Lamp',
    category: 'led-lighting',
    price: 4700,
    image: getAssetPath('images/wall-jnl-5047.jpg'),
    isFeatured: true,
    description: 'Elegant crescent-shaped wall lamp with fine crystalline textures. (Model: JNL-5047)'
  },
  {
    id: 'l18',
    name: 'Feather Glow Wall Sconce',
    category: 'led-lighting',
    price: 3500,
    image: getAssetPath('images/wall-jnl-808.jpg'),
    isFeatured: false,
    description: 'Artistic wall sconce featuring a golden feather design and matching globe. (Model: JNL-808)'
  },
  {
    id: 'l19',
    name: 'Diamond Peak Wall Light',
    category: 'led-lighting',
    price: 4950,
    image: getAssetPath('images/wall-jnl-5055.jpg'),
    isFeatured: true,
    description: 'Modern diamond-framed wall light with a brilliant crystalline core. (Model: JNL-5055)'
  },
  {
    id: 'l20',
    name: 'Crystalline Orb Wall Sconce',
    category: 'led-lighting',
    price: 4250,
    image: getAssetPath('images/wall-jnl-5044.jpg'),
    isFeatured: false,
    description: 'Sophisticated wall sconce with a textured crystalline orb and blue accents. (Model: JNL-5044)'
  },
  {
    id: 'l21',
    name: 'Minimalist Wood-Base Wall Light',
    category: 'led-lighting',
    price: 3600,
    image: getAssetPath('images/wall-light-jnl-6010.jpg'),
    isFeatured: false,
    description: 'Contemporary wall light with a natural wood base and frosted white shade. (Model: JNL-6010)'
  },
  {
    id: 'l22',
    name: 'Vintage LED Filament Bulb',
    category: 'led-lighting',
    price: 450,
    image: getAssetPath('images/led-filament-bulb.jpg'),
    isFeatured: true,
    description: 'Energy-efficient 4W amber LED filament bulb with warm vintage glow (E27).'
  },
  {
    id: 'l23',
    name: 'Wall Light Effects Display',
    category: 'led-lighting',
    price: 0,
    image: getAssetPath('images/wall-light-effects-display.jpg'),
    isFeatured: false,
    description: 'Showcase of various beam patterns and artistic wall light effects available.'
  },
  {
    id: 'l24',
    name: 'Premium Showroom Collection',
    category: 'led-lighting',
    price: 0,
    image: getAssetPath('images/showroom-display-1.jpg'),
    isFeatured: true,
    description: 'Glimpse into our exclusive showroom featuring premium wall lights and chandeliers.'
  },
  {
    id: 'l25',
    name: 'Modern Smoke-Globe Wall Lamp',
    category: 'led-lighting',
    price: 4800,
    image: getAssetPath('images/wall-light-jnl-9090.jpg'),
    isFeatured: true,
    description: 'Elegant pull-chain wall lamp with a smoky glass globe and brass accents. (Model: JNL-9090)'
  },
  {
    id: 'c20',
    name: 'Industrial Crystal Chandelier',
    category: 'chandeliers',
    price: 34500,
    image: getAssetPath('images/chandelier-black-gold.jpg'),
    isFeatured: true,
    description: 'Striking black and gold industrial chandelier with tiered crystal drops.'
  },
  {
    id: 'c21',
    name: 'Golden Scale Crystal Chandelier',
    category: 'chandeliers',
    price: 38000,
    image: getAssetPath('images/chandelier-gold-scales.jpg'),
    isFeatured: true,
    description: 'Premium chandelier featuring a golden scale-patterned rim and multi-tier crystals.'
  },
  {
    id: 'c22',
    name: 'Pink Blossom Ceiling Chandelier',
    category: 'chandeliers',
    price: 29000,
    image: getAssetPath('images/chandelier-pink-floral.jpg'),
    isFeatured: false,
    description: 'Whimsical ceiling chandelier with pink floral accents and crystalline textures.'
  },
  {
    id: 'c23',
    name: 'Multi-Color LED Ring Ceiling Light',
    category: 'chandeliers',
    price: 32000,
    image: getAssetPath('images/ceiling-light-blue-pink.jpg'),
    isFeatured: true,
    description: 'Modern ceiling light with blue and pink LED rings and decorative branch motifs.'
  },
  {
    id: 'c24',
    name: 'Square Geometric LED Chandelier',
    category: 'chandeliers',
    price: 31500,
    image: getAssetPath('images/chandelier-square-led-v2.jpg'),
    isFeatured: false,
    description: 'Contemporary multi-frame square LED chandelier with a brilliant golden finish.'
  },
  {
    id: 'l26',
    name: '3D Etched Teapot Decorative Light',
    category: 'specialty-lamps',
    price: 1800,
    image: getAssetPath('images/decorative-3d-teapot.jpg'),
    isFeatured: true,
    description: 'Unique 3D etched glass lamp featuring an artistic teapot design with a solid base.'
  },
  {
    id: 'l27',
    name: 'Classic Black Gate Lamp',
    category: 'led-lighting',
    price: 2400,
    image: getAssetPath('images/gate-light-classic-black.jpg'),
    isFeatured: false,
    description: 'Traditional weather-resistant outdoor gate lamp with a classic black finish.'
  },
  {
    id: 'l28',
    name: 'Modern Square Pillar Light',
    category: 'led-lighting',
    price: 3200,
    image: getAssetPath('images/gate-light-modern-square.jpg'),
    isFeatured: true,
    description: 'Sleek and robust square pillar light for modern home entrances and pathways.'
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
