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

export const metadata: Metadata = {
  title: 'On-Page SEO: The Complete Guide to Higher Rankings in 2026 | RankWithJD',
  description:
    'Learn what on-page SEO is, the types of on-page SEO, how to check on-page SEO issues, and proven on-page SEO strategies — plus our on-page SEO services.',
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
        <section className={styles.checklistSec}>
          <div className={styles.wrap}>
            <span className={styles.badge}>How to Check On-Page SEO</span>
            <h2>Your Quick On-Page SEO Checklist</h2>
            <p>
              Before optimizing anything, you need to know where you stand. Here's how to check on-page SEO issues without an expensive tool subscription.
            </p>
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
              If you'd rather skip the manual audit, this is exactly the kind of work covered under our on-page SEO services — a trained eye spots issues in minutes that might take you hours to find.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <span className={styles.badge}>Got Questions?</span>
              <h2>Commonly Asked On-Page SEO Questions Answered</h2>
            </div>
            <div className={styles.faqItem}>
              <h3>What is the difference between on-page and off-page SEO?</h3>
              <p>On-page SEO covers everything you control directly on your website — content, tags, structure. Off-page SEO covers external signals like backlinks and mentions.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How long does on-page SEO take to show results?</h3>
              <p>Most sites see measurable movement within 4–8 weeks, though competitive keywords can take longer.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Can I do on-page SEO myself, or do I need on-page SEO services?</h3>
              <p>You can start with the checklist above yourself. But if you want faster, more consistent results, professional on-page SEO services are usually worth it.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What on-page SEO strategies should I prioritize first?</h3>
              <p>Start with title tags, header structure, and matching content to search intent — these on-page SEO strategies typically produce the fastest visible movement.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How often should I check on-page SEO?</h3>
              <p>Ideally once a quarter, or whenever you publish new content or notice a ranking drop.</p>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className={styles.whyRow}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <span className={styles.badge}>The Difference</span>
              <h2>Why Clients Choose Our On-Page SEO Services</h2>
            </div>
            <div className={styles.iconRow}>
              <div className={styles.iconItem}>
                <div className={styles.iconCircle}>✓</div>
                <h3>Proven Strategies</h3>
              </div>
              <div className={styles.iconItem}>
                <div className={styles.iconCircle}>$</div>
                <h3>Transparent Pricing</h3>
              </div>
              <div className={styles.iconItem}>
                <div className={styles.iconCircle}>⏱</div>
                <h3>Fast Turnaround</h3>
              </div>
              <div className={styles.iconItem}>
                <div className={styles.iconCircle}>👤</div>
                <h3>Direct Access</h3>
              </div>
            </div>
          </div>
        </section>

        {/* DASHBOARD BAND */}
        <section className={styles.dashBand}>
          <div className={`${styles.wrap} ${styles.dashGrid}`}>
            <div>
              <div className={styles.eyebrow}>See It In Action</div>
              <h2>Your On-Page SEO Progress, Tracked Clearly</h2>
              <p>
                Every client gets a private dashboard showing exactly how on-page SEO improvements affect rankings and traffic — no vanity metrics.
              </p>
              <div className={styles.dashFeat}>
                <div className={styles.dot}></div>
                <div>Keyword position tracking updated weekly</div>
              </div>
              <div className={styles.dashFeat}>
                <div className={styles.dot}></div>
                <div>Organic traffic and lead growth charts</div>
              </div>
              <div className={styles.dashFeat}>
                <div className={styles.dot}></div>
                <div>On-page SEO issue alerts as they're found</div>
              </div>
            </div>
            <div className={styles.dashMock}>
              <div className={styles.dashMockTop}>
                <span>rankwithjd.in • dashboard</span>
                <span>LIVE</span>
              </div>
              <div className={styles.dashStatRow}>
                <div className={styles.dashStat}>
                  <div className={styles.n}>128</div>
                  <div className={styles.l}>KEYWORDS PG 1</div>
                </div>
                <div className={styles.dashStat}>
                  <div className={styles.n}>42.6K</div>
                  <div className={styles.l}>ORG. TRAFFIC</div>
                </div>
                <div className={styles.dashStat}>
                  <div className={styles.n}>312</div>
                  <div className={styles.l}>LEADS MO.</div>
                </div>
              </div>
              <div className={styles.bars}>
                <div style={{ height: '35%' }}></div>
                <div style={{ height: '50%' }}></div>
                <div style={{ height: '40%' }}></div>
                <div style={{ height: '65%' }}></div>
                <div style={{ height: '55%' }}></div>
                <div style={{ height: '85%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FORM */}
        <section className={styles.ctaForm}>
          <div className={styles.wrap}>
            <span className={styles.badge}>Free Consultation</span>
            <h2>Get a Callback for an On-Page SEO Consultation</h2>
            <p>Share your website and our team will review your on-page SEO for free, no obligation attached.</p>
            <Link href="/contact" className={styles.btn}>
              Request a Callback
            </Link>
          </div>
        </section>

        {/* BLOGS */}
        <section className={styles.blogs}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <span className={styles.badge}>Resources</span>
              <h2>Latest On-Page SEO Strategies and Tips You Need to Know</h2>
            </div>
            <div className={styles.blogGrid}>
              <div className={styles.blogCard}>
                <div className={styles.thumb}>🖼 Image space 300×160</div>
                <div className={styles.content}>
                  <h3>8 On-Page SEO Mistakes Killing Your Rankings</h3>
                  <Link href="/blog/on-page-seo-mistakes">Read More →</Link>
                </div>
              </div>
              <div className={styles.blogCard}>
                <div className={styles.thumb}>🖼 Image space 300×160</div>
                <div className={styles.content}>
                  <h3>How to Check On-Page SEO in 10 Minutes</h3>
                  <Link href="/blog/how-to-check-on-page-seo">Read More →</Link>
                </div>
              </div>
              <div className={styles.blogCard}>
                <div className={styles.thumb}>🖼 Image space 300×160</div>
                <div className={styles.content}>
                  <h3>2026 On-Page SEO Strategies That Actually Work</h3>
                  <Link href="/blog/on-page-seo-strategies">Read More →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS */}
        <section className={styles.awards}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Trusted Approach</div>
            <h2 style={{ color: '#fff' }}>White-Hat On-Page SEO, Backed by Real Results</h2>
            <div className={styles.awardRow}>
              <div className={styles.awardPill}>🏆 Ethical SEO Practices</div>
              <div className={styles.awardPill}>🤝 4+ Years Experience</div>
              <div className={styles.awardPill}>📊 Transparent Reporting</div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className={styles.testi}>
          <div className={styles.wrap}>
            <div className={styles.head}>
              <span className={styles.badge}>Client Feedback</span>
              <h2>Loved by On-Page SEO Clients</h2>
            </div>
            <div className={styles.rating}>
              <div className={styles.n}>4.9</div>
              <div className={styles.stars}>★★★★★</div>
            </div>
            <div className={styles.testiGrid}>
              <div className={styles.testiCard}>
                "Our on-page SEO was a mess before this — now every page actually targets the right intent."
                <div className={styles.who}>Placeholder Client 1</div>
                <div className={styles.role}>CEO, Tech Startup</div>
              </div>
              <div className={styles.testiCard}>
                "The on-page SEO audit alone uncovered issues we didn't know existed for years."
                <div className={styles.who}>Placeholder Client 2</div>
                <div className={styles.role}>Founder, Local Business</div>
              </div>
              <div className={styles.testiCard}>
                "Clear on-page SEO strategies, honest reporting, and steady organic growth every month."
                <div className={styles.who}>Placeholder Client 3</div>
                <div className={styles.role}>Marketing Director</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className={styles.finalCta}>
          <h2>
            Ready to Fix Your <span className={styles.hl}>On-Page SEO</span>?
          </h2>
          <p>Stop losing visitors to competitors with better-optimized pages. Get a free on-page SEO review today.</p>
          <Link href="/contact" className={styles.btn}>
            Get a Free SEO Audit
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
