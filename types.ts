
export interface NavLink {
  label: string;
  path: string;
}

export interface ServiceSummary {
  id: string;
  title: string;
  shortDesc: string;
  cta: string;
  slug: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface CaseScenario {
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  whatImproves: string[];
  outcomes: string[];
  howItWorks: string[];
  decisionSupport: string;
  miniCaseScenario: string;
  faqs: FAQItem[];
  cta: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface HeroSlide {
  title: string;
  headline: string;
  subheadline: string;
  cta: string;
  link: string;
  image: string;
}
