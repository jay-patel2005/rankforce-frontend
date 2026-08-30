'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Upload, X, Save, Eye, Calendar, Settings } from 'lucide-react';
import { createAdminBlog, updateAdminBlog } from '@/lib/apiClient';
import SeoScoreCalculator from './SeoScoreCalculator';
import FaqBuilder, { FAQ } from './FaqBuilder';
import 'react-quill-new/dist/quill.snow.css';

// Dynamically import Quill to avoid SSR issues
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const SERVICES = [
  { name: 'SEO Services', slug: 'seo-services' },
  { name: 'SEO Audit', slug: 'seo-audit' },
  { name: 'Technical SEO', slug: 'technical-seo' },
  { name: 'Ecommerce SEO', slug: 'ecommerce-seo' },
  { name: 'Local SEO', slug: 'local-seo' },
  { name: 'AEO', slug: 'aeo' },
  { name: 'GEO', slug: 'geo' },
  { name: 'Social Media Marketing', slug: 'social-media-marketing' },
  { name: 'Google Ads', slug: 'google-ads' },
  { name: 'Social Ads', slug: 'social-ads' },
  { name: 'Meta Ads', slug: 'meta-ads' },
  { name: 'Content Marketing', slug: 'content-marketing' },
  { name: 'Email Marketing', slug: 'email-marketing' },
  { name: 'Performance Marketing', slug: 'performance-marketing' },
  { name: 'Web Development', slug: 'web-development' },
];

const CATEGORIES = ['SEO', 'Technical SEO', 'Local SEO', 'Ecommerce SEO', 'Content Marketing', 'Digital Marketing', 'Google Ads', 'Social Media', 'Web Development'];

interface BlogFormProps {
  initialData?: any;
  isEdit?: boolean;
}

export default function BlogForm({ initialData, isEdit = false }: BlogFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [title, setTitle] = useState(initialData?.title || '');
  const [slug, setSlug] = useState(initialData?.slug || '');
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [author, setAuthor] = useState(initialData?.author || 'RankForce Team');
  const [category, setCategory] = useState(initialData?.category || CATEGORIES[0]);
  const [serviceSlug, setServiceSlug] = useState(initialData?.serviceSlug || SERVICES[0].slug);
  
  // Image State
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);
  const [featuredImagePreview, setFeaturedImagePreview] = useState<string | null>(initialData?.featuredImage?.url || null);
  const [featuredImageAlt, setFeaturedImageAlt] = useState(initialData?.featuredImageAlt || '');

  // SEO State
  const [focusKeyword, setFocusKeyword] = useState(initialData?.focusKeyword || '');
  const [secondaryKeywords, setSecondaryKeywords] = useState<string[]>(initialData?.secondaryKeywords || []);
  const [secondaryKeywordInput, setSecondaryKeywordInput] = useState('');
  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || '');
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || '');
  const [canonicalUrl, setCanonicalUrl] = useState(initialData?.canonicalUrl || '');
  
  // FAQ State
  const [faqs, setFaqs] = useState<FAQ[]>(initialData?.faqs || []);

  // Publish State
  const [status, setStatus] = useState<'Draft' | 'Published' | 'Scheduled'>(initialData?.status || 'Draft');
  const [scheduledAt, setScheduledAt] = useState<string>(
    initialData?.scheduledAt ? new Date(initialData.scheduledAt).toISOString().slice(0, 16) : ''
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Auto-generate slug from title if empty and not editing
  useEffect(() => {
    if (!isEdit && title && !slug) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [title, isEdit]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File is too large. Max size is 5MB.');
        return;
      }
      setFeaturedImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFeaturedImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFeaturedImageFile(null);
    setFeaturedImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent, submitStatus: 'Draft' | 'Published' | 'Scheduled') => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const selectedService = SERVICES.find(s => s.slug === serviceSlug);

      const formData = new FormData();
      formData.append('title', title);
      formData.append('slug', slug);
      formData.append('excerpt', excerpt);
      formData.append('content', content);
      formData.append('author', author);
      formData.append('category', category);
      formData.append('service', selectedService?.name || '');
      formData.append('serviceSlug', serviceSlug);
      
      formData.append('focusKeyword', focusKeyword);
      formData.append('secondaryKeywords', JSON.stringify(secondaryKeywords));
      formData.append('seoTitle', seoTitle);
      formData.append('metaDescription', metaDescription);
      formData.append('canonicalUrl', canonicalUrl);
      
      formData.append('featuredImageAlt', featuredImageAlt);
      formData.append('faqs', JSON.stringify(faqs));
      formData.append('status', submitStatus);
      
      if (submitStatus === 'Scheduled' && scheduledAt) {
        formData.append('scheduledAt', new Date(scheduledAt).toISOString());
      }

      if (featuredImageFile) {
        formData.append('featuredImage', featuredImageFile);
      }

      if (isEdit && initialData?._id) {
        await updateAdminBlog(initialData._id, formData);
      } else {
        await createAdminBlog(formData);
      }

      router.push('/admin/blogs');
    } catch (err: any) {
      setError(err.message || 'An error occurred while saving the blog.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // React Quill Modules configuration
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  return (
    <form className="max-w-6xl mx-auto pb-24" onSubmit={(e) => e.preventDefault()}>
      
      {/* Header Actions */}
      <div className="flex justify-between items-center mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200 sticky top-0 z-10">
        <h1 className="text-2xl font-bold text-gray-900">
          {isEdit ? 'Edit Blog Post' : 'Create New Blog Post'}
        </h1>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'Draft')}
            disabled={isSubmitting}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg flex items-center transition-colors"
          >
            <Save className="w-4 h-4 mr-2" /> Save Draft
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'Published')}
            disabled={isSubmitting}
            className="px-4 py-2 bg-[#FF6A00] hover:bg-[#E65C00] text-white font-medium rounded-lg flex items-center shadow-sm transition-colors"
          >
            <Upload className="w-4 h-4 mr-2" /> Publish Now
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Basic Info */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2">Basic Information</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug *</label>
              <input
                type="text"
                required
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent outline-none bg-gray-50"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (Short Description) *</label>
              <textarea
                required
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Content Editor */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <h2 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Blog Content *</h2>
             <div className="h-[500px] mb-12">
               <ReactQuill 
                 theme="snow" 
                 value={content} 
                 onChange={setContent}
                 modules={quillModules}
                 className="h-full"
               />
             </div>
          </div>

          {/* FAQs */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
             <FaqBuilder faqs={faqs} onChange={setFaqs} />
          </div>

        </div>

        {/* RIGHT COLUMN: Sidebar Settings */}
        <div className="space-y-6">
          
          {/* Featured Image */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2 mb-4">Featured Image *</h2>
            
            <div className="mb-4">
              {featuredImagePreview ? (
                <div className="relative rounded-lg overflow-hidden border border-gray-200 aspect-[1200/628] bg-gray-100">
                  <img src={featuredImagePreview} alt="Preview" className="w-full h-full object-cover" />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md text-red-500 hover:bg-red-50"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div 
                  className="border-2 border-dashed border-gray-300 rounded-lg aspect-[1200/628] flex flex-col items-center justify-center text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="w-8 h-8 mb-2 text-gray-400" />
                  <span className="text-sm font-medium">Click to upload image</span>
                  <span className="text-xs text-gray-400 mt-1">1200 x 628 recommended</span>
                </div>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/jpeg,image/png,image/jpg,image/webp"
                className="hidden"
              />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Image Alt Text *</label>
              <input
                type="text"
                required
                value={featuredImageAlt}
                onChange={(e) => setFeaturedImageAlt(e.target.value)}
                placeholder="E.g. SEO Audit Checklist"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#FF6A00] outline-none"
              />
            </div>
          </div>

          {/* Classification */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2">Classification</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Related Service</label>
              <select
                value={serviceSlug}
                onChange={(e) => setServiceSlug(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
              >
                {SERVICES.map(srv => <option key={srv.slug} value={srv.slug}>{srv.name}</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Author</label>
              <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none"
              />
            </div>
          </div>

          {/* SEO Settings */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b pb-2">SEO Settings</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Focus Keyword</label>
              <input
                type="text"
                value={focusKeyword}
                onChange={(e) => setFocusKeyword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Secondary Keywords</label>
              <div className="w-full min-h-[42px] px-3 py-2 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-[#FF6A00] focus-within:border-transparent flex flex-wrap gap-2">
                {secondaryKeywords.map((kw, idx) => (
                  <span key={idx} className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded-md flex items-center border border-gray-200">
                    {kw}
                    <button 
                      type="button" 
                      onClick={() => setSecondaryKeywords(prev => prev.filter((_, i) => i !== idx))}
                      className="ml-1 text-gray-500 hover:text-red-500"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
                <input
                  type="text"
                  value={secondaryKeywordInput}
                  onChange={(e) => setSecondaryKeywordInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ',') {
                      e.preventDefault();
                      const val = secondaryKeywordInput.trim();
                      if (val && !secondaryKeywords.includes(val)) {
                        setSecondaryKeywords(prev => [...prev, val]);
                        setSecondaryKeywordInput('');
                      }
                    }
                  }}
                  placeholder="Type keyword and press Enter"
                  className="flex-grow outline-none min-w-[150px] text-sm"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">Press Enter or comma to add a keyword.</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Title <span className={`text-xs float-right ${seoTitle.length > 60 ? 'text-red-500' : 'text-gray-500'}`}>{seoTitle.length}/60</span>
              </label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Description <span className={`text-xs float-right ${metaDescription.length > 160 ? 'text-red-500' : 'text-gray-500'}`}>{metaDescription.length}/160</span>
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
              <input
                type="text"
                value={canonicalUrl}
                onChange={(e) => setCanonicalUrl(e.target.value)}
                placeholder={`https://rankforce.in/blog/${slug || 'example-slug'}`}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent"
              />
            </div>
          </div>

          {/* SEO Score Calculator */}
          <SeoScoreCalculator data={{
            title,
            slug,
            excerpt,
            content,
            focusKeyword,
            secondaryKeywords,
            seoTitle,
            metaDescription,
            featuredImage: featuredImagePreview,
            featuredImageAlt,
            canonicalUrl
          }} />

        </div>
      </div>
    </form>
  );
}
