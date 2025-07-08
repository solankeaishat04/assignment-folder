import { faCar } from "@fortawesome/free-solid-svg-icons"
import product1 from "../Image.jpg/Lexus 470.jpg"
import product2 from "../Image.jpg/lexus 570.jpg"
import product3 from "../Image.jpg/LEXUS RX 2025.jpg"
import product4 from "../Image.jpg/Rx 350.jpg"
import product5 from "../Image.jpg/AMG C63 BLACK.jpg"
import product6 from "../Image.jpg/Benz GLC.jpg"
import product7 from "../Image.jpg/Benz GLC.jpg"
import product8 from "../Image.jpg/Benz S class.jpg"
import product9 from "../Image.jpg/AMG C63.jpg"
import product10 from "../Image.jpg/BMW X3.jpg"
import product11 from "../Image.jpg/cybertruck.jpg"
import product12 from "../Image.jpg/Genesis.jpg"
import product13 from "../Image.jpg/Honda Accord.jpg"
import product14 from "../Image.jpg/Hyundai sonata.jpg"
import product15 from "../Image.jpg/Kia k5.jpg"
import product16 from "../Image.jpg/Nissan Altima.jpg"
import product17 from "../Image.jpg/PORSCHE MACAN.jpg"
import product18 from "../Image.jpg/Suburu Legacy.jpg"
import product19 from "../Image.jpg/toyota camry.jpg"

export const CarData = [
    {
        id: 1,
        icon: faCar,
        title: 'Luxury & Affordable Cars',
        description: 'Browse and purchase the best new and used cars with seamless online transactions.',
    },
    {
        id: 2,
        image: product1,
        title: 'Lexus Rx 450H',
        price: '$49,950',
        description: 'The hybrid costs a little more than gas-only models',
        available: true,
        features: ['Hybrid Engine', 'Premium Package', 'AWD', 'Leather Seats'],
        mileage: '18,345',
        icon: faCar
    },
    {
        id: 3,
        image: product2,
        title: '2021 Lexus LX570 S',
        price: '$168,767',
        description: 'Amended with new grille, guard, and 21-inch combination wheels',
        available: false,
        features: ['Luxury Package', 'Off-road Capable', 'Night Vision', '4-zone Climate'],
        mileage: '8,123',
        icon: faCar
    },
    {
        id: 4,
        image: product3,
        title: '2025 LEXUS RX',
        price: '$50,475-$62,870',
        description: 'Plush seats, high-quality materials, easy-to-use infotainment system',
        available: true,
        features: ['Panoramic Roof', 'Premium Sound', 'Wireless Charging'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 5,
        image: product4,
        title: '2023 RX 350',
        price: '$57,750',
        description: 'Color: Grecian Water - The best SUV ever made got even better for 2023',
        available: true,
        features: ['Sport Package', 'Heated Seats', '360 Camera'],
        mileage: '6,450',
        icon: faCar
    },
    {
        id: 6,
        image: product5,
        title: '2024 Mercedes-Benz C63 S E',
        price: '$131,983',
        description: 'Color: Black - AWD, Backup camera, Blind spot monitor, Bluetooth, Keyless Entry',
        available: true,
        features: ['AMG Performance', 'Carbon Fiber', 'Race Mode'],
        mileage: '3,200',
        icon: faCar
    },
    {
        id: 7,
        image: product6,
        title: '2025 Mercedes Benz GLC-Class',
        price: '$50,400-$54,550',
        description: 'Price premium over square-back GLC SUV, smaller cargo hold',
        available: true,
        features: ['MBUX System', 'Air Suspension', 'LED Lighting'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 8,
        image: product7,
        title: '2025 Mercedes Benz GLC-Class Coupe',
        price: '$60,450-$63,960',
        description: 'Competent and efficient powertrain, upscale cabin with updated all-wheel drive',
        available: true,
        features: ['Coupe Design', 'Driving Assist', 'Ambient Lighting'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 9,
        image: product8,
        title: '2025 Mercedes-Benz S-Class',
        price: '$117,750-$186,200',
        description: 'Standout premium design with every tech feature either standard or optional',
        available: true,
        features: ['Executive Seats', 'Burmester Sound', 'Autonomous Drive'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 10,
        image: product9,
        title: 'Mercedes-AMG C63 S E',
        price: '$68,000',
        description: '2.0L turbo inline-4 plug-in hybrid engine with track-ready performance',
        available: false,
        features: ['PHEV System', 'Race Timer', 'Performance Exhaust'],
        mileage: '12,300',
        icon: faCar
    },
    {
        id: 11,
        image: product10,
        title: '2025 BMW X3',
        price: '$51,125-$65,875',
        description: 'Two powerful engines with responsive handling and competitive fuel economy',
        available: true,
        features: ['M Sport Package', 'HUD Display', 'Parking Assist'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 12,
        image: product11,
        title: '2025 Tesla Cybertruck',
        price: '$81,095-$101,985',
        description: 'Giggle-producing acceleration with moonshot tech and unique design',
        available: true,
        features: ['Electric AWD', 'Bulletproof', 'Solar Charging'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 13,
        image: product12,
        title: '2025 Genesis GV70',
        price: '$47,650-$69,850',
        description: 'Midsize luxury SUV combining elegant design with advanced technology',
        available: true,
        features: ['Nappa Leather', '3D Cluster', 'Remote Parking'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 14,
        image: product13,
        title: '2025 Honda Accord',
        price: '$29,445-$40,450',
        description: 'Reliable and stylish midsize sedan with hybrid performance',
        available: true,
        features: ['Honda Sensing', 'Wireless CarPlay', 'Hybrid Engine'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 15,
        image: product14,
        title: '2025 Hyundai Sonata',
        price: '$28,095-$38,895',
        description: 'Sleek design with advanced technology and multiple powertrain options',
        available: true,
        features: ['Digital Key', 'Smart Park', 'Panoramic Display'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 16,
        image: product15,
        title: '2025 Kia K5',
        price: '$28,365-$35,865',
        description: 'Sport sedan blending performance with advanced technology',
        available: true,
        features: ['GT-Line', 'Smart Cruise', 'LED Headlights'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 17,
        image: product16,
        title: '2025 Nissan Altima',
        price: '$28,140-$35,970',
        description: 'ProPILOT Assist with premium comfort and VC-Turbo engine',
        available: true,
        features: ['Zero Gravity Seats', 'AWD', 'Safety Shield'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 18,
        image: product17,
        title: '2025 Porsche Macan',
        price: '$64,895-$76,495',
        description: 'Available in gasoline and electric variants with Porsche precision',
        available: true,
        features: ['Sport Chrono', 'PASM', 'PDK Transmission'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 19,
        image: product18,
        title: '2025 Suburu Legacy',
        price: '$26,380-$39,680',
        description: 'Standard AWD with EyeSight safety and turbocharged option',
        available: true,
        features: ['X-Mode', 'Harman Kardon', 'DriverFocus'],
        mileage: 'New',
        icon: faCar
    },
    {
        id: 20,
        image: product19,
        title: '2025 Toyota Camry',
        price: '$29,835-$37,560',
        description: 'Standard hybrid powertrain across all trim levels',
        available: true,
        features: ['TSS 3.0', 'Digital Key', 'Hybrid Synergy'],
        mileage: 'New',
        icon: faCar
    }
];