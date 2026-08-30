'use client';

import React from 'react';
import BlogCard from './BlogCard';
import { IBlogPost } from '@/types/blog';

interface BlogGridProps {
  posts: IBlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Latest Insights</h2>
        <p className="text-gray-500 text-base max-w-2xl mx-auto">
          Practical strategies, trends, and insights to help your business grow online.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
