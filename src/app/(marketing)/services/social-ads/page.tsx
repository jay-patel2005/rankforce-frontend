import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './social-ads.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { socialAdsData } from '@/data/services/socialAdsData';

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
  title: 'Social Media Marketing Services | Rank Force',
  description:
    'A strong social media marketing plan turns scrolling into actual sales. We build the content calendar, run the ads, and report on what is moving your business forward.',
  alternates: {
    canonical: '/services/social-ads',
  },
};

export default function SocialAdsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        {/* HERO */}
        <ServiceHero data={socialAdsData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={socialAdsData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={socialAdsData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={socialAdsData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={socialAdsData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={socialAdsData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={socialAdsData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={socialAdsData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={socialAdsData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
