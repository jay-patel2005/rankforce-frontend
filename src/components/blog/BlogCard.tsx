'use client';

import React from 'react';
import Link from 'next/link';
import { IBlogPost } from '@/types/blog';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: IBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Image Container with 1200:628 Aspect Ratio */}
      <div className="w-full aspect-[1200/628] overflow-hidden relative bg-gray-100">
        <Link href={`/blog/${post.slug}`} className="block w-full h-full">
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </Link>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-gray-900 shadow-sm uppercase tracking-wider">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-[#FF6A00] transition-colors mb-3">
          <h3 className="text-xl font-bold text-gray-900 line-clamp-2 leading-snug">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
          {post.excerpt}
        </p>

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
          <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
            <span>{format(new Date(post.publishedAt), 'MMM dd, yyyy')}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              {post.readingTime} min read
            </span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-sm font-semibold text-[#FF6A00] flex items-center group-hover:text-[#E65C00] transition-colors"
          >
            Read More <span className="ml-1 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
