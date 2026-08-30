'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAdminProfile, logoutAdmin as apiLogout } from '@/lib/apiClient';
import { useRouter, usePathname } from 'next/navigation';

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: AdminUser | null;
  loading: boolean;
  setUser: React.Dispatch<React.SetStateAction<AdminUser | null>>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = async () => {
    try {
      const response = await getAdminProfile();
      if (response.success && response.admin) {
        setUser(response.admin);
      } else {
        setUser(null);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only check auth if we are in the admin routes
    if (pathname.startsWith('/admin')) {
      checkAuth();
    } else {
      setLoading(false);
    }
  }, [pathname]);

  const logout = async () => {
    try {
      await apiLogout();
      setUser(null);
      router.push('/admin/login');
    } catch (error) {
      console.error('Logout error', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, setUser, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
