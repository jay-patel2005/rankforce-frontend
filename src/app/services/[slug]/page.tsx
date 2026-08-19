import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Services | Rank Force`,
    description: `Learn about our ${slug.replace(/-/g, ' ')} service and how it can grow your business online.`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <h1>Service: {slug}</h1>
      <p>Service detail page — coming soon.</p>
    </main>
  );
}
