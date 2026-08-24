import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './local-seo.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { localSeoData } from '@/data/services/localSeoData';

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
  title: '[LOCAL SEO PAGE TITLE] | Rank Force',
  description:
    '[LOCAL SEO META DESCRIPTION — describe your local SEO service and its business benefit in 150-160 characters.]',
};

export default function LocalSEOPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={localSeoData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={localSeoData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={localSeoData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={localSeoData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={localSeoData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={localSeoData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={localSeoData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={localSeoData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={localSeoData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
