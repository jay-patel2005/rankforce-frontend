'use client';

import React, { useState, useEffect, useMemo } from 'react';
import BlogHero from '@/components/blog/BlogHero';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import BlogCategoryFilter from '@/components/blog/BlogCategoryFilter';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogPagination from '@/components/blog/BlogPagination';
import BlogEmptyState from '@/components/blog/BlogEmptyState';
import NewsletterCTA from '@/components/blog/NewsletterCTA';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { getPublicBlogs } from '@/lib/apiClient';
import { IBlogPost } from '@/types/blog';
import { blogCategories } from '@/data/blogData'; // Just taking categories if it's static

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<IBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const res = await getPublicBlogs({ 
          page: currentPage, 
          limit: POSTS_PER_PAGE,
          category: activeCategory !== 'All' ? activeCategory : undefined
        });

        // Map API response to IBlogPost format expected by components
        const mappedBlogs: IBlogPost[] = res.data.map((b: any) => ({
          id: b._id,
          title: b.title,
          slug: b.slug,
          excerpt: b.excerpt,
          content: b.content || '',
          category: b.category,
          image: b.featuredImage?.url || '',
          imageAlt: b.featuredImageAlt || b.title,
          author: { name: b.author || 'RankForce Team' },
          publishedAt: b.publishedAt,
          readingTime: Math.ceil((b.excerpt?.split(' ').length || 200) / 200) + 2, 
        }));

        setBlogs(mappedBlogs);
        setTotalPosts(res.pagination.total);
        setTotalPages(res.pagination.totalPages);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, [currentPage, activeCategory]);

  // Use the first blog on the first page of "All" as featured
  const featuredPost = useMemo(() => {
    if (activeCategory === 'All' && currentPage === 1 && blogs.length > 0) {
      return blogs[0];
    }
    return null;
  }, [blogs, activeCategory, currentPage]);

  const gridPosts = useMemo(() => {
    if (featuredPost) {
      return blogs.filter(post => post.id !== featuredPost.id);
    }
    return blogs;
  }, [blogs, featuredPost]);

  // Handlers
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setActiveCategory('All');
    setCurrentPage(1);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        <BlogHero />

        {featuredPost && (
          <FeaturedBlog post={featuredPost} />
        )}

        <div id="blog-grid" className="scroll-mt-24">
          <BlogCategoryFilter 
            categories={blogCategories} 
            activeCategory={activeCategory} 
            onCategoryChange={handleCategoryChange} 
          />
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24 text-gray-500">
            Loading latest insights...
          </div>
        ) : gridPosts.length > 0 || featuredPost ? (
          <>
            <BlogGrid posts={gridPosts} />
            
            {totalPages > 1 && (
              <BlogPagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            )}
          </>
        ) : (
          <BlogEmptyState 
            category={activeCategory} 
            onClearFilters={handleClearFilters} 
          />
        )}

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
