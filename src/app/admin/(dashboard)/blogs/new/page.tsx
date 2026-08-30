'use client';

import React from 'react';
import BlogForm from '@/components/admin/blogs/BlogForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NewBlogPage() {
  return (
    <div className="space-y-6">
      <div>
        <Link 
          href="/admin/blogs" 
          className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#FF6A00] transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blogs
        </Link>
      </div>
      <BlogForm />
    </div>
  );
}
