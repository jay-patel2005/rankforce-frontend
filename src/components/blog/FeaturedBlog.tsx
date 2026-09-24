'use client';

import React from 'react';
import Link from 'next/link';
import { IBlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';

interface FeaturedBlogProps {
  post: IBlogPost;
}

export default function FeaturedBlog({ post }: FeaturedBlogProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="bg-white rounded-[20px] shadow-sm border border-[#E5E7EB] overflow-hidden group hover:-translate-y-1 hover:border-gray-300 hover:shadow-md transition-all duration-300">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] relative overflow-hidden h-[260px] sm:h-[320px] lg:h-auto min-h-0">
            <Link href={`/blog/${post.slug}`} className="block w-full h-full">
              <div className="w-full h-full relative" style={{ minHeight: '260px' }}>
                <img 
                  src={post.image} 
                  alt={post.imageAlt} 
                  className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-500 ease-out absolute inset-0"
                />
              </div>
            </Link>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-orange-100 text-[#FF6A00] text-xs font-bold uppercase tracking-wider">
                Featured
              </span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                {post.category}
              </span>
            </div>
            
            <Link href={`/blog/${post.slug}`} className="block mb-4">
              <h2 className="text-[24px] lg:text-[32px] font-bold text-[#1A1A1A] leading-[1.3] group-hover:text-[#FF6A00] transition-colors">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-[#6B6B6B] mb-6 line-clamp-3 text-[16px] lg:text-[18px] leading-[1.6]">
              {post.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 font-medium">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#FF6A00]" />
                {post.author.name}
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div>
                {format(new Date(post.publishedAt), 'MMM dd, yyyy')}
              </div>
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#FF6A00]" />
                {post.readingTime} min read
              </div>
            </div>
            
            <div>
              <Link 
                href={`/blog/${post.slug}`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-[#FF6A00] hover:bg-[#E65C00] transition-colors duration-300 shadow-sm"
              >
                Read Article &rarr;
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
