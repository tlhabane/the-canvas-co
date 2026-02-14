
import { ServiceDetail, HeroSlide, ServiceSummary, FAQItem, CaseScenario } from '../types';
import { assets } from '../assets';

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: "Brand Clarity That Scales",
    headline: "Build a Brand That’s Recognised Everywhere",
    subheadline: "Strategic brand identity and execution that keeps your business visually consistent across every touchpoint.",
    cta: "Start Your Brand Blueprint",
    link: "/services/brand-identity",
    image: assets.slide01
  },
  {
    title: "Print That Converts, Not Just Looks Good",
    headline: "Marketing Materials That Work Harder",
    subheadline: "High-quality print and digital collateral designed to inform, persuade, and convert.",
    cta: "Explore Print Solutions",
    link: "/services/print-collateral",
    image: assets.slide02
  },
  {
    title: "Visibility That Drives Foot Traffic",
    headline: "Signage That Makes You Impossible to Miss",
    subheadline: "Durable, compliant, high-impact signage built for real-world conditions.",
    cta: "View Signage Services",
    link: "/services/signage-graphics",
    image: assets.slide03
  },
  {
    title: "One Partner. End-to-End Execution.",
    headline: "From Concept to Installation",
    subheadline: "Design, production, and installation managed under one accountable partner.",
    cta: "Talk to The Canvas Co",
    link: "/contact",
    image: assets.slide04
  }
];

export const SERVICE_SUMMARIES: ServiceSummary[] = [
  {
    id: "brand-identity",
    title: "Brand Identity & Strategy",
    shortDesc: "Create a strong visual foundation that aligns your brand with your business goals.",
    cta: "Build My Brand Foundation",
    slug: "brand-identity"
  },
  {
    id: "print-collateral",
    title: "Print & Digital Collateral",
    shortDesc: "Professional materials that support sales, marketing, and internal communication.",
    cta: "Upgrade My Marketing Materials",
    slug: "print-collateral"
  },
  {
    id: "signage-graphics",
    title: "Signage & Graphics",
    shortDesc: "High-visibility signage solutions designed for durability, compliance, and impact.",
    cta: "Increase My Visibility",
    slug: "signage-graphics"
  }
];

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  "brand-identity": {
    id: "brand-identity",
    image: assets.brandIdentityStrategy,
    title: "Brand Identity & Strategy (The Blueprint)",
    tagline: "The foundation of every customer interaction.",
    overview: "Your brand identity is the foundation of every customer interaction. We design distinctive, practical brand systems that scale across print, signage, digital, and physical environments.",
    whatImproves: [
      "Clear and consistent brand application",
      "Reduced confusion across teams and suppliers",
      "Faster rollout of new marketing assets",
      "Stronger brand recognition and trust"
    ],
    outcomes: [
      "Improved brand recall",
      "Reduced rework and redesign costs",
      "Faster onboarding of new suppliers",
      "Alignment between brand and business objectives"
    ],
    howItWorks: [
      "Brand discovery and objectives",
      "Logo design and visual system development",
      "Brand style guide creation",
      "Rollout support across formats"
    ],
    decisionSupport: "A clearly documented brand system reduces dependency on individual designers and prevents inconsistent execution when multiple vendors are involved.",
    miniCaseScenario: "A growing retail business needed to standardise its brand across new locations. We developed a scalable identity system that allowed rapid expansion without visual drift.",
    faqs: [
      { question: "How long does a brand identity project take?", answer: "Typically 4-8 weeks depending on scope and complexity." },
      { question: "Can you refresh an existing brand?", answer: "Yes, we specialize in brand evolution while maintaining core equity." },
      { question: "Will the brand work across signage and print?", answer: "Absolutely. We design with all physical and digital applications in mind." }
    ],
    cta: "Start building a brand system that supports growth and consistency.",
    seo: {
      title: "Brand Identity & Strategy Services | The Canvas Co",
      description: "Strategic brand identity design creating consistent, scalable visual systems for businesses.",
      keywords: ["brand identity design", "logo design company", "brand strategy", "visual identity system"]
    }
  },
  "print-collateral": {
    id: "print-collateral",
    image: assets.printAndDigital,
    title: "Print & Digital Collateral (The Handshake)",
    tagline: "Materials that represent your business in moments that matter.",
    overview: "Your printed and digital materials represent your business in moments that matter. We design and produce collateral that communicates clearly and professionally.",
    whatImproves: [
      "Professional, consistent marketing materials",
      "Reduced print errors and rework",
      "Faster turnaround times",
      "Better alignment with brand guidelines"
    ],
    outcomes: [
      "Increased conversion from sales materials",
      "Improved internal communication tools",
      "Longer-lasting print assets"
    ],
    howItWorks: [
      "Content and format consultation",
      "Design and layout",
      "Material and finish selection",
      "Production and quality control"
    ],
    decisionSupport: "Centralising print reduces cost leakage, inconsistent suppliers, and mismatched brand execution.",
    miniCaseScenario: "A professional services firm updated all client-facing documents to align with a refreshed brand, improving credibility and client confidence.",
    faqs: [
      { question: "What print quantities do you support?", answer: "From small custom runs to large-scale bulk orders." },
      { question: "Can you manage reprints?", answer: "Yes, we archive all designs for quick and consistent reordering." },
      { question: "Do you offer digital versions?", answer: "Yes, all print collateral can be optimized for digital distribution." }
    ],
    cta: "Upgrade your marketing materials with confidence.",
    seo: {
      title: "Print & Digital Collateral Services | The Canvas Co",
      description: "High-quality print and digital marketing collateral designed for clarity, consistency, and conversion.",
      keywords: ["printing services", "marketing collateral", "brochures printing", "business stationery"]
    }
  },
  "signage-graphics": {
    id: "signage-graphics",
    image: assets.signageAndGraphics,
    title: "Signage & Graphics (The Impact)",
    tagline: "Visible, compliant, and built to last.",
    overview: "Signage is often the first physical interaction customers have with your brand. We design, produce, and install signage that is visible, compliant, and built to last.",
    whatImproves: [
      "Increased visibility and foot traffic",
      "Reduced maintenance and replacement costs",
      "Compliance with building and safety standards",
      "Consistent branding across locations"
    ],
    outcomes: [
      "Stronger brand presence",
      "Reduced operational downtime",
      "Improved wayfinding and customer experience"
    ],
    howItWorks: [
      "Site assessment and recommendations",
      "Design and technical drawings",
      "Production using durable materials",
      "Professional installation"
    ],
    decisionSupport: "Incorrect signage can create safety, compliance, and reputational risks. Our integrated approach mitigates these issues.",
    miniCaseScenario: "A multi-branch business required consistent signage across locations. We delivered a unified system with minimal disruption to operations.",
    faqs: [
      { question: "Do you handle installation?", answer: "Yes, we provide professional installation services for all signage." },
      { question: "Are materials weather-resistant?", answer: "We select specific materials engineered for longevity in local environmental conditions." },
      { question: "Can you manage multi-site rollouts?", answer: "Yes, we specialize in high-volume, multi-location deployments." }
    ],
    cta: "Increase visibility with signage that works harder for your business.",
    seo: {
      title: "Business Signage & Graphics | The Canvas Co",
      description: "Exterior and interior signage solutions designed for durability, compliance, and brand impact.",
      keywords: ["business signage", "signage company", "vehicle wraps", "office signage"]
    }
  }
};

export const CASE_SCENARIOS: CaseScenario[] = [
  { title: "Brand rollout for growing businesses", description: "Helping rapid expansions stay visually aligned." },
  { title: "Marketing collateral refresh for professional firms", description: "Modernizing client-facing documents for trust." },
  { title: "Signage upgrades for retail and commercial spaces", description: "Maximizing visibility and regulatory compliance." }
];

export const VALUE_PROPOSITION = {
  text: "The Canvas Co is a full-service branding, print, and signage partner helping businesses create consistent, professional, and high-impact visual communication. We manage the entire lifecycle—from strategy and design to production and installation—so your teams can focus on running the business while we protect and elevate your brand."
};

export const WHY_CHOOSE_US_HOMEPAGE = [
  "Single accountable partner from design to installation",
  "Consistent brand execution across all formats",
  "Reduced risk of rework and inconsistency",
  "Materials and finishes selected for longevity",
  "Strategic advice to maximise return on marketing spend"
];

export const ABOUT_CONTENT = {
  vision: "We believe impactful marketing is more than a logo—it’s a cohesive visual narrative. Our vision is to empower businesses to stand out, connect with their audiences, and grow through consistent, high-quality visual communication.",
  whoWeAre: "The Canvas Co is a full-service agency specialising in brand identity, print collateral, and signage. Our team combines creative design, production expertise, and practical project management to deliver work that is on-brand, on-budget, and on-time.",
  howWeWork: "We take responsibility for the full process—concept, design, production, and installation—ensuring accountability, quality control, and consistency across every deliverable."
};
