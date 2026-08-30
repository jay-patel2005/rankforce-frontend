'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Eye, EyeOff, Lock, Mail, AlertCircle, ArrowLeft } from 'lucide-react';
import { loginAdmin, verifyOtp, resendOtp } from '@/lib/apiClient';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminLogin() {
  const [step, setStep] = useState<'credentials' | 'otp'>('credentials');
  const [email, setEmail] = useState('');
  
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // OTP States
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [cooldown, setCooldown] = useState(0);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const { user, checkAuth } = useAuth();
  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    if (user) {
      router.push('/admin/dashboard');
    }
  }, [user, router]);

  // Cooldown timer for Resend OTP
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [cooldown]);

  const onCredentialsSubmit = async (data: any) => {
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await loginAdmin({ email: data.email, password: data.password });
      if (res.success && res.requiresOtp) {
        setEmail(data.email);
        setStep('otp');
        setCooldown(60); // Start 60s cooldown
      } else if (res.success) {
        // Fallback if somehow OTP is skipped
        await checkAuth();
        router.push('/admin/dashboard');
      } else {
        setErrorMsg(res.message || 'Invalid credentials');
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Invalid email or password.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(value.length - 1); // Only take the last character typed
    }
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input automatically
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const onVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpString = otp.join('');
    if (otpString.length !== 6) {
      setErrorMsg('Please enter a complete 6-digit code.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await verifyOtp({ email, otp: otpString });
      if (res.success) {
        await checkAuth();
        router.push('/admin/dashboard');
      } else {
        setErrorMsg(res.message || 'Invalid verification code.');
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Invalid verification code. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResendOtp = async () => {
    if (cooldown > 0) return;
    
    setIsSubmitting(true);
    setErrorMsg('');
    try {
      const res = await resendOtp({ email });
      if (res.success) {
        setCooldown(60);
      } else {
        setErrorMsg(res.message || 'Failed to resend OTP.');
      }
    } catch (error: any) {
      setErrorMsg(error.message || 'Please wait before requesting a new OTP.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF8F5] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full border-[30px] border-[#FFF0E6] opacity-60"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] rounded-full border-[20px] border-[#FFE4D6] opacity-40"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center mb-8">
        <Link href="/" className="inline-flex items-center gap-2 mb-4">
          <span className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Rank<span className="text-[#FF6A00]">Force</span>
          </span>
        </Link>
        <h2 className="text-2xl font-bold text-gray-900">
          {step === 'credentials' ? 'Welcome Back' : 'Verify Your Email'}
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          {step === 'credentials' 
            ? 'Sign in to your admin account' 
            : `We've sent a 6-digit verification code to your registered email.`}
        </p>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-orange-900/5 sm:rounded-2xl sm:px-10 border border-gray-100">
          
          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{errorMsg}</p>
            </div>
          )}

          {step === 'credentials' ? (
            <form className="space-y-6" onSubmit={handleSubmit(onCredentialsSubmit)}>
              <div>
                <label className="block text-sm font-semibold text-gray-900">Email Address</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className={`block w-full pl-10 pr-3 py-2.5 border ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-[#FF6A00] focus:border-[#FF6A00]'} rounded-xl text-sm transition-colors outline-none focus:ring-1`}
                    placeholder="admin@rankforce.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900">Password</label>
                <div className="mt-2 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password', { required: 'Password is required' })}
                    className={`block w-full pl-10 pr-10 py-2.5 border ${errors.password ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-200 focus:ring-[#FF6A00] focus:border-[#FF6A00]'} rounded-xl text-sm transition-colors outline-none focus:ring-1`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message as string}</p>}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#FF6A00] focus:ring-[#FF6A00] border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-[#FF6A00] hover:text-[#E65F00]">
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E65F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6A00] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Continue'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={onVerifyOtp}>
              <div>
                <label className="block text-sm font-semibold text-gray-900 text-center mb-4">
                  Enter 6-digit OTP
                </label>
                <div className="flex justify-center gap-2 sm:gap-3">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { otpRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-10 h-12 sm:w-12 sm:h-14 text-center text-xl font-bold border border-gray-300 rounded-lg focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] outline-none transition-colors"
                      required
                    />
                  ))}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || otp.some(d => d === '')}
                  className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-xl shadow-sm text-sm font-bold text-white bg-[#FF6A00] hover:bg-[#E65F00] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6A00] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    'Verify OTP'
                  )}
                </button>
              </div>
              
              <div className="flex flex-col items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleResendOtp}
                  disabled={cooldown > 0 || isSubmitting}
                  className="text-sm font-medium text-[#FF6A00] hover:text-[#E65F00] disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {cooldown > 0 ? `Resend available in ${cooldown}s` : 'Resend OTP'}
                </button>
                
                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-1 mt-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Login
                </button>
              </div>
            </form>
          )}
        </div>
        
        <p className="mt-8 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} RankForce. All rights reserved.
        </p>
      </div>
    </div>
  );
}
