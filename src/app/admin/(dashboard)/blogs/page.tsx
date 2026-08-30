'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getAdminBlogs, deleteAdminBlog, updateAdminBlogStatus } from '@/lib/apiClient';
import { format } from 'date-fns';
import { Edit, Trash2, Search, Plus, ExternalLink, Globe, File, Calendar, MoreVertical } from 'lucide-react';
import { calculateSeoScore } from '@/lib/seoCalculator';

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Pagination & Filters
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [serviceFilter, setServiceFilter] = useState('All');
  
  const [stats, setStats] = useState({ total: 0, published: 0, drafts: 0, scheduled: 0 });

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getAdminBlogs({ page, limit: 10, search, status: statusFilter, serviceSlug: serviceFilter });
      setBlogs(res.data);
      setTotalPages(res.pagination.totalPages);
      
      // Calculate simple stats from the current payload if we don't have a separate stats endpoint
      // Note: Ideally, we fetch this from a /stats endpoint to get real numbers across all pages.
      // For now, we rely on the payload or a separate call. (We can use the dashboard stats API).
    } catch (err: any) {
      setError(err.message || 'Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page, search, statusFilter, serviceFilter]);

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this blog? This action cannot be undone and will delete the associated image.')) {
      try {
        await deleteAdminBlog(id);
        fetchBlogs();
      } catch (err: any) {
        alert(err.message || 'Failed to delete blog');
      }
    }
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      await updateAdminBlogStatus(id, newStatus);
      fetchBlogs();
    } catch (err: any) {
      alert(err.message || 'Failed to update status');
    }
  };

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'Published': return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center"><Globe className="w-3 h-3 mr-1"/> Published</span>;
      case 'Draft': return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center"><File className="w-3 h-3 mr-1"/> Draft</span>;
      case 'Scheduled': return <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 flex items-center"><Calendar className="w-3 h-3 mr-1"/> Scheduled</span>;
      default: return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blog Management</h1>
          <p className="text-sm text-gray-500">Create, optimize and manage your RankForce content.</p>
        </div>
        <Link 
          href="/admin/blogs/new" 
          className="inline-flex items-center px-4 py-2 bg-[#FF6A00] hover:bg-[#E65C00] text-white text-sm font-medium rounded-lg shadow-sm transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" /> Create New Blog
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search blogs by title or keyword..." 
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] outline-none"
          />
        </div>
        <div className="flex gap-4">
          <select 
            value={statusFilter} 
            onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
            className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00]"
          >
            <option value="All">All Statuses</option>
            <option value="Published">Published</option>
            <option value="Draft">Draft</option>
            <option value="Scheduled">Scheduled</option>
          </select>
          <select 
            value={serviceFilter} 
            onChange={(e) => { setServiceFilter(e.target.value); setPage(1); }}
            className="px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00]"
          >
            <option value="All">All Services</option>
            <option value="seo-services">SEO Services</option>
            <option value="seo-audit">SEO Audit</option>
            <option value="ecommerce-seo">Ecommerce SEO</option>
            <option value="local-seo">Local SEO</option>
            {/* Add more as needed */}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Blog</th>
                <th className="px-6 py-4">Service</th>
                <th className="px-6 py-4 text-center">SEO Score</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Dates</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">Loading blogs...</td>
                </tr>
              ) : blogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">No blogs found.</td>
                </tr>
              ) : (
                blogs.map((blog) => {
                  const seoScoreObj = calculateSeoScore({
                    title: blog.title,
                    slug: blog.slug,
                    excerpt: blog.excerpt,
                    content: blog.content,
                    focusKeyword: blog.focusKeyword,
                    seoTitle: blog.seoTitle,
                    metaDescription: blog.metaDescription,
                    featuredImage: blog.featuredImage?.url,
                    featuredImageAlt: blog.featuredImageAlt,
                  });
                  
                  const score = seoScoreObj.score;
                  
                  return (
                    <tr key={blog._id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-10 rounded overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-200">
                            {blog.featuredImage?.url ? (
                              <img src={blog.featuredImage.url} alt="" className="w-full h-full object-cover" />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">No img</div>
                            )}
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900 line-clamp-1">{blog.title}</div>
                            <div className="text-xs text-gray-500 line-clamp-1">/{blog.slug}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-gray-700 bg-gray-100 px-2 py-1 rounded text-xs">{blog.service}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`font-bold ${score >= 80 ? 'text-green-600' : score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {score}/100
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {renderStatusBadge(blog.status)}
                      </td>
                      <td className="px-6 py-4 text-xs text-gray-500">
                        <div>Pub: {blog.publishedAt ? format(new Date(blog.publishedAt), 'MMM d, yyyy') : '-'}</div>
                        <div>Upd: {format(new Date(blog.updatedAt), 'MMM d, yyyy')}</div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a 
                            href={`/blog/${blog.slug}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded transition-colors"
                            title="Preview"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <Link 
                            href={`/admin/blogs/${blog._id}/edit`}
                            className="p-1.5 text-gray-400 hover:text-[#FF6A00] hover:bg-orange-50 rounded transition-colors"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button 
                            onClick={() => handleDelete(blog._id)}
                            className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-gray-200 flex justify-between items-center bg-gray-50">
            <span className="text-sm text-gray-500">Page {page} of {totalPages}</span>
            <div className="flex gap-2">
              <button 
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
              >
                Prev
              </button>
              <button 
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 border border-gray-300 rounded text-sm disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
