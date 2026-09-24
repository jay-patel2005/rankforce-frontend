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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
