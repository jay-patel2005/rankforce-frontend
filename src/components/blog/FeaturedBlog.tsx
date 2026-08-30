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
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-md transition-shadow duration-300">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-[55%] relative overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="block w-full h-full">
              <div className="w-full aspect-[1200/628] lg:h-full lg:aspect-auto relative">
                <img 
                  src={post.image} 
                  alt={post.imageAlt} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
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
            
            <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#FF6A00] transition-colors">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {post.title}
              </h2>
            </Link>
            
            <p className="text-gray-600 mb-6 line-clamp-3 text-base lg:text-lg leading-relaxed">
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
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-[#FF6A00] hover:bg-[#E65C00] transition-colors duration-300 shadow-sm"
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
