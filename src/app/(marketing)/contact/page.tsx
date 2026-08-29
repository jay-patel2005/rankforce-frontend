import React from 'react';
import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck, Zap, Handshake, MessageSquare } from 'lucide-react';
import ContactForm from '@/components/sections/contact/ContactForm';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Contact | Rank Force — Get a Free SEO Audit',
  description:
    'Ready to grow your business online? Contact JD today for a free SEO consultation and website audit.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FDF8F5] relative overflow-hidden pb-20">
        {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full border-[40px] border-[#FFF0E6] opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] rounded-full border-[20px] border-[#FFE4D6] opacity-40"></div>
        
        {/* Dotted pattern top left */}
        <div className="absolute top-[15%] left-[5%] grid grid-cols-4 gap-2 opacity-30">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#FF6A00]"></div>
          ))}
        </div>
        
        {/* Squiggle arrow */}
        <svg className="absolute top-[25%] left-[20%] w-24 h-12 text-[#FF6A00]" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 35C15 35 20 15 35 15C50 15 55 45 70 45C80 45 85 25 98 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M88 10L98 15L90 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 md:pt-32">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-orange-100 text-[#FF6A00] text-xs font-bold uppercase tracking-wider mb-6">
            CONTACT US
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Let's Grow Your <span className="text-[#FF6A00]">Business</span> Together
          </h1>
          <p className="text-lg text-gray-600">
            Have a question or want to start a project? Fill out the form and our team
            will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Talk About Your Growth</h2>
              <p className="text-gray-600 mb-10 leading-relaxed">
                We're here to answer your questions, discuss your ideas, and help you choose the right solution for your business.
              </p>

              <div className="space-y-8">
                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#FF6A00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Call Us</h4>
                    <a href="tel:+919876543210" className="text-gray-600 hover:text-[#FF6A00] transition-colors">+91 98765 43210</a>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#FF6A00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Email Us</h4>
                    <a href="mailto:hello@rankforce.com" className="text-gray-600 hover:text-[#FF6A00] transition-colors">hello@rankforce.com</a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#FF6A00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                      A/108, Safal Profitaire, Corporate Road, Prahlad Nagar, Ahmedabad - 380015, Gujarat, India
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0 text-[#FF6A00]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">Business Hours</h4>
                    <p className="text-gray-600 text-sm">Monday - Saturday: 9:30 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Consultation Banner */}
            <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 relative overflow-hidden">
              {/* Decorative faint circles */}
              <div className="absolute top-[-20%] right-[-10%] w-32 h-32 bg-orange-200/40 rounded-full blur-xl"></div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#FF6A00] border border-orange-100">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#FF6A00] mb-2 uppercase tracking-wide">Not sure which service is right for you?</h3>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed font-medium">
                    Tell us your goal and we'll recommend the best solution for your business.
                  </p>
                  <Link href="#contact-form" className="inline-flex items-center justify-center bg-[#FF6A00] hover:bg-[#E65F00] text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-md shadow-orange-500/20">
                    Get Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7" id="contact-form">
            <ContactForm />
          </div>
        </div>

        {/* Trust Bar at the bottom */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0 lg:border-b-0 lg:border-r">
              <div className="text-[#FF6A00] bg-orange-50 p-2.5 rounded-lg">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Quick Response</h4>
                <p className="text-xs text-gray-500">We reply within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border-b sm:border-b-0 lg:border-r border-gray-100 last:border-0 lg:border-b-0">
              <div className="text-[#FF6A00] bg-orange-50 p-2.5 rounded-lg">
                <MapPin className="w-6 h-6" /> {/* Placeholder, use an award/medal icon if available */}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Expert Guidance</h4>
                <p className="text-xs text-gray-500">Get the right solution</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 border-b sm:border-b-0 sm:border-r border-gray-100 last:border-0 lg:border-b-0 lg:border-r">
              <div className="text-[#FF6A00] bg-orange-50 p-2.5 rounded-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">100% Confidential</h4>
                <p className="text-xs text-gray-500">Your data is always safe</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4">
              <div className="text-[#FF6A00] bg-orange-50 p-2.5 rounded-lg">
                <Handshake className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm">Long-Term Partnership</h4>
                <p className="text-xs text-gray-500">We grow with your business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
      <Footer />
    </>
  );
}
