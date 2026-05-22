export interface InspectionService {
  title: string;
  slug: string;
  price: string;
  img: string;
  location: string;
  specs: string[];
}

export const servicesList: InspectionService[] = [
  {
    title: "Home Inspection",
    slug: "home-inspection",
    price: "KES 35,000",
    img: "/hero-villa.png",
    location: "Nairobi & Suburbs",
    specs: ["Full Structure", "Electrical/Plumbing", "Foundation Check"],
  },
  {
    title: "Apartment Inspection",
    slug: "apartment-inspection",
    price: "KES 25,000",
    img: "/apartment-showcase.png",
    location: "Kilimani, Westlands, etc.",
    specs: ["Dampness & Leaks", "Balcony Safety", "Shared Utilities"],
  },
  {
    title: "Villa Inspection",
    slug: "villa-inspection",
    price: "KES 40,000",
    img: "/hero-villa.png",
    location: "Runda, Karen, Muthaiga",
    specs: ["Thermal Roof Mapping", "Compound & Gates", "Pool & Drainage"],
  },
  {
    title: "Moisture & Leak Inspection",
    slug: "moisture-leak-inspection",
    price: "KES 25,000",
    img: "/apartment-showcase.png",
    location: "All Areas",
    specs: ["Thermal Imaging", "Slab Dampness", "Piping Scan"],
  },
  {
    title: "Roof Inspection",
    slug: "roof-inspection",
    price: "KES 25,000",
    img: "/hero-villa.png",
    location: "Nairobi & Mombasa",
    specs: ["Drone Scanning", "Truss Inspection", "Gutter Drainage"],
  },
  {
    title: "Thermal Imaging Inspection",
    slug: "thermal-imaging-inspection",
    price: "KES 28,000",
    img: "/apartment-showcase.png",
    location: "All Areas",
    specs: ["Electrical Hotspots", "Moisture Mapping", "HVAC Infiltration"],
  },
  {
    title: "Snag & Handover Inspection",
    slug: "snag-handover-inspection",
    price: "KES 30,000",
    img: "/apartment-showcase.png",
    location: "New Developments",
    specs: ["Pre-handover Snagging", "Paint & Finishes", "Hardware Fittings"],
  },
  {
    title: "Mold Inspection",
    slug: "mold-inspection",
    price: "KES 25,000",
    img: "/apartment-showcase.png",
    location: "All Areas",
    specs: ["Air Quality Check", "Spores Analysis", "Ventilation Scan"],
  },
  {
    title: "Pest Inspection",
    slug: "pest-inspection",
    price: "KES 25,000",
    img: "/hero-villa.png",
    location: "Nairobi & Suburbs",
    specs: ["Termite Diagnostics", "Woodborer Survey", "Safe Treatments"],
  },
];
