import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Case Studies | Rank Force`,
    description: `See how Rank Force delivered real results in this ${slug.replace(/-/g, ' ')} case study.`,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <h1>Case Study: {slug}</h1>
      <p>Case study detail page — coming soon.</p>
    </main>
  );
}
