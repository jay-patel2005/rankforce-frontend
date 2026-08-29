import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './meta-ads.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { metaAdsData } from '@/data/services/metaAdsData';

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
  title: 'Meta Ads Services | Rank Force',
  description:
    'We build and manage meta ads that actually convert, not just get seen. Targeting, creative, and budget handled by a team that lives inside Ads Manager every day.',
  alternates: {
    canonical: '/services/meta-ads',
  },
};

export default function MetaAdsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={metaAdsData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={metaAdsData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={metaAdsData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={metaAdsData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={metaAdsData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={metaAdsData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={metaAdsData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={metaAdsData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={metaAdsData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
