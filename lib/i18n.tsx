"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar" | "id" | "ms";

type I18nContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  tm: <T = unknown>(key: string, fallback?: T) => T;
};

const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "Arabic",
  id: "Indonesia",
  ms: "Malaysia",
};

const messages = {
  en: {
    common: {
      whatsapp: "WhatsApp",
      bookNow: "Book Now",
      bookOnWhatsApp: "Book on WhatsApp",
      learnMore: "Learn more",
      viewServices: "View Services",
      viewFleet: "View Fleet",
      route: "Route",
      fromSar: "From SAR",
      passengers: "Passengers",
      luggages: "Luggages",
      language: "Language",
      cityList: ["Makkah", "Madinah", "Jeddah", "Riyadh"],
    },
    nav: {
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
      items: [
        { label: "Home", href: "/" },
        { 
          label: "Our Services", 
          children: [
            {
              label: "Our Taxi Services",
              items: [
                { label: "Airport Taxi Services", href: "/airport-taxi-services" },
                { label: "Umrah Taxi Services", href: "/umrah-taxi-services" },
                { label: "Hotel Transfers Taxi", href: "/hotel-transfers-taxi" },
                { label: "Private Taxi Services", href: "/private-taxi-services" }
              ]
            },
            {
              label: "Our Other Services",
              items: [
                { label: "Damm Service", href: "/damm-services" },
                { label: "Fidyah & Kaffarah", href: "/fidyah-and-kaffarah" },
                { label: "Umrah & Hajj e Badal", href: "/hajj-and-umrah-badal" },
                { label: "Qurbani Services", href: "/qurbani-services" },
                { label: "Quran Waqf Services", href: "/quran-waqf-services" },
                { label: "Umrah Guider Services", href: "/umrah-guider-services" },
                { label: "Dates Distribution Services", href: "/dates-distribution-services" },
                { label: "Food Package Distribution", href: "/food-package-distribution" },
                { label: "Water Distribution Services", href: "/water-distribution-services" },
                { label: "Umrah Guide and PDF", href: "/umrah-guide-and-pdf" }
              ]
            },
            {
              label: "Hotel Booking",
              items: [
                { label: "Hotel Booking Makkah", href: "/hotel-booking-makkah" },
                { label: "Hotel Booking Madinah", href: "/hotel-booking-madinah" }
              ]
            }
          ]
        },
        {
          label: "Our Fleet & Routes",
          children: [
            { label: "Sedan", href: "/sedan-sonata-taxi" },
            { label: "Minivan", href: "/hyundai-minivan-staria" },
            { label: "GMC", href: "/gmc-yukon-xl" },
            { label: "Hiace Microbus", href: "/toyota-hiace-or-hiroof-2" },
            { label: "Coaster", href: "/coaster" },
            { label: "Bus", href: "/bus" }
          ]
        },
        { label: "Taxi Services Pricing", href: "/our-taxi-services-pricing" },
        {
          label: "Routes",
          children: [
            { label: "Makkah to Madinah", href: "/makkah-to-madinah" },
            { label: "Madinah to Makkah", href: "/madinah-to-makkah" },
            { label: "Jeddah Airport to Makkah", href: "/jeddah-airport-to-makkah" },
            { label: "Makkah to Jeddah", href: "/makkah-to-jeddah" },
            { label: "Madinah Airport to Hotels", href: "/madinah-aiport-to-hotels" }
          ]
        },
        { label: "Book Now", href: "https://wa.me/966598401594" },
        { label: "Blog", href: "/blog" }
      ]
    },
    hero: {
      badge: "Trusted Umrah Taxi Service",
      titleGold: "Trusted Umrah Taxi Service",
      titleMain: "Makkah & Madinah (24/7)",
      subtitle: "Fixed fares, licensed drivers, airport pickups & intercity transfers.",
      typewriter: ["Makkah Transfer", "Madinah Transfer", "Jeddah Airport Pickup", "Ziyarat Tours"],
      trustBadges: ["Licensed Drivers", "Fixed Pricing", "24/7", "Multilingual"],
    },
    services: {
      eyebrow: "WHAT WE OFFER",
      title: "Our Services",
      description:
        "Haramain Umrah Taxi gives you the best Umrah taxi services in the Haramain holy cities with affordable pricing and a luxurious fleet that respects your comfort.",
      items: [
        {
          title: "Jeddah Airport to Makkah Transfer",
          description:
            "We offer 24/7 taxi service from Jeddah airport to Makkah and Makkah to Jeddah and Jeddah airport with fixed pricing, private rides, and group options.",
        },
        {
          title: "Makkah to Madinah",
          description:
            "Safe, affordable, and professional intercity trips with modern vehicles and dependable service.",
        },
        {
          title: "Madinah to Makkah",
          description:
            "Dedicated return transfer service with spacious vehicles for families and groups, available 24/7.",
        },
        {
          title: "Airport Pickups (Jeddah, Madinah, Taif)",
          description:
            "Reliable airport taxi pickups with advance booking and professional drivers.",
        },
        {
          title: "Ziyarat Tours (Makkah, Madinah, Taif, Jeddah, Badar, AlUla)",
          description:
            "Trusted Ziyarat transport to holy and historical sites across major Saudi cities.",
        },
        {
          title: "Family, Group and Event Travel",
          description:
            "Spacious vans, coasters, and buses for pilgrims, families, and special events.",
        },
        {
          title: "Group / Bus Bookings",
          description:
            "Affordable group transport for schools, universities, and large pilgrim groups.",
        },
        {
          title: "Private Taxi and VIP Services",
          description:
            "Luxury GMCs, sedans, and uniformed chauffeurs with privacy and comfort.",
        },
      ],
    },
    fleet: {
      eyebrow: "OUR FLEET",
      title: "Our Fleet",
      description: "We provide reliable, air-conditioned cars, vans, and buses for every journey.",
      names: ["Sedan", "Mini Van", "Luxury GMC", "Hiace Microbus", "Coaster", "Bus"],
      descriptions: [
        "Perfect for small families or quick private Umrah cars in Saudi Arabia.",
        "Ideal for Makkah taxi services and Madinah taxi services for families.",
        "Best choice for private Umrah taxi services in Saudi Arabia.",
        "Trusted for ziyarat taxi services in Saudia Arab.",
        "Perfect for group taxi services in Makkah and Madinah.",
        "Great for Hajj groups using taxi services in Saudia Arab.",
      ],
    },
    pricing: {
      eyebrow: "TRANSPARENT PRICING",
      title: "Pricing",
      subtitle: "We believe your Umrah journey shouldn't empty your wallet.",
    },
    routes: {
      eyebrow: "ROUTES WE COVER",
      title: "Major Routes Covered by our Taxi Service in Saudi Arabia",
      description:
        "We cover the most popular routes for pilgrims and travelers across Saudi Arabia.",
      startLabel: "Taxi Services from",
    },
    ziyarat: {
      eyebrow: "SACRED ZIYARAT",
      title: "Ziyarat Tours in Makkah, Madinah & Beyond",
      intro: "Deepen your spiritual connection with every sacred site you visit.",
      body:
        "We enhance your Umrah journey with meaningful Ziyarat tours across the holy cities through our Ziyarah taxi services.",
      cta: "Book your private taxi right away!",
      cardCta: "Book Ziyarat",
      cities: ["Makkah", "Madinah", "Jeddah", "Taif", "Badr", "AlUla"],
    },
    about: {
      eyebrow: "ABOUT US",
      title: "Your Trusted Partner for Sacred Journeys",
      paragraphs: [
        "At Haramain Umrah Taxi, we are proud to offer you the best taxi service in Saudi Arabia with dedicated Umrah taxi services that honor your spiritual path.",
        "Our specialized Ziyarat taxi services smoothly connect you to every blessed destination, Makkah, Madinah, Riyadh, Badar, Taif, and AlUla.",
        "Beyond transportation, we offer essential religious services including Hajj, Umrah Badal, Qurbani, and Damm arrangements.",
      ],
    },
    why: {
      serviceTitle: "Umrah Taxi Services in Makkah",
      serviceParagraphs: [
        "At Haramain Umrah Taxi, we provide reliable Umrah taxi services in Makkah and throughout Saudi Arabia.",
        "Choose from standard rides to luxury Umrah taxi options; our packages are crafted to match your unique needs.",
      ],
      serviceLocations: "Our Service Locations",
      eyebrow: "WHY CHOOSE US?",
      title: "Built Around Your Pilgrimage",
      description:
        "Haramain Umrah taxi service gives you multiple options for convenient taxi trips across Madinah, Makkah, and Jeddah.",
      stats: ["Pilgrims Served", "Cities Covered", "Availability", "Fixed Pricing"],
      features: [
        {
          title: "Licensed Drivers",
          desc: "We provide professional, licensed drivers for the best taxi services in Saudi Arabia.",
        },
        {
          title: "Fixed Pricing",
          desc: "We guarantee clear rates for Makkah taxi services, Madinah taxi services, and Umrah taxi services.",
        },
        {
          title: "24/7 Availability",
          desc: "We run round-the-clock Umrah taxi services in Makkah and Madinah.",
        },
        {
          title: "Modern Fleet",
          desc: "Reliable cars including Sedans, Hyundai Staria, GMC Yukon XL, and Hiace.",
        },
        {
          title: "Multilingual Support",
          desc: "Our drivers understand multiple languages and assist foreign pilgrims.",
        },
        {
          title: "Women & Family Friendly",
          desc: "Safe, private, and respectful taxi services for women and families.",
        },
      ],
    },
    howToBook: {
      eyebrow: "BOOKING PROCESS",
      title: "4 Easy Steps to Book our Taxi",
      step: "Step",
      steps: [
        {
          title: "Contact Us",
          desc: "Contact us through WhatsApp or simply click the book now button.",
        },
        {
          title: "Get an Estimate",
          desc: "We provide an estimate based on your selected route and fleet.",
        },
        {
          title: "Secure your Ride",
          desc: "Finalize your ride after complete satisfaction.",
        },
        {
          title: "Relax & Enjoy",
          desc: "Now sit back and enjoy your journey.",
        },
      ],
    },
    testimonials: {
      eyebrow: "PILGRIM REVIEWS",
      title: "Trusted by Thousands",
    },
    otherServices: {
      title: "Our Other Services",
      description:
        "Beyond transportation, we support your complete Umrah experience with essential religious services.",
      items: ["Damm Service", "Umrah and Hajj Badal", "Quran Waqaf", "Umrah Guide"],
      cta: "Learn More",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Common Questions",
    },
    cta: {
      title: "Begin Your Sacred Journey Today",
      subtitle: "Fixed fares. Professional drivers. Zero surprises.",
    },
    footer: {
      description:
        "Your trusted partner for premium, reliable, and comfortable transportation across the holy cities of Saudi Arabia.",
      servicesTitle: "Our Services",
      services: [
        "Jeddah Airport Transfers",
        "Makkah to Madinah",
        "Ziyarat Tours",
        "VIP & Luxury Taxis",
        "Group Bus Bookings",
      ],
      citiesTitle: "Cities We Cover",
      contactTitle: "Contact Us",
      whatsappNote: "Available 24/7 on WhatsApp",
      mailNote: "For general inquiries",
      operationTitle: "24/7 Operations",
      operationNote: "Always ready for your journey",
      rights: "All rights reserved.",
      proud: "Proudly serving pilgrims across Saudi Arabia",
    },
    airportTaxiPage: {
      title: "Airport Transfers | Madinah Airport & Jeddah Airport Taxi",
      heroTitle: "Airport Transfers",
      heroSub: "Madinah Airport & Jeddah Airport Taxi",
      introTitle: "Reliable Airport Transfers in Saudi Arabia",
      introText1: "Your plane touches down after hours in the air. You are exhausted, juggling luggage, and trying to figure out how to reach your hotel. The airport feels overwhelming with crowds pushing everywhere. You need reliable transport right now, not confusion and stress.",
      introText2: "We solved this problem completely. Our airport taxi in Saudi Arab service meets you at arrivals and takes you straight to your destination with no haggling and waiting. Just clean vehicles, professional drivers, and fixed prices you can trust.",
      whyTitle: "Why Choose Professional Airport Transfers?",
      whyText: "Airport transfers in Jeddah and Madinah make or break your first impression of Saudi Arabia. Landing in an unfamiliar country, you need someone reliable waiting for you. Random taxi drivers at airports often overcharge tourists. They take longer routes. They argue about prices at the end.",
      whyDetail1: "We eliminate all these problems. When you book with Haramain Umrah Taxi, your driver tracks your flight automatically. Delays do not matter. We adjust pickup times without you calling us. Your driver waits at arrivals holding a sign with your name clearly printed. You spot him immediately and walk straight to your vehicle.",
      whyDetail2: "Our vehicles stay clean and comfortable always. Air conditioning works perfectly. Seats feel comfortable even after long rides. You relax completely knowing you paid a fair, fixed price upfront.",
      jeddahTitle: "Jeddah Airport Taxi Service",
      jeddahSub: "King Abdulaziz International Airport",
      jeddahText: "King Abdulaziz International Airport Jeddah serves as the main gateway for international pilgrims. This massive airport handles millions of passengers yearly. You need expert navigation here. Our Jeddah airport taxi service operates from all terminals 24/7 throughout the year.",
      jeddahTerminals: "Most international flights land at Terminal 1. Our drivers know this terminal intimately. They wait at the correct exit gates, saving you from wandering around confused. The taxi at King Abdul Aziz International Airport, Jeddah, pickup process takes just minutes from landing to sitting in your vehicle. We serve the North Terminal too, which handles budget airlines. The Hajj Terminal activates during pilgrimage seasons for dedicated Hajj flights. Regardless of which terminal you arrive at, we pick you up efficiently. Our drivers communicate with you via WhatsApp, confirming exact meeting points before your arrival.",
      distanceTitle: "Distance and Travel Time from Jeddah Airport",
      distanceText1: "The Jeddah airport to Makkah distance spans approximately 92.2 kilometers. This journey takes 60-90 minutes, depending on traffic conditions. We know the fastest routes at different times of day. Morning and late evening usually offer smoother traffic flow.",
      distanceText2: "Our taxi from Jeddah airport to Makkah drivers monitor traffic apps constantly. They choose alternate routes, avoiding congestion when needed. You reach Makkah hotels faster than with drivers unfamiliar with the area. Time savings matter when you are eager to perform your first Umrah rituals.",
      distanceText3: "The drive passes through modern highways with excellent road conditions. You see the landscape gradually change from coastal plains to mountainous terrain approaching Makkah. Our drivers point out landmarks, helping you orient yourself in your new environment.",
      directTitle: "Jeddah Airport to Makkah Taxi - Direct Transfer",
      directText1: "Jeddah airport to Makkah taxi represents our most popular route. Our taxi from Jeddah airport to Makkah service includes Miqat stops when needed. If you arrive without Ihram, we take you to the designated Miqat points. Our driver waits patiently while you prepare for Umrah properly.",
      directText2: "He shows you the facilities and ensures you complete everything correctly. Families with elderly members or young children appreciate our patience and care. We help load luggage.",
      pricingTitle: "Pricing for Jeddah to Makkah Transfer",
      pricingDetail: "Our sedan service from Jeddah Airport to Makkah costs SAR 250 for up to 4 passengers. The luxury GMC costs SAR 450 and seats 7 passengers comfortably. Staria costs SAR 300, accommodating 7 passengers with more luggage space. Larger groups travel in our Hiace microbus (12 passengers) for SAR 400 or Coaster (18 passengers) for SAR 600. These prices include fuel, tolls, and all charges. You pay nothing extra at journey's end.",
      returnTitle: "Makkah to Jeddah Airport Taxi - Return Service",
      returnText1: "Makkah to Jeddah airport taxi handles your departure just as professionally. You tell us your flight time. We calculate the perfect pickup time, ensuring you reach the airport with adequate check-in time. International flights need an early arrival. We factor this automatically into our timing.",
      returnText2: "Our driver arrives at your Makkah hotel 10 minutes early. He helps with luggage loading. The Mecca to Jeddah airport journey follows the same efficient route we use for arrivals. You reach the airport relaxed and on time, never rushing or panicking about missing flights.",
      busTitle: "Bus Service vs Private Taxi",
      busText1: "The Makkah to Jeddah airport bus option exists for budget travelers. Buses cost less but offer no flexibility. They follow fixed schedules. You must reach the bus station yourself and share space with many passengers. Luggage space is limited.",
      busText2: "Our private taxi costs more but saves you significant stress and time. You leave when you want. You do not adjust your schedule to bus timings and travel directly from your hotel door to the airport terminal. The extra cost is worth the convenience, especially after completing your spiritual journey.",
      madinahTitle: "Madinah Airport Taxi Service",
      madinahSub: "Prince Mohammad Bin Abdulaziz Airport",
      madinahText: "The Prince Mohammad bin Abdulaziz International Airport transfer connects you to the Prophet's city beautifully. This smaller airport feels less overwhelming than Jeddah. Our Madinah airport taxi service operates here with the same excellence you expect. The Mohammed bin Abdulaziz airport is situated outside the main city. You cannot walk to hotels from here. Reliable transport becomes essential. Our airport taxi in Madinah meets you at the single terminal building.",
      nabawiTitle: "Madinah Airport to Masjid Nabawi Taxi",
      nabawiText1: "The taxi from Madinah Airport to masjid nabawi represents a sacred journey for pilgrims. The distance spans approximately 20-22 kilometers. This drive takes 20-30 minutes, depending on traffic around the mosque. Our Madinah Airport to masjid nabawi taxi service takes you directly to hotels near the Prophet's Mosque.",
      nabawiText2: "The area around Masjid Nabawi features numerous hotels at different price ranges. Our drivers know them all by name and location. You do not explain complicated directions. Your luggage stays safe in our locked vehicle. This flexibility shows our understanding of pilgrims' priorities.",
      madinahBusTitle: "Madinah Airport Bus Fare",
      madinahBusText: "The Madinah airport to masjid nabawi bus fare costs significantly less than private taxis. However, buses do not run frequently. You might wait 30-60 minutes for the next bus. After long flights, this waiting feels exhausting. Buses drop you at main stations, not at your specific hotel. You still need additional transport with your luggage. The total time and hassle often equal or exceed private taxi costs when calculated properly. Our service provides better value considering comfort and convenience.",
      intercityTitle: "Jeddah Airport to Madinah Taxi - Intercity Transfer",
      intercityText1: "Some pilgrims fly directly to Jeddah but want to visit Madinah first. The Jeddah airport to Madinah taxi handles this longer journey. The distance is approximately 416 kilometers. This drive takes 4-5 hours on excellent highways.",
      intercityText2: "Our taxi from Jeddah airport to Madinah service uses comfortable vehicles perfect for long journeys. We provide rest stops at clean facilities along the way. You stretch your legs and use the bathroom. We never rush you during these breaks. The drive passes through changing landscapes showing Saudi Arabia's geographical diversity. Our drivers explain what you see, making the journey educational and interesting.",
      conclusionTitle: "Your Sacred Journey Starts Here",
      conclusionText: "Your sacred journey deserves smooth, reliable transportation from the moment you land. Whether you need an airport taxi in Jeddah or airport transfers in Madinah, we serve you with professionalism and respect. At Haramain Umrah Taxi, we have perfected airport transfer services through years of dedicated work. Our fixed prices, licensed drivers, and 24/7 availability make us the trusted choice for thousands of pilgrims.",
      pricingNote: "All prices include fuel, tolls, and all charges. No hidden costs.",
    },
  },
  ar: {
    common: {
      whatsapp: "واتساب",
      bookNow: "احجز الآن",
      bookOnWhatsApp: "احجز عبر واتساب",
      learnMore: "اعرف المزيد",
      viewServices: "عرض الخدمات",
      viewFleet: "عرض الأسطول",
      route: "المسار",
      fromSar: "ابتداءً من",
      passengers: "ركاب",
      luggages: "حقائب",
      language: "اللغة",
      cityList: ["مكة", "المدينة", "جدة", "الرياض"],
    },
    nav: {
      brandTop: "الحرمين",
      brandBottom: "عمرة تاكسي",
      items: [
        { label: "الرئيسية", href: "/" },
        { 
          label: "خدماتنا", 
          children: [
            {
              label: "خدمات التاكسي",
              items: [
                { label: "خدمات تاكسي المطار", href: "/airport-taxi-services" },
                { label: "خدمات تاكسي العمرة", href: "/umrah-taxi-services" },
                { label: "تاكسي نقل الفنادق", href: "/hotel-transfers-taxi" },
                { label: "خدمة التاكسي الخاص", href: "/private-taxi-services" }
              ]
            },
            {
              label: "خدماتنا الأخرى",
              items: [
                { label: "خدمة الدم", href: "/damm-services" },
                { label: "الفدية والكفارة", href: "/fidyah-and-kaffarah" },
                { label: "بدل الحج والعمرة", href: "/hajj-and-umrah-badal" },
                { label: "خدمات الأضحية", href: "/qurbani-services" },
                { label: "خدمات وقف القرآن", href: "/quran-waqf-services" },
                { label: "خدمات دليل العمرة", href: "/umrah-guider-services" },
                { label: "خدمات توزيع التمر", href: "/dates-distribution-services" },
                { label: "خدمات توزيع الطعام", href: "/food-package-distribution" },
                { label: "خدمات توزيع الماء", href: "/water-distribution-services" },
                { label: "دليل العمرة و PDF", href: "/umrah-guide-and-pdf" }
              ]
            },
            {
              label: "حجز الفنادق",
              items: [
                { label: "حجز فنادق مكة", href: "/hotel-booking-makkah" },
                { label: "حجز فنادق المدينة", href: "/hotel-booking-madinah" }
              ]
            }
          ]
        },
        {
          label: "أسطولنا ومساراتنا",
          children: [
            { label: "سيدان", href: "/sedan-sonata-taxi" },
            { label: "ميني فان", href: "/hyundai-minivan-staria" },
            { label: "جي إم سي", href: "/gmc-yukon-xl" },
            { label: "هايس ميكروباص", href: "/toyota-hiace-or-hiroof-2" },
            { label: "كوستر", href: "/coaster" },
            { label: "حافلة", href: "/bus" }
          ]
        },
        { label: "أسعار خدمات التاكسي", href: "/our-taxi-services-pricing" },
        {
          label: "المسارات",
          children: [
            { label: "مكة إلى المدينة", href: "/makkah-to-madinah" },
            { label: "المدينة إلى مكة", href: "/madinah-to-makkah" },
            { label: "مطار جدة إلى مكة", href: "/jeddah-airport-to-makkah" },
            { label: "مكة إلى جدة", href: "/makkah-to-jeddah" },
            { label: "مطار المدينة إلى الفنادق", href: "/madinah-aiport-to-hotels" }
          ]
        },
        { label: "احجز الآن", href: "https://wa.me/966598401594" },
        { label: "المدونة", href: "/blog" }
      ]
    },
    hero: {
      badge: "خدمة عمرة تاكسي موثوقة",
      titleGold: "خدمة عمرة تاكسي موثوقة",
      titleMain: "مكة والمدينة (24/7)",
      subtitle: "أسعار ثابتة، سائقون مرخصون، استقبال مطارات وتنقل بين المدن.",
      typewriter: ["نقل مكة", "نقل المدينة", "استقبال مطار جدة", "جولات زيارات"],
      trustBadges: ["سائقون مرخصون", "أسعار ثابتة", "24/7", "متعدد اللغات"],
    },
    services: {
      eyebrow: "ما الذي نقدمه",
      title: "خدماتنا",
      description:
        "نقدم أفضل خدمات عمرة تاكسي في الحرمين بأسعار مناسبة وأسـطول مريح.",
      items: [
        { title: "نقل مطار جدة إلى مكة", description: "خدمة 24/7 بأسعار ثابتة وخيارات خاصة وجماعية." },
        { title: "مكة إلى المدينة", description: "رحلات آمنة ومريحة بين المدينتين بسيارات حديثة." },
        { title: "المدينة إلى مكة", description: "خدمة عودة مخصصة للعائلات والمجموعات على مدار الساعة." },
        { title: "استقبال المطارات", description: "استقبال موثوق من مطارات جدة والمدينة والطائف." },
        { title: "جولات زيارات", description: "نقل موثوق للمواقع الدينية والتاريخية." },
        { title: "سفر العائلات والمجموعات", description: "فانات وحافلات مريحة للمناسبات والرحلات." },
        { title: "حجوزات جماعية / باص", description: "نقل جماعي اقتصادي للمدارس والمجموعات الكبيرة." },
        { title: "تاكسي خاص وVIP", description: "سيارات فاخرة مع خصوصية وراحة كاملة." },
      ],
    },
    fleet: {
      eyebrow: "أسطولنا",
      title: "أسطولنا",
      description: "نوفر سيارات وفانات وباصات مكيفة وموثوقة لكل رحلة.",
      names: ["سيدان", "ميني فان", "جي إم سي فاخر", "هايس ميكروباص", "كوستر", "باص"],
      descriptions: [
        "مثالي للعائلات الصغيرة أو الرحلات الخاصة السريعة.",
        "مناسب لعائلات مكة والمدينة.",
        "أفضل خيار للرحلات الخاصة المميزة.",
        "موثوق لخدمات الزيارات.",
        "مثالي للنقل الجماعي.",
        "ممتاز لمجموعات الحج الكبيرة.",
      ],
    },
    pricing: { eyebrow: "أسعار شفافة", title: "الأسعار", subtitle: "نؤمن أن رحلة العمرة لا يجب أن تكون مكلفة." },
    routes: {
      eyebrow: "المسارات التي نغطيها",
      title: "أهم المسارات المغطاة بخدماتنا في السعودية",
      description: "نغطي أشهر المسارات للحجاج والمسافرين في المملكة.",
      startLabel: "خدمات تاكسي من",
    },
    ziyarat: {
      eyebrow: "زيارات مقدسة",
      title: "جولات زيارات في مكة والمدينة وما حولهما",
      intro: "عزز ارتباطك الروحي بكل موقع تزوره.",
      body: "نثري رحلتك بجولات زيارات ذات معنى عبر المدن المقدسة.",
      cta: "احجز سيارتك الخاصة الآن!",
      cardCta: "احجز الزيارات",
      cities: ["مكة", "المدينة", "جدة", "الطائف", "بدر", "العلا"],
    },
    about: {
      eyebrow: "من نحن",
      title: "شريكك الموثوق للرحلات المقدسة",
      paragraphs: [
        "في الحرمين عمرة تاكسي نفخر بتقديم أفضل خدمة تاكسي في السعودية لدعم رحلتك الروحية.",
        "خدماتنا المتخصصة في الزيارات تربطك بكل الوجهات المباركة في المملكة.",
        "إلى جانب النقل، نقدم خدمات دينية أساسية مثل البدل والدمم.",
      ],
    },
    why: {
      serviceTitle: "خدمات عمرة تاكسي في مكة",
      serviceParagraphs: [
        "نوفر لك خدمات عمرة تاكسي موثوقة في مكة وجميع أنحاء السعودية.",
        "اختر من الرحلات العادية إلى الفاخرة حسب احتياجك.",
      ],
      serviceLocations: "مناطق الخدمة",
      eyebrow: "لماذا نحن؟",
      title: "مصممون لراحتك في الرحلة",
      description: "كل خدمة عندنا مصممة لتجعل رحلة العمرة مريحة وسهلة وخالية من القلق.",
      stats: ["حجاج مخدومون", "مدن مغطاة", "التوفر", "أسعار ثابتة"],
      features: [
        { title: "سائقون مرخصون", desc: "سائقون محترفون ومرخصون لخدمة موثوقة." },
        { title: "أسعار ثابتة", desc: "أسعار واضحة بدون مفاجآت." },
        { title: "توفر 24/7", desc: "خدمة متواصلة على مدار الساعة." },
        { title: "أسطول حديث", desc: "سيارات حديثة ونظيفة ومريحة." },
        { title: "دعم متعدد اللغات", desc: "سائقون يتحدثون عدة لغات لخدمة الحجاج." },
        { title: "مناسب للعائلات والنساء", desc: "خدمة آمنة وخاصة ومحترمة للجميع." },
      ],
    },
    howToBook: {
      eyebrow: "خطوات الحجز",
      title: "4 خطوات سهلة لحجز رحلتك",
      step: "الخطوة",
      steps: [
        { title: "تواصل معنا", desc: "تواصل عبر واتساب أو زر الحجز." },
        { title: "احصل على عرض سعر", desc: "نعطيك سعراً حسب المسار ونوع المركبة." },
        { title: "ثبت حجزك", desc: "أكد حجزك بعد الرضا الكامل." },
        { title: "استرخ واستمتع", desc: "اجلس واستمتع برحلتك." },
      ],
    },
    testimonials: { eyebrow: "آراء الحجاج", title: "موثوق من الآلاف" },
    otherServices: {
      title: "خدماتنا الأخرى",
      description: "إلى جانب النقل، ندعم تجربة العمرة بخدمات دينية مهمة.",
      items: ["خدمة الدم", "عمرة وحج بدل", "وقف المصحف", "دليل العمرة"],
      cta: "اعرف المزيد",
    },
    faq: { eyebrow: "الأسئلة الشائعة", title: "أسئلة متكررة" },
    cta: {
      title: "ابدأ رحلتك المقدسة اليوم",
      subtitle: "أسعار ثابتة. سائقون محترفون. بدون مفاجآت.",
    },
    footer: {
      description: "شريكك الموثوق للنقل المريح والآمن في المدن المقدسة بالسعودية.",
      servicesTitle: "خدماتنا",
      services: ["نقل مطار جدة", "مكة إلى المدينة", "جولات زيارات", "تاكسي VIP", "حجوزات باصات"],
      citiesTitle: "المدن التي نخدمها",
      contactTitle: "تواصل معنا",
      whatsappNote: "متاح 24/7 على واتساب",
      mailNote: "للاستفسارات العامة",
      operationTitle: "تشغيل 24/7",
      operationNote: "جاهزون لرحلتك دائماً",
      rights: "جميع الحقوق محفوظة.",
      proud: "نفخر بخدمة الحجاج في جميع أنحاء السعودية",
    },
  },
  id: {
    common: {
      whatsapp: "WhatsApp",
      bookNow: "Pesan Sekarang",
      bookOnWhatsApp: "Pesan via WhatsApp",
      learnMore: "Pelajari lebih lanjut",
      viewServices: "Lihat Layanan",
      viewFleet: "Lihat Armada",
      route: "Rute",
      fromSar: "Mulai SAR",
      passengers: "Penumpang",
      luggages: "Bagasi",
      language: "Bahasa",
      cityList: ["Makkah", "Madinah", "Jeddah", "Riyadh"],
    },
    nav: {
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
      items: [
        { label: "Beranda", href: "/" },
        { 
          label: "Layanan Kami", 
          children: [
            {
              label: "Layanan Taksi Kami",
              items: [
                { label: "Layanan Taksi Bandara", href: "/airport-taxi-services" },
                { label: "Layanan Taksi Umrah", href: "/umrah-taxi-services" },
                { label: "Taksi Transfer Hotel", href: "/hotel-transfers-taxi" },
                { label: "Layanan Taksi Pribadi", href: "/private-taxi-services" }
              ]
            },
            {
              label: "Layanan Lainnya",
              items: [
                { label: "Layanan Damm", href: "/damm-services" },
                { label: "Fidyah & Kaffarah", href: "/fidyah-and-kaffarah" },
                { label: "Badal Haji & Umrah", href: "/hajj-and-umrah-badal" },
                { label: "Layanan Qurbani", href: "/qurbani-services" },
                { label: "Layanan Waqaf Quran", href: "/quran-waqf-services" },
                { label: "Layanan Pemandu Umrah", href: "/umrah-guider-services" },
                { label: "Layanan Distribusi Kurma", href: "/dates-distribution-services" },
                { label: "Layanan Distribusi Makanan", href: "/food-package-distribution" },
                { label: "Layanan Distribusi Air", href: "/water-distribution-services" },
                { label: "Panduan Umrah & PDF", href: "/umrah-guide-and-pdf" }
              ]
            },
            {
              label: "Pemesanan Hotel",
              items: [
                { label: "Pemesanan Hotel Makkah", href: "/hotel-booking-makkah" },
                { label: "Pemesanan Hotel Madinah", href: "/hotel-booking-madinah" }
              ]
            }
          ]
        },
        {
          label: "Armada & Rute Kami",
          children: [
            { label: "Sedan", href: "/sedan-sonata-taxi" },
            { label: "Minivan", href: "/hyundai-minivan-staria" },
            { label: "GMC", href: "/gmc-yukon-xl" },
            { label: "Hiace Microbus", href: "/toyota-hiace-or-hiroof-2" },
            { label: "Coaster", href: "/coaster" },
            { label: "Bus", href: "/bus" }
          ]
        },
        { label: "Harga Layanan Taksi", href: "/our-taxi-services-pricing" },
        {
          label: "Rute",
          children: [
            { label: "Makkah ke Madinah", href: "/makkah-to-madinah" },
            { label: "Madinah ke Makkah", href: "/madinah-to-makkah" },
            { label: "Bandara Jeddah ke Makkah", href: "/jeddah-airport-to-makkah" },
            { label: "Makkah ke Jeddah", href: "/makkah-to-jeddah" },
            { label: "Bandara Madinah ke Hotel", href: "/madinah-aiport-to-hotels" }
          ]
        },
        { label: "Pesan Sekarang", href: "https://wa.me/966598401594" },
        { label: "Blog", href: "/blog" }
      ]
    },
    hero: {
      badge: "Layanan Taksi Umrah Terpercaya",
      titleGold: "Layanan Taksi Umrah Terpercaya",
      titleMain: "Makkah & Madinah (24/7)",
      subtitle: "Tarif tetap, sopir berlisensi, penjemputan bandara & antar kota.",
      typewriter: ["Transfer Makkah", "Transfer Madinah", "Jemput Bandara Jeddah", "Tur Ziarah"],
      trustBadges: ["Sopir Berlisensi", "Harga Tetap", "24/7", "Multibahasa"],
    },
    services: {
      eyebrow: "LAYANAN KAMI",
      title: "Layanan Kami",
      description: "Kami menyediakan layanan taksi Umrah terbaik dengan harga terjangkau dan armada nyaman.",
      items: [
        { title: "Transfer Bandara Jeddah ke Makkah", description: "Layanan 24/7 dengan harga tetap dan opsi privat maupun grup." },
        { title: "Makkah ke Madinah", description: "Perjalanan antar kota yang aman, nyaman, dan profesional." },
        { title: "Madinah ke Makkah", description: "Layanan transfer balik 24/7 dengan kendaraan luas." },
        { title: "Penjemputan Bandara", description: "Penjemputan bandara terpercaya di Jeddah, Madinah, dan Taif." },
        { title: "Tur Ziarah", description: "Transportasi ziarah terpercaya ke lokasi suci dan bersejarah." },
        { title: "Perjalanan Keluarga & Grup", description: "Van dan bus luas untuk keluarga, grup, dan acara." },
        { title: "Booking Grup / Bus", description: "Transportasi grup terjangkau untuk rombongan besar." },
        { title: "Taksi Privat & VIP", description: "Kendaraan mewah dengan privasi dan kenyamanan maksimal." },
      ],
    },
    fleet: {
      eyebrow: "ARMADA KAMI",
      title: "Armada Kami",
      description: "Mobil, van, dan bus ber-AC yang andal untuk setiap perjalanan.",
      names: ["Sedan", "Mini Van", "Luxury GMC", "Hiace Microbus", "Coaster", "Bus"],
      descriptions: [
        "Cocok untuk keluarga kecil atau perjalanan Umrah privat cepat.",
        "Ideal untuk keluarga di layanan Makkah dan Madinah.",
        "Pilihan terbaik untuk layanan taksi Umrah privat.",
        "Terpercaya untuk layanan taksi ziarah.",
        "Sempurna untuk layanan taksi grup.",
        "Cocok untuk grup Haji besar.",
      ],
    },
    pricing: { eyebrow: "HARGA TRANSPARAN", title: "Harga", subtitle: "Perjalanan Umrah Anda tidak harus menguras biaya." },
    routes: {
      eyebrow: "RUTE KAMI",
      title: "Rute Utama yang Kami Layani di Arab Saudi",
      description: "Kami melayani rute populer untuk jamaah dan wisatawan.",
      startLabel: "Layanan Taksi dari",
    },
    ziyarat: {
      eyebrow: "ZIARAH SUCI",
      title: "Tur Ziarah di Makkah, Madinah & Sekitarnya",
      intro: "Perdalam koneksi spiritual Anda di setiap lokasi suci.",
      body: "Kami meningkatkan perjalanan Umrah Anda dengan tur Ziarah yang bermakna.",
      cta: "Pesan taksi privat Anda sekarang!",
      cardCta: "Pesan Ziarah",
      cities: ["Makkah", "Madinah", "Jeddah", "Taif", "Badr", "AlUla"],
    },
    about: {
      eyebrow: "TENTANG KAMI",
      title: "Mitra Tepercaya untuk Perjalanan Suci",
      paragraphs: [
        "Kami bangga menyediakan layanan taksi terbaik di Arab Saudi untuk perjalanan spiritual Anda.",
        "Layanan ziarah kami menghubungkan Anda ke berbagai destinasi suci.",
        "Selain transportasi, kami juga menyediakan layanan keagamaan penting.",
      ],
    },
    why: {
      serviceTitle: "Layanan Taksi Umrah di Makkah",
      serviceParagraphs: [
        "Kami menyediakan layanan taksi Umrah yang andal di Makkah dan seluruh Arab Saudi.",
        "Pilih dari perjalanan standar hingga mewah sesuai kebutuhan Anda.",
      ],
      serviceLocations: "Lokasi Layanan Kami",
      eyebrow: "KENAPA KAMI?",
      title: "Dibangun untuk Perjalanan Ibadah Anda",
      description: "Semua fitur dirancang agar perjalanan Umrah Anda nyaman dan bebas khawatir.",
      stats: ["Jamaah Dilayani", "Kota Cakupan", "Ketersediaan", "Harga Tetap"],
      features: [
        { title: "Sopir Berlisensi", desc: "Sopir profesional dan berlisensi untuk layanan terbaik." },
        { title: "Harga Tetap", desc: "Tarif jelas dan transparan tanpa biaya tersembunyi." },
        { title: "Tersedia 24/7", desc: "Layanan Umrah dan Ziarah sepanjang waktu." },
        { title: "Armada Modern", desc: "Armada modern: Sedan, Staria, GMC Yukon XL, dan Hiace." },
        { title: "Dukungan Multibahasa", desc: "Sopir memahami banyak bahasa untuk membantu jamaah asing." },
        { title: "Ramah Wanita & Keluarga", desc: "Layanan aman, privat, dan nyaman untuk wanita serta keluarga." },
      ],
    },
    howToBook: {
      eyebrow: "PROSES PEMESANAN",
      title: "4 Langkah Mudah Memesan Taksi",
      step: "Langkah",
      steps: [
        { title: "Hubungi Kami", desc: "Hubungi via WhatsApp atau klik tombol pesan sekarang." },
        { title: "Dapatkan Estimasi", desc: "Kami berikan estimasi berdasarkan rute dan armada." },
        { title: "Amankan Perjalanan", desc: "Finalisasi pesanan setelah Anda puas." },
        { title: "Santai & Nikmati", desc: "Duduk santai dan nikmati perjalanan Anda." },
      ],
    },
    testimonials: { eyebrow: "ULASAN JAMAAH", title: "Dipercaya Ribuan Pelanggan" },
    otherServices: {
      title: "Layanan Lainnya",
      description: "Selain transportasi, kami mendukung pengalaman Umrah Anda secara menyeluruh.",
      items: ["Layanan Damm", "Umrah & Haji Badal", "Quran Waqaf", "Panduan Umrah"],
      cta: "Pelajari Lebih Lanjut",
    },
    faq: { eyebrow: "FAQ", title: "Pertanyaan Umum" },
    cta: { title: "Mulai Perjalanan Suci Anda Hari Ini", subtitle: "Tarif tetap. Sopir profesional. Tanpa kejutan." },
    footer: {
      description: "Mitra tepercaya Anda untuk transportasi premium dan nyaman di kota-kota suci Arab Saudi.",
      servicesTitle: "Layanan Kami",
      services: ["Transfer Bandara Jeddah", "Makkah ke Madinah", "Tur Ziarah", "Taksi VIP", "Booking Bus Grup"],
      citiesTitle: "Kota Cakupan",
      contactTitle: "Hubungi Kami",
      whatsappNote: "Tersedia 24/7 di WhatsApp",
      mailNote: "Untuk pertanyaan umum",
      operationTitle: "Operasi 24/7",
      operationNote: "Selalu siap untuk perjalanan Anda",
      rights: "Hak cipta dilindungi.",
      proud: "Melayani jamaah di seluruh Arab Saudi dengan bangga",
    },
  },
  ms: {
    common: {
      whatsapp: "WhatsApp",
      bookNow: "Tempah Sekarang",
      bookOnWhatsApp: "Tempah di WhatsApp",
      learnMore: "Ketahui lebih lanjut",
      viewServices: "Lihat Perkhidmatan",
      viewFleet: "Lihat Armada",
      route: "Laluan",
      fromSar: "Dari SAR",
      passengers: "Penumpang",
      luggages: "Bagasi",
      language: "Bahasa",
      cityList: ["Makkah", "Madinah", "Jeddah", "Riyadh"],
    },
    nav: {
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
      items: [
        { label: "Utama", href: "/" },
        { 
          label: "Perkhidmatan Kami", 
          children: [
            {
              label: "Perkhidmatan Teksi",
              items: [
                { label: "Teksi Lapangan Terbang", href: "/airport-taxi-services" },
                { label: "Teksi Umrah", href: "/umrah-taxi-services" },
                { label: "Teksi Transfer Hotel", href: "/hotel-transfers-taxi" },
                { label: "Perkhidmatan Teksi Persendirian", href: "/private-taxi-services" }
              ]
            },
            {
              label: "Perkhidmatan Lain",
              items: [
                { label: "Perkhidmatan Damm", href: "/damm-services" },
                { label: "Fidyah & Kaffarah", href: "/fidyah-and-kaffarah" },
                { label: "Badal Haji & Umrah", href: "/hajj-and-umrah-badal" },
                { label: "Perkhidmatan Qurbani", href: "/qurbani-services" },
                { label: "Perkhidmatan Waqaf Quran", href: "/quran-waqf-services" },
                { label: "Perkhidmatan Pemandu Umrah", href: "/umrah-guider-services" },
                { label: "Perkhidmatan Pengagihan Kurma", href: "/dates-distribution-services" },
                { label: "Perkhidmatan Pengagihan Makanan", href: "/food-package-distribution" },
                { label: "Perkhidmatan Pengagihan Air", href: "/water-distribution-services" },
                { label: "Panduan Umrah & PDF", href: "/umrah-guide-and-pdf" }
              ]
            },
            {
              label: "Tempah Hotel",
              items: [
                { label: "Tempah Hotel Makkah", href: "/hotel-booking-makkah" },
                { label: "Tempah Hotel Madinah", href: "/hotel-booking-madinah" }
              ]
            }
          ]
        },
        {
          label: "Armada & Laluan Kami",
          children: [
            { label: "Sedan", href: "/sedan-sonata-taxi" },
            { label: "Minivan", href: "/hyundai-minivan-staria" },
            { label: "GMC", href: "/gmc-yukon-xl" },
            { label: "Hiace Microbus", href: "/toyota-hiace-or-hiroof-2" },
            { label: "Coaster", href: "/coaster" },
            { label: "Bus", href: "/bus" }
          ]
        },
        { label: "Harga Teksi", href: "/our-taxi-services-pricing" },
        {
          label: "Laluan",
          children: [
            { label: "Makkah ke Madinah", href: "/makkah-to-madinah" },
            { label: "Madinah ke Makkah", href: "/madinah-to-makkah" },
            { label: "Lapangan Terbang Jeddah ke Makkah", href: "/jeddah-airport-to-makkah" },
            { label: "Makkah ke Jeddah", href: "/makkah-to-jeddah" },
            { label: "Lapangan Terbang Madinah ke Hotel", href: "/madinah-aiport-to-hotels" }
          ]
        },
        { label: "Tempah Sekarang", href: "https://wa.me/966598401594" },
        { label: "Blog", href: "/blog" }
      ]
    },
    hero: {
      badge: "Perkhidmatan Teksi Umrah Dipercayai",
      titleGold: "Perkhidmatan Teksi Umrah Dipercayai",
      titleMain: "Makkah & Madinah (24/7)",
      subtitle: "Tambang tetap, pemandu berlesen, jemputan lapangan terbang & antara bandar.",
      typewriter: ["Transfer Makkah", "Transfer Madinah", "Jemput Lapangan Terbang Jeddah", "Lawatan Ziarah"],
      trustBadges: ["Pemandu Berlesen", "Harga Tetap", "24/7", "Pelbagai Bahasa"],
    },
    services: {
      eyebrow: "APA YANG KAMI TAWARKAN",
      title: "Perkhidmatan Kami",
      description: "Kami menyediakan perkhidmatan teksi Umrah terbaik dengan harga berpatutan dan armada selesa.",
      items: [
        { title: "Transfer Lapangan Terbang Jeddah ke Makkah", description: "Perkhidmatan 24/7 dengan harga tetap untuk perjalanan persendirian atau berkumpulan." },
        { title: "Makkah ke Madinah", description: "Perjalanan antara bandar yang selamat, selesa, dan profesional." },
        { title: "Madinah ke Makkah", description: "Perkhidmatan pemindahan balik khusus, tersedia 24/7." },
        { title: "Jemputan Lapangan Terbang", description: "Jemputan lapangan terbang yang boleh dipercayai di Jeddah, Madinah, dan Taif." },
        { title: "Lawatan Ziarah", description: "Pengangkutan ziarah ke lokasi suci dan bersejarah." },
        { title: "Perjalanan Keluarga & Kumpulan", description: "Van dan bas luas untuk keluarga, kumpulan, dan acara." },
        { title: "Tempahan Kumpulan / Bas", description: "Pengangkutan berkumpulan berpatutan untuk kumpulan besar." },
        { title: "Teksi Persendirian & VIP", description: "Kenderaan mewah dengan privasi dan keselesaan tinggi." },
      ],
    },
    fleet: {
      eyebrow: "ARMADA KAMI",
      title: "Armada Kami",
      description: "Kereta, van, dan bas berhawa dingin yang boleh dipercayai untuk setiap perjalanan.",
      names: ["Sedan", "Mini Van", "Luxury GMC", "Hiace Microbus", "Coaster", "Bas"],
      descriptions: [
        "Sesuai untuk keluarga kecil atau perjalanan Umrah persendirian yang pantas.",
        "Ideal untuk keluarga bagi perkhidmatan Makkah dan Madinah.",
        "Pilihan terbaik untuk perkhidmatan teksi Umrah persendirian.",
        "Dipercayai untuk perkhidmatan teksi ziarah.",
        "Sempurna untuk perjalanan kumpulan.",
        "Sesuai untuk kumpulan Haji berskala besar.",
      ],
    },
    pricing: { eyebrow: "HARGA TELUS", title: "Harga", subtitle: "Perjalanan Umrah anda tidak sepatutnya membebankan." },
    routes: {
      eyebrow: "LALUAN KAMI",
      title: "Laluan Utama Perkhidmatan Teksi Kami di Arab Saudi",
      description: "Kami meliputi laluan popular untuk jemaah dan pelancong.",
      startLabel: "Perkhidmatan Teksi dari",
    },
    ziyarat: {
      eyebrow: "ZIARAH SUCI",
      title: "Lawatan Ziarah di Makkah, Madinah & Sekitarnya",
      intro: "Perdalam hubungan rohani anda di setiap lokasi suci.",
      body: "Kami menambah nilai perjalanan Umrah anda dengan lawatan Ziarah yang bermakna.",
      cta: "Tempah teksi persendirian anda sekarang!",
      cardCta: "Tempah Ziarah",
      cities: ["Makkah", "Madinah", "Jeddah", "Taif", "Badr", "AlUla"],
    },
    about: {
      eyebrow: "TENTANG KAMI",
      title: "Rakan Dipercayai untuk Perjalanan Suci",
      paragraphs: [
        "Kami berbangga menawarkan perkhidmatan teksi terbaik di Arab Saudi untuk perjalanan rohani anda.",
        "Perkhidmatan ziarah kami menghubungkan anda ke destinasi suci utama.",
        "Selain pengangkutan, kami juga menyediakan perkhidmatan keagamaan penting.",
      ],
    },
    why: {
      serviceTitle: "Perkhidmatan Teksi Umrah di Makkah",
      serviceParagraphs: [
        "Kami menyediakan perkhidmatan teksi Umrah yang boleh dipercayai di Makkah dan seluruh Arab Saudi.",
        "Pilih daripada perjalanan standard hingga mewah mengikut keperluan anda.",
      ],
      serviceLocations: "Lokasi Perkhidmatan Kami",
      eyebrow: "KENAPA PILIH KAMI?",
      title: "Dibina untuk Perjalanan Ibadah Anda",
      description: "Setiap ciri direka untuk menjadikan perjalanan Umrah anda selesa dan tanpa risau.",
      stats: ["Jemaah Dilayan", "Bandar Diliputi", "Ketersediaan", "Harga Tetap"],
      features: [
        { title: "Pemandu Berlesen", desc: "Pemandu profesional dan berlesen untuk perkhidmatan terbaik." },
        { title: "Harga Tetap", desc: "Kadar jelas tanpa caj tersembunyi." },
        { title: "Ketersediaan 24/7", desc: "Perkhidmatan Umrah dan Ziarah sepanjang masa." },
        { title: "Armada Moden", desc: "Armada moden termasuk Sedan, Staria, GMC Yukon XL, dan Hiace." },
        { title: "Sokongan Pelbagai Bahasa", desc: "Pemandu memahami pelbagai bahasa untuk bantu jemaah antarabangsa." },
        { title: "Mesra Wanita & Keluarga", desc: "Perkhidmatan selamat, peribadi, dan hormat untuk wanita dan keluarga." },
      ],
    },
    howToBook: {
      eyebrow: "PROSES TEMPAHAN",
      title: "4 Langkah Mudah Tempah Teksi",
      step: "Langkah",
      steps: [
        { title: "Hubungi Kami", desc: "Hubungi melalui WhatsApp atau klik butang tempah sekarang." },
        { title: "Dapatkan Anggaran", desc: "Kami beri anggaran berdasarkan laluan dan armada pilihan anda." },
        { title: "Sahkan Perjalanan", desc: "Lengkapkan tempahan selepas berpuas hati." },
        { title: "Santai & Nikmati", desc: "Duduk tenang dan nikmati perjalanan anda." },
      ],
    },
    testimonials: { eyebrow: "ULASAN JEMAAH", title: "Dipercayai Ribuan Pelanggan" },
    otherServices: {
      title: "Perkhidmatan Lain Kami",
      description: "Selain pengangkutan, kami menyokong pengalaman Umrah anda secara menyeluruh.",
      items: ["Perkhidmatan Damm", "Umrah dan Haji Badal", "Quran Waqaf", "Panduan Umrah"],
      cta: "Ketahui Lagi",
    },
    faq: { eyebrow: "FAQ", title: "Soalan Lazim" },
    cta: { title: "Mulakan Perjalanan Suci Anda Hari Ini", subtitle: "Tambang tetap. Pemandu profesional. Tiada kejutan." },
    footer: {
      description: "Rakan dipercayai anda untuk pengangkutan premium yang selesa di bandar suci Arab Saudi.",
      servicesTitle: "Perkhidmatan Kami",
      services: ["Transfer Lapangan Terbang Jeddah", "Makkah ke Madinah", "Lawatan Ziarah", "Teksi VIP", "Tempahan Bas Kumpulan"],
      citiesTitle: "Bandar Liputan",
      contactTitle: "Hubungi Kami",
      whatsappNote: "Tersedia 24/7 di WhatsApp",
      mailNote: "Untuk pertanyaan umum",
      operationTitle: "Operasi 24/7",
      operationNote: "Sentiasa sedia untuk perjalanan anda",
      rights: "Hak cipta terpelihara.",
      proud: "Berbangga berkhidmat untuk jemaah di seluruh Arab Saudi",
    },
  },
} as const;

const I18nContext = createContext<I18nContextValue | null>(null);

function getNestedValue(source: unknown, key: string): unknown {
  return key.split(".").reduce<unknown>((obj, part) => {
    if (obj && typeof obj === "object" && part in (obj as Record<string, unknown>)) {
      return (obj as Record<string, unknown>)[part];
    }
    return undefined;
  }, source);
}

function resolveLocale(raw: string | null): Locale {
  if (!raw) return "en";
  const short = raw.toLowerCase().slice(0, 2);
  if (short === "ar") return "ar";
  if (short === "id") return "id";
  if (short === "ms") return "ms";
  return "en";
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("locale") : null;
    const preferred = resolveLocale(stored || (typeof navigator !== "undefined" ? navigator.language : "en"));
    setLocaleState(preferred);
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", next);
    }
  };

  const value = useMemo<I18nContextValue>(() => {
    const dict = messages[locale] ?? messages.en;
    return {
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      t: (key: string, fallback = key) => {
        const hit = getNestedValue(dict, key);
        return typeof hit === "string" ? hit : fallback;
      },
      tm: <T,>(key: string, fallback?: T): T => {
        const hit = getNestedValue(dict, key);
        return (hit as T) ?? (fallback as T);
      },
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return {
    ...ctx,
    localeLabels,
  };
}
