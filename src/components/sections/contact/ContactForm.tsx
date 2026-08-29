'use client';

import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Send, Lock, User, Mail, Phone, Globe, ChevronDown, CheckCircle2 } from 'lucide-react';
import { submitContactForm, ContactFormData } from '@/lib/apiClient';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      serviceCategory: 'SEO Services',
      service: '',
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      reset(); // Clear the form
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 flex flex-col items-center justify-center text-center min-h-[500px]">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
        <p className="text-gray-600 mb-8 max-w-md">
          Thank you for reaching out. We've received your message and will get back to you as soon as possible.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="bg-[#FF6A00] hover:bg-[#E65F00] text-white px-8 py-3 rounded-xl font-medium transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Send Us a Message</h2>
        <div className="w-16 h-1 bg-[#FF6A00] rounded-full mt-3"></div>
      </div>

      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm">
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 block">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <User className="h-5 w-5" />
              </div>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                placeholder="Enter your full name"
                className={`w-full pl-11 pr-4 py-3 bg-white border ${errors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00]'} rounded-xl text-sm outline-none transition-all focus:ring-1`}
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Work Email */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 block">
              Work Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Mail className="h-5 w-5" />
              </div>
              <input
                type="email"
                {...register('workEmail', { 
                  required: 'Email is required',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email format' }
                })}
                placeholder="Enter your email address"
                className={`w-full pl-11 pr-4 py-3 bg-white border ${errors.workEmail ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00]'} rounded-xl text-sm outline-none transition-all focus:ring-1`}
              />
            </div>
            {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 block">
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <Phone className="h-5 w-5" />
              </div>
              <input
                type="tel"
                {...register('phone')}
                placeholder="Enter your phone number"
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00] focus:ring-1 rounded-xl text-sm outline-none transition-all"
              />
            </div>
          </div>

          {/* Select Service */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-900 block">
              Select Service <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                {...register('service', { required: 'Please select a service' })}
                className={`w-full px-4 py-3 bg-white border ${errors.service ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00]'} rounded-xl text-sm outline-none transition-all appearance-none focus:ring-1 text-gray-700 cursor-pointer`}
              >
                <option value="" disabled>Select a service</option>
                <option value="Local SEO">Local SEO</option>
                <option value="Ecommerce SEO">Ecommerce SEO</option>
                <option value="Technical SEO">Technical SEO</option>
                <option value="Social Ads">Social Ads</option>
                <option value="Google Ads">Google Ads</option>
                <option value="Web Design">Web Design</option>
                <option value="Other">Other</option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400">
                <ChevronDown className="h-5 w-5" />
              </div>
            </div>
            {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>}
          </div>
        </div>

        {/* Choose a Service Category */}
        <div className="space-y-3 pt-2">
          <label className="text-sm font-semibold text-gray-900 block">
            Choose a Service Category <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Controller
              name="serviceCategory"
              control={control}
              rules={{ required: 'Please select a category' }}
              render={({ field }) => (
                <>
                  {[
                    { title: 'SEO Services', desc: 'Boost rankings & organic traffic' },
                    { title: 'Digital Marketing', desc: 'Grow brand, leads & online presence' },
                    { title: 'Web Development', desc: 'Build fast, responsive & modern websites' }
                  ].map((cat) => (
                    <label 
                      key={cat.title} 
                      className={`relative flex flex-col p-4 border rounded-xl cursor-pointer transition-all ${field.value === cat.title ? 'border-[#FF6A00] bg-orange-50/50' : 'border-gray-200 hover:border-gray-300'}`}
                    >
                      <input 
                        type="radio" 
                        value={cat.title}
                        checked={field.value === cat.title}
                        onChange={(e) => field.onChange(e.target.value)}
                        className="sr-only"
                      />
                      <div className="flex items-center justify-between mb-2">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${field.value === cat.title ? 'border-[#FF6A00]' : 'border-gray-300'}`}>
                          {field.value === cat.title && <div className="w-2.5 h-2.5 bg-[#FF6A00] rounded-full"></div>}
                        </div>
                        {/* Optional icon can go here */}
                      </div>
                      <div className="text-center mt-2">
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">{cat.title}</h4>
                        <p className="text-xs text-gray-500 leading-tight">{cat.desc}</p>
                      </div>
                    </label>
                  ))}
                </>
              )}
            />
          </div>
          {errors.serviceCategory && <p className="text-red-500 text-xs mt-1">{errors.serviceCategory.message}</p>}
        </div>

        {/* Website URL */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 block">
            Website URL
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <Globe className="h-5 w-5" />
            </div>
            <input
              type="url"
              {...register('websiteUrl')}
              placeholder="https://yourwebsite.com"
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00] focus:ring-1 rounded-xl text-sm outline-none transition-all"
            />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-900 block">
            Message / Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register('message', { required: 'Please provide some details' })}
            placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
            rows={4}
            className={`w-full px-4 py-3 bg-white border ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#FF6A00] focus:ring-[#FF6A00]'} rounded-xl text-sm outline-none transition-all focus:ring-1 resize-y`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#FF6A00] hover:bg-[#E65F00] text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="w-5 h-5" />
          )}
          {isSubmitting ? 'Sending...' : 'Send Message'} 
        </button>

        {/* Privacy Note */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-2">
          <Lock className="w-3.5 h-3.5" />
          <p>We respect your privacy. Your information is safe with us.</p>
        </div>
      </form>
    </div>
  );
}
