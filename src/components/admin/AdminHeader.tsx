'use client';

import React, { useState } from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AdminHeaderProps {
  onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: AdminHeaderProps) {
  const { user, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 lg:px-8 z-30 relative">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <Menu size={24} />
        </button>
        <div className="hidden sm:flex items-center bg-gray-100 rounded-lg px-3 py-1.5">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-48 text-gray-700 outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>

        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-[#FF6A00] font-bold">
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">{user?.name || 'Admin'}</p>
              <p className="text-xs text-gray-500 capitalize">{user?.role || 'Administrator'}</p>
            </div>
          </button>

          {showProfileMenu && (
            <>
              <div 
                className="fixed inset-0 z-40" 
                onClick={() => setShowProfileMenu(false)}
              />
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                  <p className="text-sm font-semibold text-gray-900">{user?.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                </div>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    // navigate to profile
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
                >
                  <User size={16} /> My Profile
                </button>
                <button
                  onClick={() => {
                    setShowProfileMenu(false);
                    logout();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                >
                  Log out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
