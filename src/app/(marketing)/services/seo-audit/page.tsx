import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './seo-audit.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { seoAuditData } from '@/data/services/seoAuditData';

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
  title: 'SEO Audit Services | Find & Fix Ranking Issues',
  description:
    "Identify SEO issues and unlock growth with expert SEO Audit Services. Analyze technical, on-page, content, and backlink factors to improve rankings.",
  alternates: {
    canonical: '/services/seo-audit',
  },
};

export default function SeoAuditPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={seoAuditData.hero} />

        {/* IMPORTANCE */}
        <ServiceImportance data={seoAuditData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={seoAuditData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={seoAuditData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={seoAuditData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={seoAuditData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={seoAuditData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={seoAuditData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={seoAuditData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
