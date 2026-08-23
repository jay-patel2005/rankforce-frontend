import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './ecommerce-seo.module.css';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { ecommerceSeoData } from '@/data/services/ecommerceSeoData';

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
  title: 'E-commerce SEO Services | Increase Online Store Sales & Organic Traffic',
  description:
    'Expert e-commerce SEO services designed to optimize your product pages, categories, and technical foundation to drive high-intent buyers to your store.',
};

export default function EcommerceSEOPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <ServiceHero data={ecommerceSeoData.hero} />



        {/* IMPORTANCE */}
        <ServiceImportance data={ecommerceSeoData.importance} />

        {/* STAT BAND */}
        <ServiceStatBand data={ecommerceSeoData.statBand} />

        {/* TOOLS */}
        <ServiceTools data={ecommerceSeoData.tools} />

        {/* IMPLEMENT */}
        <ServiceImplement data={ecommerceSeoData.implement} />

        {/* CHECKLIST */}
        <ServiceChecklist data={ecommerceSeoData.checklist} />

        {/* FAQ */}
        <ServiceFaq data={ecommerceSeoData.faq} />

        {/* WHY CHOOSE */}
        <ServiceDifference data={ecommerceSeoData.difference} />

        {/* BLOGS */}
        <FeaturedBlogs />

        {/* TESTIMONIALS */}
        <ServiceTestimonials data={ecommerceSeoData.testimonials} />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
