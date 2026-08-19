import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.replace(/-/g, ' ')} | Blog | Rank Force`,
    description: `Read our blog post on ${slug.replace(/-/g, ' ')} — actionable SEO tips and digital marketing insights.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  return (
    <main>
      <h1>Blog Post: {slug}</h1>
      <p>Blog post detail page — coming soon.</p>
    </main>
  );
}
