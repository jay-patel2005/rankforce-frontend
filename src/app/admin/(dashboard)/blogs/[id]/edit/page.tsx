'use client';

import React, { useEffect, useState } from 'react';
import BlogForm from '@/components/admin/blogs/BlogForm';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAdminBlogById } from '@/lib/apiClient';

interface EditBlogPageProps {
  params: { id: string };
}

export default function EditBlogPage({ params }: EditBlogPageProps) {
  const { id } = params;
  const [blogData, setBlogData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getAdminBlogById(id);
        setBlogData(res.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch blog');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500 font-medium">Loading blog data...</div>
      </div>
    );
  }

  if (error || !blogData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="text-red-500 font-medium">{error || 'Blog not found'}</div>
        <Link href="/admin/blogs" className="text-[#FF6A00] hover:underline">
          Return to Blogs
        </Link>
      </div>
    );
  }

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
      <BlogForm initialData={blogData} isEdit={true} />
    </div>
  );
}
