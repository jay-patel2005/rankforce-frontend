import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FinalCta from '@/components/sections/FinalCta';

import PageHero from '@/components/sections/services/PageHero';
import CoreSeoServicesGrid from '@/components/sections/services/CoreSeoServicesGrid';
import OtherServicesGrid from '@/components/sections/services/OtherServicesGrid';
import ProcessSection from '@/components/sections/services/ProcessSection';
import WhyChooseMe from '@/components/sections/services/WhyChooseMe';
import PricingSection from '@/components/sections/services/PricingSection';
import ServicesFaqAccordion from '@/components/sections/services/ServicesFaqAccordion';

export const metadata: Metadata = {
  title: 'SEO & Digital Marketing Services | RankWithJD',
  description: 'Comprehensive SEO and digital marketing services tailored to your business goals. Grow your organic traffic, leads, and revenue.',
  alternates: {
    canonical: 'https://rankwithjd.com/services',
  },
  openGraph: {
    title: 'SEO & Digital Marketing Services | RankWithJD',
    description: 'Comprehensive SEO and digital marketing services tailored to your business goals. Grow your organic traffic, leads, and revenue.',
    url: 'https://rankwithjd.com/services',
    siteName: 'RankWithJD',
    images: [
      {
        url: 'https://rankwithjd.com/images/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'RankWithJD SEO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Digital Marketing Services | RankWithJD',
    description: 'Comprehensive SEO and digital marketing services tailored to your business goals. Grow your organic traffic, leads, and revenue.',
    images: ['https://rankwithjd.com/images/og-services.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'SEO & Digital Marketing Services',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RankWithJD',
    url: 'https://rankwithjd.com'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Core SEO Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Local SEO',
          description: 'Dominate Google Maps and local search results. Get found by customers in your area who are ready to buy.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Ecommerce SEO',
          description: 'Boost product visibility and drive qualified shoppers to your online store with product-focused SEO.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Technical SEO',
          description: 'Fix crawlability issues, speed up your site, and build the technical foundation search engines love.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'On-Page & Content SEO',
          description: 'Create compelling, optimized content that ranks and converts — from blog posts to landing pages.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Global SEO',
          description: 'Expand your reach internationally with strategic SEO that targets audiences across geographies.'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI SEO',
          description: 'Leverage AI-powered strategies for content optimization, keyword research, and competitive analysis.'
        }
      }
    ]
  }
};

export default function ServicesPage() {
  return (
    <>
      <Script
        id="services-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-1">
        <PageHero />
        <CoreSeoServicesGrid />
        <OtherServicesGrid />
        <ProcessSection />
        <WhyChooseMe />
        <PricingSection />
        <ServicesFaqAccordion />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
