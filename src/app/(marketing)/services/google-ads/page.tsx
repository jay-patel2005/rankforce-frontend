import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './google-ads.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { googleAdsData } from '@/data/services/googleAdsData';

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
  title: 'Google Ads Agency | Rank Force',
  description:
    'A campaign that looks fine on paper can still burn through budget with nothing to show for it. We build, launch, and manage search, shopping, and remarketing campaigns.',
  alternates: {
    canonical: '/services/google-ads',
  },
};

export default function GoogleAdsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        {/* HERO */}
        <ServiceHero data={googleAdsData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={googleAdsData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={googleAdsData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={googleAdsData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={googleAdsData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={googleAdsData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={googleAdsData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={googleAdsData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={googleAdsData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
