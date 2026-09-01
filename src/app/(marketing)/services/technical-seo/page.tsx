import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './technical-seo.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { technicalSeoData } from '@/data/services/technicalSeoData';

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
  title: 'Technical SEO Services | Fix & Boost Website Rankings',
  description:
    'Improve website performance with Technical SEO Services. Fix crawl issues, indexing, site speed, Core Web Vitals, and technical problems to rank better.',
  alternates: {
    canonical: '/services/technical-seo',
  },
};

export default function TechnicalSEOPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={technicalSeoData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={technicalSeoData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={technicalSeoData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={technicalSeoData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={technicalSeoData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={technicalSeoData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={technicalSeoData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={technicalSeoData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={technicalSeoData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
