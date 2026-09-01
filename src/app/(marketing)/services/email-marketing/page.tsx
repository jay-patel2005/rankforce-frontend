import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './email-marketing.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { emailMarketingData } from '@/data/services/emailMarketingData';

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
  title: 'Email Marketing Services | Drive Leads & Sales',
  description:
    'Grow your business with Email Marketing Services that engage customers, nurture leads, increase conversions, and build lasting customer relationships.',
  alternates: {
    canonical: '/services/email-marketing',
  },
};

export default function EmailMarketingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={emailMarketingData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={emailMarketingData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={emailMarketingData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={emailMarketingData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={emailMarketingData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={emailMarketingData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={emailMarketingData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={emailMarketingData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={emailMarketingData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
