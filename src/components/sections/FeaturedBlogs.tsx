"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Folder } from 'lucide-react';
import apiClient from '@/lib/apiClient';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage?: string;
  category: string;
  publishedAt: string;
}

export function FeaturedBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await apiClient.get('/blog/latest?limit=3');
        if (response.data && response.data.success) {
          setBlogs(response.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section className="w-full pt-8 pb-0 lg:pt-10 lg:pb-0 bg-[#FFF8F3]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center mb-14 max-w-[800px] mx-auto">
          <span className="inline-block px-4 py-1.5 mb-5 rounded-full bg-[#FF6A00]/10 text-[#E65C00] text-[12px] font-bold tracking-wider uppercase">
            RESOURCES
          </span>
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#111111] leading-[1.2] mb-5">
            Latest SEO Strategies and Tips You Need to Know
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#667085] leading-relaxed">
            Explore our latest blogs and stay updated with actionable on page SEO strategies, insights, and best practices.
          </p>
        </div>

        {/* LOADING STATE */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((skeleton) => (
              <div key={skeleton} className="bg-white rounded-[20px] border border-[#FF6A00]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] overflow-hidden">
                <div className="w-full aspect-video bg-gray-200 animate-pulse" />
                <div className="p-6">
                  <div className="flex gap-4 mb-4">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded mb-3 animate-pulse" />
                  <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse" />
                  <div className="h-4 w-full bg-gray-200 rounded mb-6 animate-pulse" />
                  <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ERROR STATE */}
        {!loading && error && (
          <div className="text-center py-12 bg-white rounded-[20px] border border-[#FF6A00]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <p className="text-[#111111] font-medium mb-4">Unable to load the latest resources right now.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="text-[#FF6A00] font-semibold hover:underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* EMPTY STATE */}
        {!loading && !error && blogs.length === 0 && (
          <div className="text-center py-16 bg-white rounded-[20px] border border-[#FF6A00]/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <h3 className="text-[24px] font-bold text-[#111111] mb-2">Coming Soon</h3>
            <p className="text-[#667085]">New SEO insights and resources will appear here soon.</p>
          </div>
        )}

        {/* BLOG GRID */}
        {!loading && !error && blogs.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog._id}
                className="group flex flex-col bg-white/80 backdrop-blur-sm rounded-[20px] border border-[#FF6A00]/15 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_15px_40px_rgba(255,106,0,0.1)] h-full"
              >
                {/* Image */}
                <Link href={`/blog/${blog.slug}`} className="block overflow-hidden aspect-video relative bg-[#FFF1E6]">
                  {blog.coverImage ? (
                    <img 
                      src={blog.coverImage} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#FF6A00]/40 font-medium">
                      No Image Available
                    </div>
                  )}
                </Link>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-[13px] text-[#667085] font-medium mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#FF6A00]" />
                      {formatDate(blog.publishedAt)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Folder size={14} className="text-[#FF6A00]" />
                      {blog.category}
                    </div>
                  </div>

                  {/* Title */}
                  <Link href={`/blog/${blog.slug}`}>
                    <h3 className="text-[20px] font-bold text-[#111111] leading-tight mb-3 transition-colors duration-200 group-hover:text-[#FF6A00] line-clamp-2">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="text-[15px] text-[#667085] leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {blog.excerpt}
                  </p>

                  {/* Read More */}
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-2 text-[15px] font-bold text-[#FF6A00] mt-auto transition-colors duration-200 group-hover:text-[#E65C00]"
                  >
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* VIEW ALL BUTTON */}
        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-transparent border-[1.5px] border-[#FF6A00] px-8 h-[52px] text-[16px] font-bold text-[#FF6A00] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#FF6A00] hover:text-white"
          >
            View All Blogs
            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
