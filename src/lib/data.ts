/* ============================================================
   AUREA DENTAL — Content model (all copy + imagery in one place)
   ============================================================ */

/** Build a tuned Unsplash URL. */
export const img = (id: string, w = 1200, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;

export const clinic = {
  name: "Aurea Dental",
  tagline: "The Art of the Perfect Smile",
  phone: "+1 (415) 555-0192",
  emergencyPhone: "+1 (415) 555-0000",
  email: "hello@aureadental.com",
  address: "128 Marina Boulevard, Suite 400, San Francisco, CA",
  hours: [
    { day: "Mon – Fri", time: "8:00 AM — 7:00 PM" },
    { day: "Saturday", time: "9:00 AM — 4:00 PM" },
    { day: "Sunday", time: "Emergency only" },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Smile Gallery", href: "/smile-gallery" },
  { label: "Book", href: "/book" },
];

export const trustStats = [
  { value: 4.9, suffix: "★", label: "Google Rating", detail: "1,200+ reviews" },
  { value: 25, suffix: "K+", label: "Happy Patients", detail: "since 2009" },
  { value: 18, suffix: "yrs", label: "Of Experience", detail: "award-winning" },
  { value: 99, suffix: "%", label: "Would Recommend", detail: "patient survey" },
];

export const whyChoose = [
  {
    icon: "Sparkles",
    title: "Cosmetic Artistry",
    body: "Digitally-designed smiles crafted by clinicians trained in facial aesthetics — not just teeth.",
  },
  {
    icon: "ShieldCheck",
    title: "Painless Dentistry",
    body: "Sedation options, micro-anesthesia and a gentle-touch philosophy for a genuinely calm visit.",
  },
  {
    icon: "ScanFace",
    title: "3D Digital Scanning",
    body: "No goopy impressions. Intraoral scanners preview your result before we begin treatment.",
  },
  {
    icon: "Clock",
    title: "Same-Day Crowns",
    body: "In-house CEREC milling means restorations in a single appointment — no temporaries.",
  },
  {
    icon: "HeartHandshake",
    title: "Transparent Care",
    body: "Clear treatment plans and upfront pricing. No surprises, ever — just honest guidance.",
  },
  {
    icon: "Leaf",
    title: "Spa Environment",
    body: "Weighted blankets, noise-cancelling headphones and aromatherapy in every suite.",
  },
];

export const treatments = [
  {
    slug: "veneers",
    title: "Porcelain Veneers",
    tag: "Cosmetic",
    body: "Ultra-thin, hand-layered porcelain that transforms shape, shade and symmetry in two visits.",
    image: "1606811841689-23dfddce3e95",
    price: "from $850 / tooth",
  },
  {
    slug: "implants",
    title: "Dental Implants",
    tag: "Restorative",
    body: "Permanent, titanium-anchored replacements that look, feel and function like natural teeth.",
    image: "1629909613654-28e377c37b09",
    price: "from $2,400",
  },
  {
    slug: "invisalign",
    title: "Invisalign®",
    tag: "Orthodontics",
    body: "Clear, removable aligners with a 3D preview of your finished smile before you start.",
    image: "1609840114035-3c981b782dfe",
    price: "from $3,900",
  },
  {
    slug: "whitening",
    title: "Pro Whitening",
    tag: "Cosmetic",
    body: "Up to 8 shades brighter in a single relaxed session with enamel-safe formulations.",
    image: "1607990281513-2c110a25bd8c",
    price: "from $450",
  },
  {
    slug: "hygiene",
    title: "Preventive Hygiene",
    tag: "General",
    body: "Airflow cleaning, gum therapy and oral-cancer screening on a schedule that suits you.",
    image: "1588776813677-77aaf5595b83",
    price: "from $180",
  },
  {
    slug: "smile-makeover",
    title: "Full Smile Makeover",
    tag: "Signature",
    body: "A concierge, multi-disciplinary plan combining every discipline for total transformation.",
    image: "1631549916768-4119b2e5f926",
    price: "bespoke",
  },
];

export const doctors = [
  {
    name: "Dr. Elena Marchetti",
    role: "Founder · Cosmetic & Restorative",
    image: "1594824476967-48c8b964273f",
    bio: "A pioneer of digital smile design with 18 years crafting natural, face-framed smiles.",
    credentials: ["DDS, UCSF", "AACD Accredited", "Invisalign Diamond"],
  },
  {
    name: "Dr. Julian Reyes",
    role: "Implant & Oral Surgery",
    image: "1537368910025-700350fe46c7",
    bio: "Full-arch and single-tooth implant specialist known for gentle, precise surgical work.",
    credentials: ["DMD, Harvard", "Fellow, ICOI", "Sedation Certified"],
  },
  {
    name: "Dr. Amara Okafor",
    role: "Orthodontics & Aligners",
    image: "1573496359142-b8d87734a5a2",
    bio: "Turns complex bites into confident smiles with clear aligners and modern orthodontics.",
    credentials: ["MSc Ortho", "Invisalign Faculty", "Board Certified"],
  },
  {
    name: "Dr. Marcus Bennett",
    role: "Endodontics & Comfort Care",
    image: "1622253692010-333f2da6031d",
    bio: "Makes root canals genuinely painless with microscope-guided, single-visit techniques.",
    credentials: ["DDS Endo", "AAE Member", "Microscope Certified"],
  },
];

export const beforeAfter = [
  {
    label: "Porcelain Veneers · 8 units",
    before: img("1631549916768-4119b2e5f926", 900),
    after: img("1580281658626-ee379f3cce93", 900),
  },
  {
    label: "Invisalign + Whitening",
    before: img("1567746455504-cb3213f8f5b8", 900),
    after: img("1594381898411-846e7d193883", 900),
  },
  {
    label: "Full Smile Makeover",
    before: img("1583468982228-19f19164aee2", 900),
    after: img("1584982751601-97dcc096659c", 900),
  },
];

export const technology = [
  {
    name: "Intraoral 3D Scanner",
    body: "Digital impressions in 60 seconds — no trays, no gagging, sub-micron accuracy.",
    image: "1629909615184-74f495363b67",
  },
  {
    name: "CEREC Same-Day Milling",
    body: "Design, mill and fit ceramic crowns in one appointment with zero temporaries.",
    image: "1581056771107-24ca5f033842",
  },
  {
    name: "3D CBCT Imaging",
    body: "Low-radiation volumetric scans for precise, guided implant placement.",
    image: "1519415510236-718bdfcd89c8",
  },
  {
    name: "Soft-Tissue Laser",
    body: "Suture-free gum contouring and faster, more comfortable healing.",
    image: "1606811971618-4486d14f3f99",
  },
];

export const journey = [
  {
    step: "01",
    title: "Discovery Consult",
    body: "A relaxed conversation, full digital scan and a look at your goals over coffee.",
  },
  {
    step: "02",
    title: "Smile Design",
    body: "We render your future smile in 3D and refine every curve together before we start.",
  },
  {
    step: "03",
    title: "Gentle Treatment",
    body: "Your bespoke plan, delivered in comfort with sedation and spa amenities on hand.",
  },
  {
    step: "04",
    title: "Lifetime Care",
    body: "Guided aftercare and complimentary reviews keep your new smile flawless for years.",
  },
];

export const testimonials = [
  {
    quote:
      "I finally smile in photos without thinking twice. The whole team treats you like family — and the results are unreal.",
    name: "Sophia Lawrence",
    detail: "Porcelain Veneers",
    image: "1594381898411-846e7d193883",
  },
  {
    quote:
      "I was terrified of dentists my whole life. Aurea changed that completely. Painless, calm, genuinely kind.",
    name: "David Kim",
    detail: "Dental Implants",
    image: "1560250097-0b93528c311a",
  },
  {
    quote:
      "The 3D preview showed me my smile before I committed. Watching it become real was magical.",
    name: "Priya Nair",
    detail: "Invisalign",
    image: "1584982751601-97dcc096659c",
  },
  {
    quote:
      "Booked an emergency on a Sunday and was seen within the hour. This is dentistry done right.",
    name: "Marcus Reid",
    detail: "Emergency Care",
    image: "1622253692010-333f2da6031d",
  },
];

export const insurers = [
  "Delta Dental",
  "Cigna",
  "Aetna",
  "MetLife",
  "Guardian",
  "United Concordia",
  "Humana",
  "Blue Cross",
];

export const paymentOptions = [
  {
    icon: "CreditCard",
    title: "0% Financing",
    body: "Spread treatment over 6–24 months with interest-free plans.",
  },
  {
    icon: "ShieldCheck",
    title: "Insurance Billing",
    body: "We handle claims directly with all major providers.",
  },
  {
    icon: "BadgePercent",
    title: "Membership Plan",
    body: "No insurance? Our in-house plan saves 20–40% yearly.",
  },
];

export const faqs = [
  {
    q: "Do you accept new patients?",
    a: "Absolutely — we welcome new patients every week and reserve same-week slots for consultations. Your first visit includes a full digital scan and a personalised smile plan.",
  },
  {
    q: "Does treatment hurt?",
    a: "Comfort is our obsession. We use micro-anesthesia, sedation options and a gentle-touch philosophy so the vast majority of our patients feel little to nothing.",
  },
  {
    q: "How much do veneers or implants cost?",
    a: "Every smile is unique, so we provide a transparent, itemised quote after your consultation. Veneers start at $850 per tooth and implants from $2,400, with 0% financing available.",
  },
  {
    q: "Can I see my results before starting?",
    a: "Yes. Our digital smile design renders your future smile in 3D so you can preview and refine the outcome before any treatment begins.",
  },
  {
    q: "Do you offer emergency appointments?",
    a: "We hold daily emergency slots and offer Sunday cover. If you're in pain, call our emergency line and we'll see you as quickly as possible — often within the hour.",
  },
];

export const bookingFaqs = [
  {
    q: "How long does a consultation take?",
    a: "Plan for around 45 minutes. It includes a digital scan, an examination and time to discuss your goals with no pressure.",
  },
  {
    q: "What should I bring?",
    a: "Just yourself, any recent x-rays if you have them, and your insurance details. We take care of the rest.",
  },
  {
    q: "Can I reschedule easily?",
    a: "Of course — reschedule or cancel free of charge up to 24 hours before your appointment via a link in your confirmation.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All details are encrypted and handled in line with HIPAA. We never share your data.",
  },
];

export const timeline = [
  { year: "2009", title: "The First Chair", body: "Dr. Marchetti opens a single-suite studio with a radical idea: dentistry should feel like hospitality." },
  { year: "2013", title: "Going Digital", body: "One of the first Bay Area practices to adopt full intraoral 3D scanning and digital smile design." },
  { year: "2017", title: "The Marina Flagship", body: "We move to our light-filled Marina Boulevard clinic with six spa-style treatment suites." },
  { year: "2020", title: "Same-Day Dentistry", body: "In-house CEREC milling and CBCT imaging bring crowns and guided implants under one roof." },
  { year: "2024", title: "25,000 Smiles", body: "We celebrate 25,000 patients and a 4.9★ rating across 1,200+ verified reviews." },
];

export const awards = [
  { title: "AACD Accredited Practice", org: "American Academy of Cosmetic Dentistry" },
  { title: "Top Dentist 2019–2024", org: "SF Magazine" },
  { title: "Invisalign Diamond Provider", org: "Align Technology" },
  { title: "Best Patient Experience", org: "Dental Excellence Awards" },
  { title: "5-Star Sterilization Rating", org: "State Dental Board" },
  { title: "Green Practice Certified", org: "Eco Dentistry Association" },
];

export const galleryPhotos = [
  { id: "1629909615184-74f495363b67", span: "tall", caption: "Treatment Suite 03" },
  { id: "1588776814546-1ffcf47267a5", span: "wide", caption: "Precision Instruments" },
  { id: "1601049676869-702ea24cfd58", span: "", caption: "The Reception Lounge" },
  { id: "1519415510236-718bdfcd89c8", span: "", caption: "3D Imaging Bay" },
  { id: "1581056771107-24ca5f033842", span: "tall", caption: "Digital Lab" },
  { id: "1567746455504-cb3213f8f5b8", span: "", caption: "Comfort First" },
  { id: "1606811971618-4486d14f3f99", span: "wide", caption: "Laser Dentistry" },
  { id: "1583468982228-19f19164aee2", span: "", caption: "Every Detail Considered" },
];

export const transformationStories = [
  {
    name: "Sophia Lawrence",
    treatment: "8 Porcelain Veneers · 2 visits",
    quote:
      "For years I hid my teeth behind my hand. Now I lead meetings, laugh loudly and love every photo. Aurea gave me more than a smile — they gave me my confidence back.",
    before: img("1631549916768-4119b2e5f926", 900),
    after: img("1580281658626-ee379f3cce93", 900),
  },
  {
    name: "David Kim",
    treatment: "Full-Arch Implants · 6 months",
    quote:
      "I thought I'd lost my smile for good. The team rebuilt it tooth by tooth, painlessly. I can eat anything again — and I can't stop grinning.",
    before: img("1567746455504-cb3213f8f5b8", 900),
    after: img("1594381898411-846e7d193883", 900),
  },
];

export const videoTestimonials = [
  { name: "Priya Nair", detail: "Invisalign Journey", image: "1584982751601-97dcc096659c", length: "2:14" },
  { name: "Marcus Reid", detail: "Emergency to Everyday", image: "1622253692010-333f2da6031d", length: "1:48" },
  { name: "Elena Ross", detail: "Smile Makeover", image: "1594381898411-846e7d193883", length: "3:02" },
];

/* — Booking form config — */
export const bookingTreatments = [
  { id: "consult", label: "General Consultation", icon: "Stethoscope" },
  { id: "cosmetic", label: "Cosmetic / Veneers", icon: "Sparkles" },
  { id: "implants", label: "Dental Implants", icon: "Bone" },
  { id: "invisalign", label: "Invisalign / Aligners", icon: "AlignHorizontalDistributeCenter" },
  { id: "whitening", label: "Teeth Whitening", icon: "Sun" },
  { id: "emergency", label: "Emergency Care", icon: "Siren" },
];

export const timeSlots = [
  "9:00 AM", "9:45 AM", "10:30 AM", "11:15 AM",
  "1:00 PM", "1:45 PM", "2:30 PM", "3:15 PM", "4:00 PM", "5:00 PM",
];

export const bookingBenefits = [
  { icon: "CalendarCheck", title: "Instant Confirmation", body: "Pick a slot and receive confirmation in seconds." },
  { icon: "ScanFace", title: "Free Digital Scan", body: "Your first visit includes a complimentary 3D smile scan." },
  { icon: "Wallet", title: "No Obligation", body: "Consultations are pressure-free with transparent pricing." },
  { icon: "Clock3", title: "Flexible Hours", body: "Early, late and Saturday appointments to fit your life." },
];
