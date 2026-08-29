import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './social-media-marketing.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { socialMediaMarketingData } from '@/data/services/socialMediaMarketingData';

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
  title: 'Social Media Ads Packages | Rank Force',
  description:
    'Organic posting alone rarely moves the needle anymore. We build, launch, and manage ad campaigns across the platforms your customers actually spend time on.',
  alternates: {
    canonical: '/services/social-media-marketing',
  },
};

export default function SocialMediaMarketingPage() {
  return (
    <>
      <Navbar />
      <main className={styles.pageWrapper}>
        {/* HERO */}
        <ServiceHero data={socialMediaMarketingData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={socialMediaMarketingData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={socialMediaMarketingData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={socialMediaMarketingData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={socialMediaMarketingData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={socialMediaMarketingData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={socialMediaMarketingData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={socialMediaMarketingData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={socialMediaMarketingData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
