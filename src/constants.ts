import { Product } from './pages/types';

export const PRODUCTS: Product[] = [
  {
    id: 'hoauto',
    name: 'HOAUTO — Home Automation Controller',
    category: 'Home',
    description: 'Complete home automation system controlling lights, fans, and high-current appliances through a mobile app or physical remote.',
    useCase: 'Smart homes, gated communities, residential buildings',
    features: ['App + remote control', 'Multi-device support', 'Real-time status', 'Energy monitoring'],
    image: 'https://picsum.photos/seed/smart-home-control/800/600'
  },
  {
    id: 'env-sensor',
    name: 'Environmental Sensor Suite',
    category: 'Home',
    description: 'IoT sensors that continuously monitor Humidity, AQI, Temperature, CO2, and Methane levels.',
    useCase: 'Homes, offices, warehouses with air quality concerns',
    features: ['Multi-parameter monitoring', 'Cloud upload', 'Mobile app alerts', '24/7 data logging'],
    image: 'https://picsum.photos/seed/air-quality-sensor/800/600'
  },
  {
    id: 'alarm-bell',
    name: 'Smart Alarm Bell System',
    category: 'Home',
    description: 'Wireless parallel alarm system that rings simultaneously across multiple floors or rooms.',
    useCase: 'Apartments, offices, schools, hospitals',
    features: ['Multi-floor simultaneous ring', 'Wireless', 'Easy installation', 'Battery-powered'],
    image: 'https://picsum.photos/seed/wireless-doorbell/800/600'
  },
  {
    id: 'security-camera',
    name: 'IoT Security Camera',
    category: 'Home',
    description: 'IoT-based security camera with an extremely compact form factor.',
    useCase: 'Home security, office monitoring, small retail',
    features: ['Very small form factor', 'IoT connected', 'Mobile streaming', 'Remote access'],
    image: 'https://picsum.photos/seed/security-camera/800/600'
  },
  {
    id: 'water-meter',
    name: 'Smart Water Meter',
    category: 'Home',
    description: 'IoT water consumption monitoring system for larger apartments and buildings.',
    useCase: 'Apartment complexes, real estate builders, societies',
    features: ['Per-unit consumption tracking', 'WiFi connected', 'Server upload', 'Mobile app dashboard'],
    image: 'https://picsum.photos/seed/water-meter/800/600'
  },
  {
    id: 'home-security-non-cam',
    name: 'Home Security Solution (Non-Camera)',
    category: 'Home',
    description: 'Camera-free home security system powered by battery + mains power.',
    useCase: 'Homes, small offices, rental properties',
    features: ['Non-camera privacy', 'Battery + power backup', 'Instant owner alerts', 'Loud deterrent hooter'],
    image: 'https://picsum.photos/seed/home-security-alarm/800/600'
  },
  {
    id: 'ups-router-std',
    name: 'UPS for WiFi Router (Standard)',
    category: 'Electronic',
    description: '12V UPS specifically designed for WiFi routers and network switches.',
    useCase: 'Homes, small offices, internet-dependent businesses',
    features: ['12V output', '3–4 hour backup', 'Compact design', 'Plug-and-play'],
    image: 'https://picsum.photos/seed/router-ups/800/600'
  },
  {
    id: 'ups-router-high',
    name: 'High Capacity Router UPS',
    category: 'Electronic',
    description: 'Higher capacity version of the router UPS with support for Airfiber routers.',
    useCase: 'Offices, ISPs, networking businesses, Airfiber installations',
    features: ['Higher battery capacity', 'Airfiber support', 'Multi-device power', 'Extended backup'],
    image: 'https://picsum.photos/seed/high-capacity-ups/800/600'
  },
  {
    id: 'smart-extension',
    name: 'WiFi Smart Extension Cord',
    category: 'Electronic',
    description: 'Extension cord with built-in WiFi that allows users to turn on/off connected appliances remotely.',
    useCase: 'Homes, offices, remote equipment control',
    features: ['Mobile app control', 'WiFi enabled', 'Remote on/off', 'No installation required'],
    image: 'https://picsum.photos/seed/smart-extension-cord/800/600'
  },
  {
    id: 'sefsy',
    name: 'SEFSY (Schef — Smart Cooker)',
    category: 'Kitchen',
    description: 'India\'s smart automatic low-oil cooker. Built for how you actually live.',
    useCase: 'Busy working couples, health-conscious professionals',
    features: ['One-Shot Loading', 'Low-Oil Cooking', 'App Controlled', '50+ Indian Recipes'],
    image: 'https://picsum.photos/seed/smart-cooker/800/600',
    isSefsy: true
  },
  {
    id: 'roti-maker',
    name: 'Automatic Roti Maker',
    category: 'Kitchen',
    description: 'Fully automatic roti/fulka maker that produces consistently soft and thin rotis.',
    useCase: 'Homes, cloud kitchens, restaurants, canteens',
    features: ['Automatic operation', 'Consistently soft & thin output', 'Hands-free cooking', 'Food-grade materials'],
    image: 'https://picsum.photos/seed/roti-maker-machine/800/600'
  },
  {
    id: 'weighing-scale',
    name: 'Smart Weighing Scale',
    category: 'Industrial',
    description: 'Industrial-grade weighing scale connected to mobile app with RF reader and thermal printer integration.',
    useCase: 'Warehouses, manufacturing units, logistics, retail',
    features: ['Mobile app integration', 'Wireless display', 'RF reader', 'Printer integration', 'Cloud data'],
    image: 'https://picsum.photos/seed/industrial-weighing-scale/800/600'
  },
  {
    id: 'moisture-meter',
    name: 'Grain Moisture Meter',
    category: 'Industrial',
    description: 'Precision IoT device for measuring moisture content in 12 different grains.',
    useCase: 'Grain warehouses, mandis, food processing, agri-businesses',
    features: ['12 grain types supported', 'Precise measurement', 'Digital readout', 'Mobile app compatible'],
    image: 'https://picsum.photos/seed/grain-moisture-meter/800/600'
  },
  {
    id: 'hpt-sensor',
    name: 'HPT Sensor — Warehouse Environment Monitor',
    category: 'Industrial',
    description: 'Industrial IoT sensor measuring Humidity, Pressure, Temperature, and CO2.',
    useCase: 'Grain warehouses, cold storage, food storage facilities',
    features: ['H+P+T+CO2 monitoring', 'IoT server upload', '6+ months battery life', 'Cloud dashboard'],
    image: 'https://picsum.photos/seed/warehouse-sensor/800/600'
  },
  {
    id: 'cctv-solutions',
    name: 'CCTV Solutions',
    category: 'Industrial',
    description: 'IoT-integrated CCTV surveillance systems for industrial and commercial applications.',
    useCase: 'Factories, warehouses, industrial premises',
    features: ['IoT integration', 'Remote monitoring', 'Industrial-grade', 'Cloud storage'],
    image: 'https://picsum.photos/seed/cctv-surveillance/800/600'
  },
  {
    id: 'stack-counter',
    name: 'Stack Counter',
    category: 'Industrial',
    description: 'IoT device used in grain warehouses to automatically count and measure grain bags.',
    useCase: 'Grain warehouses, bulk storage, logistics',
    features: ['Automatic counting', 'Server upload', 'Remote control', 'Inventory tracking'],
    image: 'https://picsum.photos/seed/warehouse-inventory/800/600'
  },
  {
    id: 'pad-disposer',
    name: 'Sanitary Pad Disposer',
    category: 'Industrial',
    description: 'Automated IoT device for the safe and hygienic burning/disposal of used sanitary pads.',
    useCase: 'Schools, hospitals, public restrooms, offices',
    features: ['Fully automatic operation', 'IoT controlled', 'Hygienic disposal', 'Auto on/off'],
    image: 'https://picsum.photos/seed/sanitary-disposer/800/600'
  },
  {
    id: 'attendance-system',
    name: 'Attendance System',
    category: 'Industrial',
    description: 'IoT-based attendance recording system for students and employees.',
    useCase: 'Schools, colleges, offices, factories',
    features: ['Cloud-based', 'Real-time sync', 'IoT hardware', 'Easy enrollment', 'Export to Excel/CSV'],
    image: 'https://picsum.photos/seed/attendance-system/800/600'
  },
  {
    id: 'sleep-monitor',
    name: 'Tygtron Sleep Monitor',
    category: 'Medical',
    description: 'Advanced IoT sleep monitoring device placed under the mattress.',
    useCase: 'Hospitals, clinics, elderly care, personal health',
    features: ['Non-wearable', 'Pattern detection', 'Disturbance logging', 'Deep sleep tracking', 'Cloud data'],
    image: 'https://picsum.photos/seed/sleep-monitor/800/600'
  },
  {
    id: 'lora-vital',
    name: 'LoRa-Based Vital Sensor',
    category: 'Medical',
    description: 'Low-radiation, non-internet-based system designed to receive and transmit vital parameters within 2 KM range.',
    useCase: 'Hospitals, rural healthcare, military, remote patient monitoring',
    features: ['2 KM range', 'Non-internet LoRa protocol', 'Low radiation', 'Vital parameter monitoring'],
    image: 'https://picsum.photos/seed/medical-vital-sensor/800/600'
  },
  {
    id: 'fall-detector',
    name: 'Fall Detector',
    category: 'Medical',
    description: 'Highly accurate fall detection sensor with over 90% detection accuracy.',
    useCase: 'Elderly care, hospitals, rehabilitation centers, assisted living',
    features: ['90%+ accuracy', 'BLE connectivity', 'Instant server upload', 'Discreet wearable'],
    image: 'https://picsum.photos/seed/fall-detector/800/600'
  },
  {
    id: 'patient-calling',
    name: 'Patient Calling System',
    category: 'Medical',
    description: 'Wireless patient calling system for hospitals and clinics.',
    useCase: 'Hospitals, clinics, nursing homes, ICUs',
    features: ['Wireless', 'Extendable range with repeaters', 'Audio + visual alert', 'Multi-room compatible'],
    image: 'https://picsum.photos/seed/nurse-call-system/800/600'
  }
];
