import Link from 'next/link';
import { SEOBackgroundDecorations } from '@/components/sections/services/on-page-seo/SEOBackgroundDecorations';
import styles from '@/app/(marketing)/services/on-page-seo/on-page-seo.module.css';
import { ServiceHeroData } from '@/types/service-page';

export function ServiceHero({ data }: { data: ServiceHeroData }) {
  return (
    <section className="relative bg-[#FFF8F2] overflow-hidden pt-24 pb-8 lg:pt-28 lg:pb-12">
      <SEOBackgroundDecorations />
      
      <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-full lg:max-w-[660px]">
            {data.badge && (
              <span className="inline-block bg-[#FFF1E6] text-[#FF6A00] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5 border border-[#FFE8D6]">
                {data.badge}
              </span>
            )}
            
            <h1 className="text-[38px] lg:text-[56px] font-extrabold leading-[1.08] text-[#1A1A1A] m-0">
              {data.titleHtml}
            </h1>
            <br/>
            <br/>
            <p className="text-[17px] lg:text-[18px] leading-[1.6] text-[#6B6B6B] mt-12 max-w-[560px]">
              {data.description}
            </p>
            
            <div className="mt-8">
              <Link href={data.buttonLink} className={styles.btn}>
                {data.buttonText}
              </Link>
            </div>
          </div>
          
          {/* RIGHT DASHBOARD */}
          <div className="relative w-full max-w-[600px] mx-auto lg:ml-auto lg:translate-x-10 min-h-[380px] lg:min-h-[500px] hidden lg:flex items-center justify-center">
            {/* Soft Glow Behind Dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[rgba(255,106,0,0.04)] rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            {data.rightComponent}
          </div>
          
        </div>
      </div>
    </section>
  );
}
