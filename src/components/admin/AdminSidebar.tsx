'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, Users, FileText, BarChart, Settings, LogOut, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname();
  const { logout } = useAuth();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Contact Leads', path: '/admin/leads', icon: Users },
    { name: 'Blog Management', path: '/admin/blogs', icon: FileText },
    { name: 'Analytics', path: '/admin/analytics', icon: BarChart },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#111827] text-white flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-gray-800">
          <Link href="/admin/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold">
              Rank<span className="text-[#FF6A00]">Force</span>
            </span>
            <span className="text-xs bg-gray-800 px-2 py-0.5 rounded text-gray-400">ADMIN</span>
          </Link>
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-6 px-3">
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4 px-3">
            Main Menu
          </div>
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => {
                    if (window.innerWidth < 1024) onClose();
                  }}
                  className={`flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
                    isActive
                      ? 'bg-[#FF6A00] text-white'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className={`w-5 h-5 mr-3 ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                  <span className="font-medium text-sm">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Area */}
        <div className="p-4 border-t border-gray-800">
          <button
            onClick={logout}
            className="flex items-center w-full px-3 py-2.5 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <LogOut className="w-5 h-5 mr-3" />
            <span className="font-medium text-sm">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}
