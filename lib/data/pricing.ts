export type PricingRow = {
  id: string;
  route: string;
  sedan: number | null;
  gmc: number | null;
  staria: number | null;
  hiRoof: number | null;
  coaster: number | null;
  bus: number | null;
};

export const vehicleColumns = [
  { key: "sedan", label: "Sedan", subLabel: "Camry/Sonata" },
  { key: "gmc", label: "GMC", subLabel: "2024" },
  { key: "staria", label: "Staria", subLabel: "7 Seater" },
  { key: "hiRoof", label: "Hi-Roof", subLabel: "10 Seater" },
  { key: "coaster", label: "Coaster", subLabel: "18 Seater" },
  { key: "bus", label: "Bus", subLabel: "50 Seater" },
] as const;

export const pricingRows: PricingRow[] = [
  { id: "jed-city-to-mak-hotel", route: "Jeddah City to Makkah Hotel", sedan: 230, gmc: 400, staria: 280, hiRoof: 350, coaster: 550, bus: 950 },
  { id: "mak-hotel-to-jed-airport", route: "Makkah Hotel to Jeddah Airport", sedan: 200, gmc: 400, staria: 270, hiRoof: 280, coaster: 500, bus: 800 },
  { id: "mad-airport-to-mad-hotel", route: "Madina Airport to Madina Hotel", sedan: 170, gmc: 350, staria: 200, hiRoof: 250, coaster: 400, bus: 600 },
  { id: "mad-hotel-to-mad-airport", route: "Madina Hotel to Madina Airport", sedan: 130, gmc: 300, staria: 170, hiRoof: 200, coaster: 350, bus: 500 },
  { id: "mak-hotel-to-mak-ziyarat", route: "Makkah Hotel to Makkah Ziyarat", sedan: 170, gmc: 350, staria: 250, hiRoof: 330, coaster: 350, bus: 500 },
  { id: "mak-ziyarat-jaranah", route: "Makkah Ziyarat + Jaranah Miqat", sedan: 220, gmc: 400, staria: 300, hiRoof: 380, coaster: 400, bus: 550 },
  { id: "mak-aysha-miqat", route: "Makkah Hotel to Masjid Ayesha Miqat (Umrah)", sedan: 150, gmc: 250, staria: 170, hiRoof: 200, coaster: 300, bus: 400 },
  { id: "mak-jarana-miqat", route: "Makkah Hotel to Masjid Jarana Miqat (Umrah)", sedan: 170, gmc: 300, staria: 200, hiRoof: 250, coaster: 300, bus: 450 },
  { id: "mad-hotel-to-mad-ziyarat", route: "Madinah Hotel to Madinah Ziyarat", sedan: 170, gmc: 300, staria: 220, hiRoof: 270, coaster: 350, bus: 500 },
  { id: "mad-ziyarat-wadi-e-jinn", route: "Madinah Hotel to Madina Ziyarat + Wadi-e-Jinn", sedan: 220, gmc: 400, staria: 300, hiRoof: 370, coaster: 450, bus: 600 },
  { id: "mad-badar-return", route: "Madinah Hotel to Badar Ziyarat & Return", sedan: 380, gmc: 750, staria: 450, hiRoof: 550, coaster: 750, bus: 1000 },
  { id: "mak-taif-return", route: "Makkah Hotel to Taif Ziyarat & Return", sedan: 380, gmc: 750, staria: 450, hiRoof: 550, coaster: 750, bus: 1000 },
  { id: "mak-to-mad-hotel", route: "Makkah Hotel to Madinah Hotel", sedan: 400, gmc: 830, staria: 450, hiRoof: 550, coaster: 850, bus: 1200 },
  { id: "jed-city-to-mad-hotel", route: "Jeddah City to Madinah Hotel", sedan: 400, gmc: 830, staria: 450, hiRoof: 550, coaster: 850, bus: 1200 },
  { id: "mad-to-mak-hotel", route: "Madinah Hotel to Makkah Hotel", sedan: 400, gmc: 830, staria: 450, hiRoof: 550, coaster: 850, bus: 1200 },
  { id: "mad-to-jed-airport", route: "Madinah Hotel to Jeddah Airport", sedan: 400, gmc: 830, staria: 450, hiRoof: 550, coaster: 850, bus: 1200 },
  { id: "mak-via-badar-to-mad", route: "Makkah Hotel to Madina Hotel (Via Badar)", sedan: 500, gmc: 1000, staria: 550, hiRoof: 650, coaster: 1050, bus: 1400 },
  { id: "mad-via-badar-to-mak", route: "Madinah Hotel to Makkah Hotel (Via Badar)", sedan: 500, gmc: 1000, staria: 550, hiRoof: 650, coaster: 1050, bus: 1400 },
  { id: "mak-station-to-hotel", route: "Makkah Train Station to Hotel", sedan: 120, gmc: 230, staria: 150, hiRoof: 200, coaster: 300, bus: 500 },
  { id: "mak-hotel-to-station", route: "Makkah Hotel to Train Station", sedan: 120, gmc: 230, staria: 150, hiRoof: 200, coaster: 300, bus: 500 },
  { id: "mad-station-to-hotel", route: "Madina Train Station to Hotel", sedan: 120, gmc: 230, staria: 150, hiRoof: 200, coaster: 300, bus: 500 },
  { id: "mad-hotel-to-station", route: "Madina Hotel to Train Station", sedan: 120, gmc: 230, staria: 150, hiRoof: 200, coaster: 300, bus: 500 },
  { id: "jed-airport-to-mad-hotel", route: "Jeddah Airport to Madinah Hotel", sedan: 400, gmc: 830, staria: 450, hiRoof: 550, coaster: 880, bus: null },
  { id: "jed-airport-to-mak-hotel", route: "Jeddah Airport to Makkah Hotel", sedan: 250, gmc: 450, staria: 300, hiRoof: 400, coaster: 600, bus: null },
  { id: "mad-hotel-to-madina-city", route: "Madinah Hotel to Madina City", sedan: 170, gmc: null, staria: 220, hiRoof: null, coaster: null, bus: null },
  { id: "mak-to-hudaibiyyah", route: "Makkah Hotel to Hudaibiyyah Mosque (Ziyarat)", sedan: 170, gmc: 330, staria: 220, hiRoof: 270, coaster: 350, bus: null },
  { id: "mad-to-khaybar", route: "Madinah Hotel to Khaybar Fort", sedan: 475, gmc: 875, staria: 575, hiRoof: 675, coaster: 875, bus: null },
];
