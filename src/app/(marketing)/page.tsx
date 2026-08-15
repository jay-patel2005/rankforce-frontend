import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import ClientTrustBar from '@/components/sections/ClientTrustBar';
import ServicesGrid from '@/components/sections/ServicesGrid';
import AboutSection from '@/components/sections/AboutSection';
import CaseStudyShowcase from '@/components/sections/CaseStudyShowcase';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import IndustriesServed from '@/components/sections/IndustriesServed';
import Testimonials from '@/components/sections/Testimonials';
import FaqAccordion from '@/components/sections/FaqAccordion';
import FinalCta from '@/components/sections/FinalCta';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'RankWithJD — Freelance SEO Expert | Grow Your Leads & Sales',
  description:
    'Grow your business online with expert SEO, content marketing, and digital strategy. RankWithJD delivers measurable results.',
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ClientTrustBar />
        <ServicesGrid />
        <AboutSection />
        <CaseStudyShowcase />
        <WhyChooseUs />
        <IndustriesServed />
        <Testimonials />
        <FaqAccordion />
        <FinalCta />
      </main>
      <Footer />
      
      {/* JSON-LD Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "RankWithJD",
            "image": "https://rankwithjd.com/logo.png",
            "@id": "https://rankwithjd.com",
            "url": "https://rankwithjd.com",
            "telephone": "+919876543210",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Worldwide",
              "addressCountry": "Remote"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 0,
              "longitude": 0
            },
            "sameAs": [
              "https://twitter.com/rankwithjd",
              "https://linkedin.com/in/rankwithjd"
            ]
          })
        }}
      />
    </>
  );
}
