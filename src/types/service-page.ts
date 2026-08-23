import React from 'react';

export interface ServiceHeroData {
  badge?: string;
  titleHtml: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  rightComponent?: React.ReactNode;
}

export interface ServiceImportanceData {
  titleHtml: React.ReactNode;
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  layoutVariant?: 'default' | 'wide-image';
}

export interface ServiceStatBandData {
  badge?: string;
  title: string;
  paragraphs: string[];
  metrics?: {
    value: string;
    label: string;
  }[];
  statCards: {
    value: string;
    label: string;
    subLabel?: string;
    highlightColor?: string;
    icon?: string;
  }[];
  quote?: string;
}

export interface ServiceToolData {
  name: string;
  logo: React.ReactNode;
}

export interface ServiceToolsData {
  title: string;
  subtitle: string;
  tools: ServiceToolData[];
}

export interface ServiceImplementItemData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceImplementData {
  badge: string;
  title: string;
  description: string;
  items: ServiceImplementItemData[];
}

export interface ServiceChecklistRowData {
  element: string;
  check: string;
  tool: string;
}

export interface ServiceChecklistData {
  title: string;
  descriptionHtml: React.ReactNode;
  columns: [string, string, string];
  rows: ServiceChecklistRowData[];
  footerText: string;
}

export interface ServiceFaqItemData {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceFaqData {
  badge: string;
  titleHtml: React.ReactNode;
  items: ServiceFaqItemData[];
}

export interface ServiceDifferenceCardData {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ServiceDifferenceData {
  titleHtml: React.ReactNode;
  subtitle: string;
  cards: ServiceDifferenceCardData[];
}

export interface ServiceTestimonialData {
  id: number;
  name: string;
  role: string;
  text: string;
  image: string;
}

export interface ServicePageData {
  slug: string;
  hero: ServiceHeroData;
  importance: ServiceImportanceData;
  statBand: ServiceStatBandData;
  tools: ServiceToolsData;
  implement: ServiceImplementData;
  checklist: ServiceChecklistData;
  faq: ServiceFaqData;
  difference: ServiceDifferenceData;
  testimonials: ServiceTestimonialData[];
}
