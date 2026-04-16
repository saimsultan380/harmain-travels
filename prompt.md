You are a world-class Next.js developer and creative director. Build the most
stunning, futuristic, content-rich homepage ever made for "Haramain Umrah Taxi"
— a premium Umrah taxi service across Makkah, Madinah & Jeddah, Saudi Arabia.

This is not a template. This is a masterpiece. Every pixel must feel intentional.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- Next.js 14+ App Router + TypeScript
- Tailwind CSS (utility classes only)
- Framer Motion (ALL animations)
- next-themes (dark/light toggle)
- Google Fonts via next/font/google:
  Quicksand → weight 600, 700, 800 (ALL headings only)
  Poppins → weight 400, 500, 600 (ALL other text)
- Lucide React (icons)
- No other UI libraries

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
COLOR SYSTEM — STRICTLY NO GRADIENTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Brand colors from logo (never change these):
Gold: #9D812E
Green: #007A3E

LIGHT THEME (default):
--bg: #FFFFFF
--bg-alt: #F8F8F6
--bg-card: #FFFFFF
--border: #E8E2D6
--border-dark: #C8BFA8
--text-1: #0F0F0F
--text-2: #3A3530
--text-3: #7A7060
--gold: #9D812E
--gold-soft: #9D812E12
--green: #007A3E
--green-soft: #007A3E10

DARK THEME:
--bg: #080C0A
--bg-alt: #0D110F
--bg-card: #111510
--border: #1E2A22
--border-dark: #2A3A30
--text-1: #F2EDE4
--text-2: #B0A898
--text-3: #706860
--gold: #B8962E
--gold-soft: #9D812E14
--green: #00A854
--green-soft: #007A3E12

USE RULE:
Gold → CTAs, prices, highlights, active states, numbers, stars
Green → badges, tags, secondary buttons, icons, step markers, success states

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TYPOGRAPHY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

- h1: Quicksand 800, 56–72px desktop / 36px mobile
- h2: Quicksand 700, 40–48px
- h3: Quicksand 700, 24–28px
- Section labels: Poppins 600, 11px, uppercase, letter-spacing 0.18em
- Body: Poppins 400, 16px, line-height 1.7
- Captions: Poppins 500, 13px
- Prices: Quicksand 800

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GRAPHIC LANGUAGE — BUILD ALL WITH CODE (SVG/Canvas/Framer)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
All graphics must be coded — no external images needed.
Build these as React/SVG components:

1. KaabaIllustration.tsx
   Pure SVG of the Kaaba silhouette (cube shape, Kiswa cloth lines,
   golden door, corner detail). Keep it geometric and clean.
   Animate: slow pulsing glow ring around base, scale 1→1.02→1.

2. AnimatedCarOnRoad.tsx
   SVG side-view of a clean modern car (sedan shape) with spinning
   wheel circles. The car smoothly drives across a dotted road line
   with a subtle shadow. Used in hero and booking section.
   Animate with Framer Motion: car translates X from -100% to +100%
   in a loop, wheels rotate, dust particles trail behind.

3. RouteMapGraphic.tsx
   Stylized SVG map showing 3 city dots: Jeddah (bottom-left),
   Makkah (center), Madinah (top-right). Connected by animated
   dashed SVG path lines. A small car icon moves along each path
   using SVG stroke-dashoffset animation. City dots pulse.

4. IslamicGeometricBg.tsx
   Large SVG tile of an 8-pointed star Islamic pattern. Use as
   section backgrounds at very low opacity (3–5%). Slow rotation
   or parallax on scroll. Color: var(--gold).

5. MoonCrescentIcon.tsx
   Stylized SVG crescent moon + star. Used in navbar logo area
   and section accents. Animate: gentle glow pulse.

6. PilgrimJourneyTimeline.tsx  
   SVG vertical road with milestones: Arrive Airport → Reach Makkah
   → Perform Umrah → Ziyarat → Madinah → Return. Car icon moves
   along this road as user scrolls. Each milestone node lights up
   in sequence.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATION SYSTEM — EVERY SECTION HAS A STORY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Framer Motion rules:

- All scroll reveals: initial={{ opacity:0, y:40 }}
  whileInView={{ opacity:1, y:0 }} viewport={{ once:true, margin:"-60px" }}
- Stagger children: staggerChildren: 0.08
- Spring physics for cards: type:"spring", stiffness:100, damping:20
- Page load: useAnimationControls, sequence on mount

SECTION-BY-SECTION ANIMATIONS:

HERO:

- AnimatedCarOnRoad drives across the bottom of hero
- KaabaIllustration floats on the right (desktop) with glow
- Headline: each word slides up and fades in with 0.1s stagger
- Subheadline types in character by character (typewriter effect)
- Trust badges slide in from left one by one
- IslamicGeometricBg rotates very slowly at 0.3rpm
- 20 floating dots (3–6px) drift upward infinitely, randomized
  speed/position, opacity 0.15–0.4, gold and green alternating

SERVICES SECTION:

- Cards reveal in a staggered grid wave (left to right, top to bottom)
- On hover: card border animates gold→green→gold,
  icon bounces (y: 0→-4→0), card lifts 6px
- Service icon background: a small IslamicGeometricBg tile
  rotates behind icon on hover

FLEET SECTION:

- AnimatedCarOnRoad variant for each vehicle type
  (sedan, van, GMC, microbus, coaster, bus — different SVG sizes/shapes)
- Cards slide in from alternating sides (odd: left, even: right)
- Mouse-tracking 3D tilt via Framer Motion useMotionValue
  rotateX/rotateY ±8deg on desktop hover
- Passenger/luggage icons fill up like a progress bar animation

ROUTES SECTION:

- RouteMapGraphic as the hero of this section
- Car moves along the path in a loop
- Route chips cascade in like falling leaves (stagger, slight rotation)
- Hover on chip: background fills from left to right (clip-path animation)

HOW TO BOOK — TIMELINE:

- PilgrimJourneyTimeline SVG on the side
- Vertical timeline line draws downward on scroll
  (SVG stroke-dashoffset 0→100%)
- Step nodes pop in (scale 0→1) as line reaches them
- AnimatedCarOnRoad appears next to Step 4 (Relax & Enjoy)

STATS:

- Numbers count up from 0 on enter (useEffect + requestAnimationFrame)
- Each stat box has a thin gold border that draws around it on enter
- Icons spin once on enter

WHY CHOOSE US:

- 6 feature cards with SVG icons that animate when in view:
  - Licensed: badge icon draws its checkmark stroke
  - Fixed Price: tag icon swings like a pendulum
  - 24/7: clock icon hands rotate once
  - Fleet: car icon drives in from the left
  - Multilingual: speech bubble pops in
  - Family Friendly: shield icon pulses green

TESTIMONIALS:

- Auto-scroll carousel with momentum easing, pause on hover
- Active card scales up 1.02, others scale to 0.97
- Quote marks are large background decorative SVG (gold, opacity 0.08)
- Star rating fills gold star by star with stagger delay

FAQ ACCORDION:

- Height animates smoothly via Framer Motion layout animation
- Plus icon rotates 45deg to X on open
- Active item left border slides down (height 0→100%)
- Answer text fades in with slight Y movement

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SECTIONS — FULL SPEC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━ 1. NAVBAR ━━

- Logo: MoonCrescentIcon + "Haramain" (Quicksand gold) + "Umrah Taxi" (Poppins green, smaller)
- Links: Services | Fleet | Routes | Ziyarat | About | Contact
- Right: WhatsApp button (solid green) + Dark/Light toggle (animated sun↔moon)
- Sticky with blur backdrop, thin gold bottom border appears on scroll
- Mobile: Hamburger → animated drawer from top, staggered link reveal
- Active link: animated gold underline slides in

━━ 2. HERO ━━
Full viewport height. Two-column layout on desktop.

LEFT COLUMN:

- Label: "TRUSTED UMRAH TAXI SERVICE" (Poppins, green, uppercase)
- H1 (Quicksand 800):
  Line 1: "Your Sacred Journey"
  Line 2: "Starts Here"
- Subtext (Poppins): "Fixed fares. Licensed drivers. 24/7 across
  Makkah, Madinah & Jeddah. Your pilgrimage, our responsibility."
- Typewriter: cycling through "Makkah Transfer" / "Madinah Transfer" /
  "Jeddah Airport Pickup" / "Ziyarat Tours"
- CTA Row:
  "Book on WhatsApp" (solid gold button, WhatsApp icon)
  "View Services" (outlined green button)
- Trust strip: 4 chips:
  ✓ Licensed Drivers ✓ Fixed Pricing ✓ 24/7 ✓ Multilingual

RIGHT COLUMN:

- KaabaIllustration SVG (large, centered)
- AnimatedCarOnRoad below/near the Kaaba
- Floating particles in background
- MoonCrescentIcon watermark, low opacity

BOTTOM of hero: RouteMapGraphic teaser — 3 connected city nodes
animated, full width strip.

━━ 3. SERVICES ━━
Label: "WHAT WE OFFER"
H2: "Complete Umrah Travel Solutions"
Subtext: Poppins, 1 line

3×3 grid of 9 service cards. Each card has:

- Lucide icon in a small square box (green soft bg)
- Title (Quicksand 700)
- 2-line description (Poppins)
- "Learn more →" in gold on hover

Services:

1. Jeddah Airport → Makkah — Plane icon
2. Makkah ↔ Madinah Transfer — ArrowLeftRight icon
3. Airport Pickups — MapPin icon
4. Ziyarat Tours — Compass icon
5. Family & Group Travel — Users icon
6. Group / Bus Bookings — Bus icon
7. Private Taxi & VIP — Crown icon
8. Damm Service — BookOpen icon
9. Umrah & Hajj Badal — Heart icon

━━ 4. FLEET ━━
Label: "OUR FLEET"
H2: "Choose Your Ride"
Subtext: "Modern, air-conditioned, spacious vehicles for every group size"

6 fleet cards in 3-col grid (desktop) / 2-col (tablet) / 1-col (mobile):

For each card:

- Top: Animated SVG car illustration (coded, not image)
  Sedan → small sleek shape
  Mini Van → taller boxy shape
  Luxury GMC → wide premium SUV shape
  Hiace Microbus → long van shape
  Coaster → mini-bus shape
  Bus → full coach shape
- Vehicle name (Quicksand 700)
- "From SAR X" price (Quicksand 800, gold)
- Passenger count: person icons (fill up animated)
- Luggage count: bag icons
- "Book Now" button (green outlined → green solid on hover)

━━ 5. ROUTES ━━
Label: "ROUTES WE COVER"
H2: "Wherever Your Journey Takes You"

LEFT: RouteMapGraphic (full interactive SVG, takes 45% width)
Cities: Jeddah, Makkah, Madinah, Taif, Badr, AlUla
Animated car moves along paths
Hovering a city highlights its routes

RIGHT: 9 route chips in a waterfall grid:
Each chip: start city → destination city, small arrow, distance/duration
Gold border, green dot indicator
Stagger cascade animation on scroll enter

━━ 6. ZIYARAT TOURS ━━
Label: "SACRED ZIYARAT"
H2: "Explore the Holy Sites"
Subtext about spiritual connection

6 destination cards in 2×3 grid:
Makkah — Masjid Al-Haram, Jabal Al-Nour, Hira Cave
Madinah — Masjid Al-Nabawi, Masjid Quba, Mount Uhud
Jeddah — Al-Balad, Floating Mosque
Taif — Masjid Addas, Al-Shafa
Badr — Battlefield, Martyrs Cemetery
AlUla — Hegra, Al-Ula Old Town

Each card:

- City name large (Quicksand 700)
- 3 key sites listed with green dot
- "Book Ziyarat →" CTA (gold text)
- Animated border-trace on hover (SVG rect stroke-dashoffset)

━━ 7. WHY CHOOSE US ━━
Label: "WHY HARAMAIN"
H2: "Built Around Your Pilgrimage"

Split layout:
LEFT: 4 animated stat counters in 2×2 grid
5000+ Pilgrims Served
6+ Cities Covered
24/7 Availability
100% Fixed Pricing

Each stat: large Quicksand 800 number (gold) + label (Poppins) +
animated thin gold border draws around card on enter.

RIGHT: 6 feature items stacked
Each: animated icon + title (Quicksand 700) + 1-line description
Features:

- Licensed & Verified Drivers
- Transparent Fixed Pricing
- Round-the-Clock Service
- Modern Maintained Fleet
- Multilingual Drivers (8+ languages)
- Women & Family Friendly

━━ 8. HOW TO BOOK ━━
Label: "BOOKING PROCESS"
H2: "Ready in 4 Simple Steps"

Full-width section, bg-alt background.

LEFT: PilgrimJourneyTimeline SVG (vertical road with milestones)

RIGHT: 4 step cards stacked vertically with animated timeline connector:

Step 1: Contact Us
"Reach us via WhatsApp or click Book Now"
Icon: MessageCircle (green)

Step 2: Get an Estimate
"Receive a clear quote based on your route and vehicle"
Icon: Calculator (gold)

Step 3: Secure Your Ride
"Confirm your booking — no hidden fees"
Icon: ShieldCheck (green)

Step 4: Relax & Enjoy
"Sit back. Your journey is in expert hands."
Icon: Smile (gold)
AnimatedCarOnRoad runs beside this step

━━ 9. TESTIMONIALS ━━
Label: "PILGRIM REVIEWS"
H2: "Trusted by Thousands"

Auto-scrolling carousel (3 visible on desktop, 1 on mobile):

Card 1 — Saqib Javed:
"Traveled from Jeddah Airport to Makkah. Modern vehicle, bilingual
driver, seamless journey. Made the start of my spiritual trip perfect."
★★★★★

Card 2 — Muhammad Umar:
"Transparent pricing from Madinah Airport to my hotel. No hidden fees,
no haggling. I focused entirely on my Umrah."
★★★★★

Card 3 — Muhammad Ahsan:
"Booked Makkah–Madinah transfer and Ziyarat tour. WhatsApp booking
was quick, drivers understood the significance of the journey."
★★★★★

Each card: large gold decorative quote mark SVG, avatar initials
circle (gold/green), 5-star animation (stars fill one by one).

━━ 10. OTHER RELIGIOUS SERVICES ━━
H2: "Beyond Transportation"
Subtext: "We support your complete Umrah experience"

3 large horizontal cards side by side:

Quran Waqaf
"Distribute copies of the Holy Quran as ongoing charity"
Icon: BookOpen — green

Hajj & Umrah Badal
"Qualified representatives perform on your behalf"
Icon: Users — gold

Damm Service
"Professional sacrifice according to Islamic guidelines"
Icon: Heart — green

Each card: large icon, title (Quicksand 700), description,
"Learn More →" gold link. Card hover: border traces with gold stroke.

━━ 11. FAQ ━━
Label: "FAQ"
H2: "Common Questions"

6 accordion items:
Q1: Why choose Haramain over others?
Q2: Are vehicles women & family friendly?
Q3: How far in advance should I book?
Q4: What if my flight is delayed?
Q5: What group sizes can you handle?
Q6: How do I book and what payments are accepted?

Smooth height animation, rotating +/× icon, active left-border
slide animation in gold.

━━ 12. CTA BANNER ━━
Full-width section. bg-alt background.
IslamicGeometricBg watermark behind at 4% opacity.

H2: "Begin Your Sacred Journey Today"
Subtext: "Fixed fares. Professional drivers. Zero surprises."
CTA: "Book on WhatsApp" (solid gold) + "View Fleet" (outlined green)
RouteMapGraphic mini version centered below buttons.

━━ 13. FOOTER ━━
4-column grid:
Col 1: Logo + tagline + social icons
Col 2: Services (6 links)
Col 3: Cities (Makkah, Madinah, Jeddah, Taif, Badr, AlUla)
Col 4: Contact (WhatsApp, email, hours)

Bottom bar: copyright + "Proudly serving pilgrims across Saudi Arabia"
Thin gold top border on footer.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FILE STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app/
layout.tsx
page.tsx
globals.css

components/
layout/
Navbar.tsx
Footer.tsx
graphics/
KaabaIllustration.tsx
AnimatedCarOnRoad.tsx
RouteMapGraphic.tsx
IslamicGeometricBg.tsx
MoonCrescentIcon.tsx
PilgrimJourneyTimeline.tsx
VehicleSVG.tsx ← renders correct SVG per vehicle type
sections/
Hero.tsx
Services.tsx
Fleet.tsx
Routes.tsx
ZiyaratTours.tsx
WhyChooseUs.tsx
HowToBook.tsx
Testimonials.tsx
OtherServices.tsx
FAQ.tsx
CTABanner.tsx
ui/
AnimatedSection.tsx ← reusable scroll-trigger wrapper
StatCounter.tsx
TypewriterText.tsx
ThemeToggle.tsx
BorderTraceCard.tsx ← card with SVG animated border on hover
lib/
data/
services.ts
fleet.ts
routes.ts
ziyarat.ts
testimonials.ts
faqs.ts
hooks/
useCountUp.ts
useMouseTilt.ts
useScrollProgress.ts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HARD RULES — NEVER BREAK THESE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Light theme bg is #FFFFFF. Never off-white, never gray.
2. ZERO gradients. All colors are flat solids from the palette.
3. All graphics (Kaaba, car, map, patterns) are pure SVG/React code.
   No external image files, no placeholder URLs.
4. Quicksand = headings only. Poppins = everything else. No exceptions.
5. Framer Motion for all animations. No raw CSS @keyframes except
   the Islamic pattern background slow rotation.
6. Every component is fully TypeScript typed (no `any`).
7. Light AND dark themes must both be polished and complete.
8. Mobile-first. Test mentally at 375px, 768px, 1280px, 1440px.
9. All content is from the provided text. Do not invent data.
10. WhatsApp button links to https://wa.me/ (placeholder number).
11. No external UI libraries except Lucide React and Framer Motion.
12. Performance: dynamic import all graphics and heavy animation
    components with next/dynamic and ssr:false.
