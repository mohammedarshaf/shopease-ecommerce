import { Product } from '../types/product';

// Generated high-fidelity asset paths
import heroLifestyleImg from '../assets/images/hero_shopease_lifestyle_1791008640632.jpg';
import audioHeadphonesImg from '../assets/images/cat_electronics_audio_1791008654213.jpg';
import ceramicLampImg from '../assets/images/cat_home_lamp_1791008675823.jpg';
import camelJacketImg from '../assets/images/cat_fashion_jacket_1791008703130.jpg';
import leatherBagImg from '../assets/images/cat_acc_leather_1791008716143.jpg';
import smartwatchImg from '../assets/images/prod_smartwatch_1791008730816.jpg';
import espressoImg from '../assets/images/prod_espresso_1791008742999.jpg';
import sunglassesImg from '../assets/images/prod_sunglasses_1791008756558.jpg';
import sneakersImg from '../assets/images/prod_sneakers_1791008768491.jpg';

export { heroLifestyleImg };

export const CATEGORIES = [
  'All',
  'Electronics',
  'Fashion',
  'Accessories',
  'Home Appliances',
] as const;

export const PRODUCTS: Product[] = [
  // --- ELECTRONICS ---
  {
    id: 'prod-elec-01',
    name: 'Apex Pro Wireless Studio Headphones',
    tagline: 'Active noise cancellation with 40-hour audiophile battery life',
    description: 'Engineered for discerning listeners and studio professionals. The Apex Pro combines 45mm neodymium drivers with adaptive hybrid noise cancellation and ultra-plush memory foam ear cups for all-day comfort. Features multipoint Bluetooth 5.3, high-resolution LDAC audio codec, and intuitive touch controls.',
    price: 249.99,
    originalPrice: 299.99,
    category: 'Electronics',
    image: audioHeadphonesImg,
    rating: 4.9,
    reviewsCount: 142,
    inStock: true,
    stockCount: 18,
    isFeatured: true,
    badge: 'Bestseller',
    colors: ['Matte Black', 'Silver Frost', 'Midnight Navy'],
    features: [
      'Hybrid active noise cancellation up to -38dB',
      '45mm custom tuned dynamic drivers',
      'Up to 40 hours continuous playback with ANC enabled',
      'Rapid charge: 10 minutes gives 5 hours playtime',
      'Multipoint pairing across smartphone and laptop'
    ],
    specs: {
      'Driver Size': '45mm Neodymium',
      'Frequency Response': '10Hz – 40,000Hz',
      'Weight': '255g',
      'Connectivity': 'Bluetooth 5.3 + 3.5mm Aux',
      'Warranty': '2 Years Limited Hardware'
    }
  },
  {
    id: 'prod-elec-02',
    name: 'ChronoSync Titanium Smartwatch',
    tagline: 'Aerospace-grade titanium chassis with dual-band GPS and health tracking',
    description: 'A precision timepiece crafted with grade-5 aerospace titanium and scratch-resistant sapphire crystal glass. Features always-on AMOLED display, real-time SpO2 monitoring, sleep stage diagnostics, 100+ workout modes, and 14-day extended battery life under everyday conditions.',
    price: 199.99,
    originalPrice: 229.99,
    category: 'Electronics',
    image: smartwatchImg,
    rating: 4.8,
    reviewsCount: 96,
    inStock: true,
    stockCount: 12,
    isFeatured: true,
    badge: 'Popular',
    colors: ['Titanium Gray', 'Space Black'],
    features: [
      'Grade 5 titanium casing with sapphire glass crystal',
      '1.43-inch Always-On AMOLED screen with 1000 nits peak brightness',
      'Dual-band GNSS with 5 satellite positioning systems',
      '50m water resistance (5 ATM rated)',
      '14-day battery life with intelligent power management'
    ],
    specs: {
      'Display': '1.43" AMOLED 466x466px',
      'Water Rating': '5 ATM (50m)',
      'Battery': '450mAh (up to 14 days)',
      'Sensors': 'Optical Heart Rate, SpO2, Barometer, Compass',
      'Compatibility': 'iOS 14+ and Android 9+'
    }
  },
  {
    id: 'prod-elec-03',
    name: 'Aura 360 Portable Bluetooth Speaker',
    tagline: '360-degree spatial acoustic dispersion with IP67 waterproof design',
    description: 'Designed to deliver rich, room-filling sound wherever adventure leads. Featuring dual passive radiators, custom acoustic wave guides, and seamless wireless stereo pairing. Built to withstand splashes, dust, and rain with rugged outdoor fabrics.',
    price: 89.99,
    originalPrice: 109.99,
    category: 'Electronics',
    image: audioHeadphonesImg, // Will also use fallback / themed visuals
    rating: 4.7,
    reviewsCount: 78,
    inStock: true,
    stockCount: 25,
    colors: ['Obsidian Black', 'Forest Green', 'Sand Stone'],
    features: [
      '360-degree cylindrical sound dispersion',
      'IP67 waterproof and dustproof submersible rating',
      '20 hours playtime on a single charge',
      'PartyConnect mode syncs up to 100 speakers together',
      'Integrated USB-C power bank to charge your phone'
    ],
    specs: {
      'Output Power': '30W RMS',
      'Bluetooth Version': '5.2',
      'Battery Capacity': '5200mAh',
      'Dimensions': '190 x 78 x 78 mm',
      'Weight': '620g'
    }
  },
  {
    id: 'prod-elec-04',
    name: 'UltraVision 4K HDR Web Camera',
    tagline: 'Broadcast-level optics with AI auto-framing and studio dual mics',
    description: 'Elevate your remote presentations, video conferences, and streaming broadcasts. Equipped with a Sony STARVIS sensor, f/2.0 glass lens, intelligent low-light compensation, and hardware privacy shutter.',
    price: 129.99,
    category: 'Electronics',
    image: smartwatchImg,
    rating: 4.6,
    reviewsCount: 54,
    inStock: true,
    stockCount: 14,
    colors: ['Graphite'],
    features: [
      '4K Ultra HD at 30fps or 1080p at 60fps',
      'Sony STARVIS image sensor for crystal low-light clarity',
      'Dual noise-cancelling omnidirectional stereo microphones',
      'Physical built-in privacy sliding shutter',
      'Plug-and-play USB-C connectivity with universal tripod thread'
    ],
    specs: {
      'Resolution': '3840 x 2160 pixels',
      'Field of View': '90° / 78° / 65° adjustable',
      'Focus': 'Fast Phase-Detection Autofocus',
      'Cable Length': '2.0m USB-C to USB-C',
      'OS Support': 'macOS, Windows, Linux, ChromeOS'
    }
  },

  // --- FASHION ---
  {
    id: 'prod-fash-01',
    name: 'Tailored Camel Wool Overcoat',
    tagline: 'Timeless outerwear spun from premium double-faced Australian wool blend',
    description: 'An enduring wardrobe cornerstone. Cut in a modern relaxed silhouette with notched lapels, horn buttons, deep welt pockets, and a clean back vent. Designed for layering over knitwear or formal tailoring with effortless refinement.',
    price: 189.99,
    originalPrice: 239.99,
    category: 'Fashion',
    image: camelJacketImg,
    rating: 4.9,
    reviewsCount: 88,
    inStock: true,
    stockCount: 9,
    isFeatured: true,
    badge: 'Limited Run',
    colors: ['Camel Heather', 'Charcoal Melange', 'Oatmeal'],
    features: [
      '80% Australian virgin wool, 20% recycled polyester blend',
      'Structured notched lapel with clean hand-stitched detailing',
      'Satin-lined sleeves for effortless layering glide',
      'Interior passport and phone security pocket',
      'Responsibly sourced wool with OEKO-TEX certification'
    ],
    specs: {
      'Material': '80% Virgin Wool / 20% Polyester',
      'Lining': '100% Bemberg Cupro in sleeves',
      'Fit': 'Modern Relaxed Fit',
      'Care': 'Specialist Dry Clean Only',
      'Origin': 'Crafted in Portugal'
    }
  },
  {
    id: 'prod-fash-02',
    name: 'Urban Artisan Court Sneakers',
    tagline: 'Hand-stitched Italian nappa leather sneakers with cushioned footbed',
    description: 'The definitive minimalist sneaker. Built by third-generation footwear artisans using buttery full-grain Italian leather, calfskin interior lining, and durable Margom vulcanized rubber cupsoles that mold to your feet over time.',
    price: 119.99,
    originalPrice: 149.99,
    category: 'Fashion',
    image: sneakersImg,
    rating: 4.8,
    reviewsCount: 112,
    inStock: true,
    stockCount: 15,
    isFeatured: true,
    colors: ['Pure White', 'White/Off-White', 'White/Navy'],
    features: [
      'Full-grain Italian nappa leather upper',
      'Waxed organic cotton laces with reinforced eyelets',
      'Removable ergonomic memory foam footbed with arch support',
      'Durable Italian Margom rubber cupsole',
      'Reinforced heel counter prevents slipping'
    ],
    specs: {
      'Upper': '100% Italian Nappa Calf Leather',
      'Sole': '100% Natural Vulcanized Rubber',
      'Lining': 'Breathable Calfskin Leather',
      'Sizes': 'US Men 7 - 13 / EU 40 - 46',
      'Craftsmanship': 'Handcrafted in Civitanova Marche, Italy'
    }
  },
  {
    id: 'prod-fash-03',
    name: 'Heavyweight Supima Cotton Hoodie',
    tagline: '480 GSM dense French terry fabric with ribbed side gussets',
    description: 'Substantial, structured, and luxuriously soft. Spun from 100% long-staple American Supima cotton, featuring a double-lined ergonomic hood, ribbed side stretch panels, and flatlock reinforced seams built for decades of wear.',
    price: 74.99,
    category: 'Fashion',
    image: camelJacketImg,
    rating: 4.7,
    reviewsCount: 65,
    inStock: true,
    stockCount: 22,
    colors: ['Washed Black', 'Heather Gray', 'Sage Green'],
    features: [
      '480 GSM custom knit heavyweight French terry',
      '100% American long-staple Supima cotton',
      'Pre-shrunk fabric retains shape wash after wash',
      'Ribbed side gussets provide unrestricted movement',
      'Clean kangaroo pouch pocket with bar-tack reinforcements'
    ],
    specs: {
      'Weight': '480 GSM (14.2 oz/sq yd)',
      'Fiber': '100% Supima Cotton',
      'Fit': 'Relaxed Boxy Fit',
      'Care': 'Machine wash cold, lay flat to dry',
      'Origin': 'Knitted and assembled in Los Angeles, USA'
    }
  },
  {
    id: 'prod-fash-04',
    name: 'Relaxed Tailored Linen Trousers',
    tagline: 'Breezy French Normandy flax linen with elasticated drawstring waist',
    description: 'Effortless warm-weather sophistication. Crafted from pure Normandy flax linen that breathes comfortably in warm weather and develops a soft drape with wear. Finished with an internal drawcord and tailored front pleats.',
    price: 64.99,
    category: 'Fashion',
    image: camelJacketImg,
    rating: 4.6,
    reviewsCount: 43,
    inStock: true,
    stockCount: 16,
    colors: ['Natural Flax', 'Navy', 'Olive'],
    features: [
      '100% certified European flax linen',
      'Comfortable half-elastic waist with internal herringbone cord',
      'Single subtle front pleat for tailored drape',
      'Two slant side pockets and button-through rear pockets',
      'Garment-dyed for vintage softness and reduced shrinkage'
    ],
    specs: {
      'Material': '100% French Normandy Linen',
      'Inseam': '31 inches (customizable cuff)',
      'Fit': 'Straight Relaxed Leg',
      'Closure': 'YKK Brass Zipper & Corozo Nut Button',
      'Care': 'Cold wash gentle cycle'
    }
  },

  // --- ACCESSORIES ---
  {
    id: 'prod-acc-01',
    name: 'Florentine Full-Grain Leather Messenger',
    tagline: 'Hand-burnished vegetable-tanned leather with solid brass hardware',
    description: 'An executive leather briefcase and messenger designed to develop an exquisite patina with each journey. Houses up to a 16-inch laptop in a padded sleeve, alongside organizational slots for notebooks, pens, and chargers.',
    price: 159.99,
    originalPrice: 189.99,
    category: 'Accessories',
    image: leatherBagImg,
    rating: 4.9,
    reviewsCount: 104,
    inStock: true,
    stockCount: 8,
    isFeatured: true,
    badge: 'Artisan Pick',
    colors: ['Vintage Tan', 'Espresso Brown', 'Onyx Black'],
    features: [
      'Vegetable-tanned full-grain Tuscan leather',
      'Dedicated padded pocket fits laptops up to 16 inches',
      'Cast solid brass buckles and YKK Excella zippers',
      'Detachable ergonomic leather shoulder strap with sliding pad',
      'Reinforced base panel with protective brass feet'
    ],
    specs: {
      'Dimensions': '40 x 30 x 9 cm (15.7 x 11.8 x 3.5 in)',
      'Weight': '1.35 kg',
      'Capacity': '12 Liters',
      'Laptop Pocket': 'Fits up to 16" MacBook Pro',
      'Leather Origin': 'Santa Croce sull\'Arno, Tuscany'
    }
  },
  {
    id: 'prod-acc-02',
    name: 'Solstice Polarized Acetate Sunglasses',
    tagline: 'Handcrafted Italian acetate frames with glare-reducing mineral lenses',
    description: 'Classic styling meets optical precision. Constructed with Mazzucchelli cellulose acetate and scratch-resistant green mineral glass lenses providing 100% UVA/UVB protection and exceptional visual contrast.',
    price: 89.99,
    originalPrice: 119.99,
    category: 'Accessories',
    image: sunglassesImg,
    rating: 4.8,
    reviewsCount: 67,
    inStock: true,
    stockCount: 20,
    isFeatured: true,
    colors: ['Amber Tortoise', 'Gloss Black', 'Crystal Honey'],
    features: [
      'Mazzucchelli 1849 cellulose acetate frame',
      'Category 3 polarized mineral glass lenses',
      'Custom 5-barrel German OBE hinges for longevity',
      'Anti-reflective inner lens coating reduces eye strain',
      'Includes recycled leather protective hard case and microfiber cloth'
    ],
    specs: {
      'Frame Width': '142 mm',
      'Bridge Width': '21 mm',
      'Lens Diameter': '49 mm',
      'Temple Length': '145 mm',
      'UV Protection': 'UV400 (100% UVA & UVB)'
    }
  },
  {
    id: 'prod-acc-03',
    name: 'Minimalist RFID Bifold Wallet',
    tagline: 'Ultra-slim profile holding 8 cards with integrated cash clip',
    description: 'Streamline your daily carry. Engineered with aerospace RFID-shielding inner lining to protect against digital skimming, wrapped in buttery top-grain leather that slides smoothly into front pockets without bulk.',
    price: 44.99,
    category: 'Accessories',
    image: leatherBagImg,
    rating: 4.7,
    reviewsCount: 89,
    inStock: true,
    stockCount: 30,
    colors: ['Cognac Tan', 'Midnight Black'],
    features: [
      'Accommodates 8 credit cards plus folded currency',
      'Certified RFID-blocking security barrier',
      'Quick-access thumb slot on exterior card sleeve',
      'Precision turned edges with bonded nylon stitching',
      'Ultra-thin 8mm profile when loaded'
    ],
    specs: {
      'Dimensions': '10.5 x 7.8 x 0.8 cm',
      'Weight': '42g',
      'Material': 'Top-Grain Cowhide Leather',
      'Capacity': '6-10 cards + banknotes',
      'Warranty': '3 Years Warranty'
    }
  },
  {
    id: 'prod-acc-04',
    name: 'Solid Brass Geometric Keychain & Carabiner',
    tagline: 'Precision machined solid naval brass with titanium split ring',
    description: 'An everyday carry essential milled from a solid billet of naval brass. Designed to clip onto belt loops or bags with a secure spring mechanism that ages gracefully into a rich antique golden patina.',
    price: 28.99,
    category: 'Accessories',
    image: sunglassesImg,
    rating: 4.6,
    reviewsCount: 38,
    inStock: true,
    stockCount: 45,
    colors: ['Brushed Brass', 'Black Oxide'],
    features: [
      'CNC-milled from solid C3604 naval brass',
      'Integrated bottle opener and box scorer tool',
      'Heavy-duty titanium grade-5 key ring included',
      'Hand-tumbled satin finish',
      'Engineered spring-gate with smooth return snap'
    ],
    specs: {
      'Length': '72 mm',
      'Width': '28 mm',
      'Thickness': '6 mm',
      'Weight': '55g',
      'Material': 'Solid Naval Brass'
    }
  },

  // --- HOME APPLIANCES ---
  {
    id: 'prod-home-01',
    name: 'Lumina Cordless Ceramic Ambient Lamp',
    tagline: 'Touch-dimmable warm LED illumination with rechargeable 24-hr battery',
    description: 'A sculptural source of gentle, glare-free light for dining tables, nightstands, and terrace evenings. Hand-glazed ceramic base with a matte aluminum shade that transitions seamlessly across 3 warm color temperatures.',
    price: 79.99,
    originalPrice: 99.99,
    category: 'Home Appliances',
    image: ceramicLampImg,
    rating: 4.9,
    reviewsCount: 92,
    inStock: true,
    stockCount: 14,
    isFeatured: true,
    badge: 'New Arrival',
    colors: ['Warm Sand', 'Terracotta', 'Off-White'],
    features: [
      'Handcrafted natural ceramic base with tactile matte glaze',
      '3-stage capacitive touch dimming (10%, 50%, 100%)',
      'Warm 2700K sunset light with 95+ CRI natural color rendering',
      'USB-C rechargeable with up to 24 hours cordless run time',
      'IP44 splash resistance suitable for covered outdoor patios'
    ],
    specs: {
      'Dimensions': '24 cm H x 15 cm Diameter',
      'Battery': '4000mAh Lithium-ion',
      'Charging Time': '3.5 hours to full',
      'Light Output': '250 Lumens (2700K Warm)',
      'Weight': '880g'
    }
  },
  {
    id: 'prod-home-02',
    name: 'Barista Pro Compact Espresso Machine',
    tagline: '15-bar Italian pump with PID temperature control and stainless steam wand',
    description: 'Craft café-caliber espresso, silky lattes, and microfoam cappuccinos at home. Compact stainless steel footprint featuring thermo-block rapid heating in 35 seconds, pre-infusion pressure profiling, and professional 51mm portafilter.',
    price: 229.99,
    originalPrice: 279.99,
    category: 'Home Appliances',
    image: espressoImg,
    rating: 4.8,
    reviewsCount: 118,
    inStock: true,
    stockCount: 10,
    isFeatured: true,
    badge: 'Top Rated',
    colors: ['Brushed Steel', 'Matte Black'],
    features: [
      'Italian 15-bar high-pressure vibration pump',
      'PID intelligent electronic temperature stability (92°C ± 1°C)',
      'Thermo-block heating system ready to brew in under 35 seconds',
      'Commercial-grade stainless steel steam wand for velvety microfoam',
      'Removable 1.2L transparent water reservoir with water filter'
    ],
    specs: {
      'Pump Pressure': '15 Bar Italian ULKA',
      'Power Rating': '1350W',
      'Water Tank': '1.2 Liters',
      'Portafilter Size': '51mm Professional Stainless',
      'Dimensions': '31 x 15 x 30 cm'
    }
  },
  {
    id: 'prod-home-03',
    name: 'PureAir Smart HEPA Air Purifier',
    tagline: 'True HEPA H13 filtration capturing 99.97% of airborne particles',
    description: 'Breathe cleaner indoor air. Cleans rooms up to 450 sq ft in 15 minutes. Featuring laser particle sensor with real-time digital air quality index display, whisper-quiet 22dB sleep mode, and integrated essential oil diffuser drawer.',
    price: 149.99,
    category: 'Home Appliances',
    image: ceramicLampImg,
    rating: 4.7,
    reviewsCount: 83,
    inStock: true,
    stockCount: 16,
    colors: ['Alpine White'],
    features: [
      '3-stage True HEPA H13 filtration + activated carbon pellet layer',
      'Laser PM2.5 particle sensor with auto fan adjustment',
      'Whisper-quiet sleep mode operating at only 22dB',
      'Covers spaces up to 450 sq ft with 4 air exchanges per hour',
      'Built-in aromatherapy sponge tray for essential oils'
    ],
    specs: {
      'CADR Rating': '250 m³/h',
      'Coverage Area': '450 sq ft (42 m²)',
      'Noise Level': '22dB – 50dB',
      'Power Consumption': '32W at max speed',
      'Filter Replacement': '6 – 8 Months indicator'
    }
  },
  {
    id: 'prod-home-04',
    name: 'Sculptural Gooseneck Electric Kettle',
    tagline: 'Variable temperature control with 1200W rapid boil & 60-min hold',
    description: 'Precision pour-over mastery. Counterbalanced handle and precision gooseneck spout offer pinpoint flow control. Features rotary dial temperature selection down to the exact degree with an illuminated OLED readout.',
    price: 68.99,
    originalPrice: 84.99,
    category: 'Home Appliances',
    image: espressoImg,
    rating: 4.8,
    reviewsCount: 71,
    inStock: true,
    stockCount: 19,
    colors: ['Matte Black', 'Brushed Copper'],
    features: [
      '1200W rapid heating boils 0.9L in under 3 minutes',
      'Precise temperature selection from 104°F to 212°F (40°C - 100°C)',
      '60-minute temperature hold mode',
      'Ergonomic counterbalanced composite handle',
      'Food-grade 304 stainless steel interior with zero plastic contact'
    ],
    specs: {
      'Capacity': '0.9 Liters (30 fl oz)',
      'Power': '1200W 120V 60Hz',
      'Material': '304 Food-Grade Stainless Steel',
      'Spout Type': 'Elongated Gooseneck Precision Flow',
      'Display': 'OLED Temperature & Timer Screen'
    }
  }
];
