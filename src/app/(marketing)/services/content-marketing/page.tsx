import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './content-marketing.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { contentMarketingData } from '@/data/services/contentMarketingData';

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
  title: 'Content Marketing Services | Grow Traffic & Leads',
  description:
    'Grow your brand with Content Marketing Services that attract the right audience, increase organic traffic, build authority, and generate quality leads.',
  alternates: {
    canonical: '/services/content-marketing',
  },
};

export default function ContentMarketingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={contentMarketingData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={contentMarketingData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={contentMarketingData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={contentMarketingData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={contentMarketingData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={contentMarketingData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={contentMarketingData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={contentMarketingData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={contentMarketingData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
