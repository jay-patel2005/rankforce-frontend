'use client';

import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      
      // Reset after 3 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    }, 1000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <div className="bg-orange-50 rounded-3xl overflow-hidden relative border border-orange-100">
        
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2" />

        <div className="relative p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1 max-w-2xl flex gap-6 items-start">
            <div className="hidden sm:flex w-16 h-16 bg-[#FF6A00] rounded-2xl items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                Stay Ahead of the Competition
              </h2>
              <p className="text-gray-600 text-lg">
                Get practical SEO and digital marketing insights delivered straight to your inbox.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-auto flex-shrink-0">
            <form onSubmit={handleSubmit} className="relative max-w-md w-full">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status !== 'idle'}
                  className="flex-1 px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FF6A00] focus:border-transparent text-gray-900 bg-white placeholder-gray-400 disabled:opacity-70 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`
                    px-6 py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center min-w-[140px]
                    ${status === 'success' ? 'bg-green-500' : 'bg-[#FF6A00] hover:bg-[#E65C00] shadow-md shadow-orange-500/20'}
                    disabled:cursor-not-allowed
                  `}
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      Subscribe <ArrowRight className="w-5 h-5 ml-2" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3 sm:text-center lg:text-left">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
