import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './aeo-geo.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { aeoGeoData } from '@/data/services/aeoGeoData';

import { ServiceHero } from '@/components/sections/services/shared/ServiceHero';
import { ServiceImportance } from '@/components/sections/services/shared/ServiceImportance';
import { ServiceStatBand } from '@/components/sections/services/shared/ServiceStatBand';
import { ServiceTools } from '@/components/sections/services/shared/ServiceTools';
import { ServiceImplement } from '@/components/sections/services/shared/ServiceImplement';
import { ServiceChecklist } from '@/components/sections/services/shared/ServiceChecklist';
import { ServiceFaq } from '@/components/sections/services/shared/ServiceFaq';
import { ServiceDifference } from '@/components/sections/services/shared/ServiceDifference';
import { ServiceTestimonials } from '@/components/sections/services/shared/ServiceTestimonials';

export const metadata: Metadata = {
  title: 'AEO and GEO Services | Rank Force',
  description:
    'Everything you need to know about Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) to get your brand quoted inside AI-generated answers like ChatGPT and Google AI Overview.',
  alternates: {
    canonical: '/services/aeo-geo',
  },
};

export default function AeoGeoPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={aeoGeoData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={aeoGeoData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={aeoGeoData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={aeoGeoData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={aeoGeoData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={aeoGeoData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={aeoGeoData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={aeoGeoData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={aeoGeoData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
