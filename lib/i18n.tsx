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
      links: ["Services", "Fleet", "Pricing", "Ziyarat", "About", "FAQ"],
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
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
      links: ["الخدمات", "الأسطول", "الأسعار", "الزيارات", "من نحن", "الأسئلة"],
      brandTop: "الحرمين",
      brandBottom: "عمرة تاكسي",
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
      links: ["Layanan", "Armada", "Harga", "Ziarah", "Tentang", "FAQ"],
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
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
      links: ["Perkhidmatan", "Armada", "Harga", "Ziarah", "Tentang", "FAQ"],
      brandTop: "Haramain",
      brandBottom: "Umrah Taxi",
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
