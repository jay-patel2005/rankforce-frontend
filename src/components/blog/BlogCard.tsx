'use client';

import React from 'react';
import Link from 'next/link';
import { IBlogPost } from '@/types/blog';
import { Clock } from 'lucide-react';

interface BlogCardProps {
  post: IBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-[20px] shadow-sm border border-[#E5E7EB] overflow-hidden flex flex-col group hover:-translate-y-1 hover:border-gray-300 hover:shadow-md transition-all duration-300">
      {/* Image Container with 1200:628 Aspect Ratio */}
      <div className="w-full aspect-[1200/628] overflow-hidden relative bg-gray-100">
        <Link href={`/blog/${post.slug}`} className="block w-full h-full">
          <img 
            src={post.image} 
            alt={post.imageAlt}
            className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-300 ease-out"
          />
        </Link>

      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <Link href={`/blog/${post.slug}`} className="block mb-2.5">
          <h3 className="text-[20px] lg:text-[22px] font-bold text-[#1A1A1A] line-clamp-2 leading-[1.3] group-hover:text-[#FF6A00] transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-[#6B6B6B] text-[15px] lg:text-[16px] mb-5 line-clamp-3 leading-[1.6] flex-grow">
          {post.excerpt}
        </p>

        {/* Footer Meta */}
        <div className="flex items-center justify-between pt-0 mt-auto">
          <div className="flex items-center gap-2 text-[13px] lg:text-[14px] font-medium text-[#6B7280]">
            <span className="flex items-center gap-1">
              <Clock className="w-[14px] h-[14px]" />
              {post.readingTime} min read
            </span>
          </div>
          
          <Link 
            href={`/blog/${post.slug}`}
            className="text-[15px] font-semibold text-[#FF6A00] flex items-center group-hover:text-[#FF6A00] transition-colors"
          >
            Read More <span className="ml-1.5 transform group-hover:translate-x-1 transition-transform font-bold">&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
