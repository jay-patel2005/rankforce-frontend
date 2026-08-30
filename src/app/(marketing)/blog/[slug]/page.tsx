import React from 'react';
import Link from 'next/link';
import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { format } from 'date-fns';
import { ChevronRight, Calendar, User, ArrowLeft, Tag } from 'lucide-react';
import FaqAccordion from '@/components/blog/FaqAccordion';
import BlogGrid from '@/components/blog/BlogGrid';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import { IBlogPost } from '@/types/blog';

interface BlogDetailProps {
  params: {
    slug: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Fetch blog data from Express backend
async function getBlog(slug: string) {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) {
      return null;
    }
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

async function getRelatedBlogs(slug: string): Promise<IBlogPost[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/blogs/related/${slug}?limit=3`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data.map((b: any) => ({
      id: b._id,
      title: b.title,
      slug: b.slug,
      excerpt: b.excerpt,
      category: b.category,
      image: b.featuredImage?.url || '',
      imageAlt: b.featuredImageAlt || b.title,
      author: { name: b.author || 'RankForce Team' },
      publishedAt: b.publishedAt,
      readingTime: Math.ceil((b.excerpt?.split(' ').length || 200) / 200) + 2, 
    }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata(
  { params }: BlogDetailProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | RankForce',
    };
  }

  const title = blog.seoTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt;
  const url = blog.canonicalUrl || `https://rankforce.com/blog/${blog.slug}`;
  const imageUrl = blog.ogImage || blog.featuredImage?.url || '';

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: blog.robots || 'index, follow',
    openGraph: {
      title: blog.ogTitle || title,
      description: blog.ogDescription || description,
      url,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
      publishedTime: blog.publishedAt,
      authors: [blog.author],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    notFound();
  }

  // Generate FAQ Schema if FAQs exist
  const faqSchema = blog.faqs && blog.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": blog.faqs.map((faq: any) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const relatedBlogs = await getRelatedBlogs(params.slug);

  return (
    <>
      <Navbar />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      
      <main className="min-h-screen bg-gray-50 pb-20 pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-8 pt-8">
            <Link href="/" className="hover:text-[#FF6A00] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-[#FF6A00] transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900 truncate max-w-[200px] sm:max-w-md">{blog.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-10 text-center sm:text-left">
            <Link 
              href={`/blog?category=${encodeURIComponent(blog.category)}`}
              className="inline-block px-3 py-1 bg-orange-100 text-[#FF6A00] text-sm font-semibold rounded-full mb-6 hover:bg-orange-200 transition-colors"
            >
              {blog.category}
            </Link>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-6 text-gray-500 text-sm font-medium border-y border-gray-200 py-4 mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {blog.publishedAt ? format(new Date(blog.publishedAt), 'MMMM d, yyyy') : ''}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {blog.featuredImage?.url && (
            <div className="relative aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-lg bg-gray-200">
              <img 
                src={blog.featuredImage.url} 
                alt={blog.featuredImageAlt || blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="prose prose-lg prose-orange max-w-none mb-16 text-gray-700 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />

          {/* Tags */}
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex items-center gap-2 mb-16 flex-wrap">
              <Tag className="w-5 h-5 text-gray-400" />
              {blog.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* FAQ Accordion */}
          {blog.faqs && blog.faqs.length > 0 && (
            <div className="mb-16 bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <FaqAccordion faqs={blog.faqs} />
            </div>
          )}

        </article>
      </main>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="bg-white py-20 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Related Insights</h2>
              <Link href="/blog" className="text-[#FF6A00] font-semibold hover:underline hidden sm:block">
                View all posts &rarr;
              </Link>
            </div>
            <BlogGrid posts={relatedBlogs} />
          </div>
        </section>
      )}

      <NewsletterCTA />
      <Footer />
    </>
  );
}
