import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import styles from './on-page-seo.module.css';
import { OnPageSEOHero } from '@/components/sections/services/on-page-seo/OnPageSEOHero';
import { OnPageSEOImportance } from '@/components/sections/services/on-page-seo/OnPageSEOImportance';
import { OnPageSEOStatBand } from '@/components/sections/services/on-page-seo/OnPageSEOStatBand';
import { OnPageSEOTools } from '@/components/sections/services/on-page-seo/OnPageSEOTools';
import { OnPageSEOImplement } from '@/components/sections/services/on-page-seo/OnPageSEOImplement';
import { OnPageSEOFaq } from '@/components/sections/services/on-page-seo/OnPageSEOFaq';
import { OnPageSEODifference } from '@/components/sections/services/on-page-seo/OnPageSEODifference';
import { GlobalCTA } from '@/components/sections/GlobalCTA';
import { FeaturedBlogs } from '@/components/sections/FeaturedBlogs';
import { OnPageSEOTestimonials } from '@/components/sections/services/on-page-seo/OnPageSEOTestimonials';

export const metadata: Metadata = {
  title: 'On Page SEO Services | Improve Rankings & Organic Traffic',
  description:
    'Get expert on page SEO services to optimize content, keywords, headings, URLs, and internal links, helping your website rank higher and drive traffic.',
};

export default function OnPageSEOPage() {
  return (
    <>
      <Navbar />
      <main className={styles.seoContainer}>
        {/* HERO */}
        <OnPageSEOHero />

        {/* WHAT IS ON PAGE SEO / IMPORTANCE */}
        <OnPageSEOImportance />

        {/* STAT BAND */}
        <OnPageSEOStatBand />

        {/* TOOLS */}
        <OnPageSEOTools />

        {/* TYPES / IMPLEMENT */}
        <OnPageSEOImplement />

        {/* HOW TO CHECK */}
        <section className={`${styles.checklistSec} pt-8 pb-0`}>
          <div className={styles.wrap}>
            <div className="mb-8">
              <h2 className="text-[36px] font-bold text-[#1A1A1A] leading-tight mb-3">
                Your Quick On-Page SEO Checklist
              </h2>
              <p className="text-[#4B4B4B] text-[17px] leading-relaxed">
                Before optimizing anything, you need to know where you stand.<br />
                Here's how to check on page SEO issues without an expensive tool subscription.
              </p>
            </div>
            <table>
              <tbody>
                <tr>
                  <th>Element</th>
                  <th>What to Check</th>
                  <th>Quick Tool</th>
                </tr>
                <tr>
                  <td>Title Tag</td>
                  <td>Under 60 characters, includes keyword</td>
                  <td>Google SERP preview</td>
                </tr>
                <tr>
                  <td>Meta Description</td>
                  <td>Under 160 characters, compelling copy</td>
                  <td>Yoast / Screaming Frog</td>
                </tr>
                <tr>
                  <td>H1 Tag</td>
                  <td>One per page, matches search intent</td>
                  <td>View page source</td>
                </tr>
                <tr>
                  <td>Content Length</td>
                  <td>Matches or exceeds top-ranking pages</td>
                  <td>Manual competitor check</td>
                </tr>
                <tr>
                  <td>Internal Links</td>
                  <td>3–5 relevant links per page</td>
                  <td>Site crawl</td>
                </tr>
                <tr>
                  <td>Image Alt Text</td>
                  <td>Descriptive and keyword-relevant</td>
                  <td>Inspect element</td>
                </tr>
                <tr>
                  <td>Page Speed</td>
                  <td>Loads in under 3 seconds</td>
                  <td>PageSpeed Insights</td>
                </tr>
                <tr>
                  <td>Mobile Friendliness</td>
                  <td>Passes mobile usability test</td>
                  <td>Google Search Console</td>
                </tr>
              </tbody>
            </table>
            <p style={{ marginTop: '18px' }}>
              If you'd rather skip the manual audit, this is exactly the kind of work covered under our on page SEO services — a trained eye spots issues in minutes that might take you hours to find.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <OnPageSEOFaq />

        {/* WHY CHOOSE */}
        <OnPageSEODifference />



        {/* BLOGS */}
        <FeaturedBlogs />



        {/* TESTIMONIALS */}
        <OnPageSEOTestimonials />

        {/* GLOBAL CTA */}
        <GlobalCTA />
      </main>
      <Footer />
    </>
  );
}
