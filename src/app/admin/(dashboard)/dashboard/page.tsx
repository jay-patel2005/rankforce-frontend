'use client';

import React, { useEffect, useState } from 'react';
import { 
  Users, 
  FileText, 
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { 
  getDashboardStats, 
  getLeadChart, 
  getLeadStatus, 
  getServiceDemand, 
  getBlogStats, 
  getRecentLeads 
} from '@/lib/apiClient';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

// Colors for charts
const COLORS = ['#FF6A00', '#3B82F6', '#10B981', '#F59E0B', '#8B5CF6', '#EF4444'];

export default function DashboardPage() {
  const { user } = useAuth();
  
  const [stats, setStats] = useState<any>(null);
  const [leadsChartData, setLeadsChartData] = useState([]);
  const [statusData, setStatusData] = useState([]);
  const [demandData, setDemandData] = useState([]);
  const [blogData, setBlogData] = useState([]);
  const [recentLeads, setRecentLeads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          statsRes, 
          leadsRes, 
          statusRes, 
          demandRes, 
          blogRes, 
          recentRes
        ] = await Promise.all([
          getDashboardStats(),
          getLeadChart(),
          getLeadStatus(),
          getServiceDemand(),
          getBlogStats(),
          getRecentLeads()
        ]);

        if (statsRes.success) setStats(statsRes.data);
        if (leadsRes.success) setLeadsChartData(leadsRes.data);
        if (statusRes.success) setStatusData(statusRes.data);
        if (demandRes.success) setDemandData(demandRes.data);
        if (blogRes.success) setBlogData(blogRes.data);
        if (recentRes.success) setRecentLeads(recentRes.data);
        
      } catch (error) {
        console.error('Failed to load dashboard data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px]">
        <div className="w-8 h-8 border-4 border-[#FF6A00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back, {user?.name}. Here's what's happening today.</p>
        </div>
        <div className="hidden sm:block text-sm text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-sm">
          {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Contact Leads" value={stats?.totalLeads || 0} icon={Users} color="bg-orange-50 text-[#FF6A00]" />
        <StatCard title="New Leads" value={stats?.newLeads || 0} icon={CheckCircle2} color="bg-green-50 text-green-600" />
        <StatCard title="Total Blogs" value={stats?.totalBlogs || 0} icon={FileText} color="bg-blue-50 text-blue-600" />
        <StatCard title="Published Blogs" value={stats?.publishedBlogs || 0} icon={TrendingUp} color="bg-purple-50 text-purple-600" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads Chart */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Contact Leads (Last 30 Days)</h3>
          <div className="h-[300px]">
            {leadsChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={leadsChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF6A00" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#FF6A00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="date" tick={{fontSize: 12, fill: '#6B7280'}} tickMargin={10} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 12, fill: '#6B7280'}} axisLine={false} tickLine={false} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                  />
                  <Area type="monotone" dataKey="leads" stroke="#FF6A00" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState message="No lead data available yet." />
            )}
          </div>
        </div>

        {/* Lead Status Distribution */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Lead Status Distribution</h3>
          <div className="h-[300px] flex items-center justify-center">
            {statusData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState message="No leads to display." />
            )}
          </div>
        </div>

        {/* Blog Overview */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Blog Publishing Overview</h3>
          <div className="h-[300px]">
            {blogData.some((d: any) => d.value > 0) ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={blogData}
                    innerRadius={80}
                    outerRadius={110}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {blogData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[(index + 1) % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="middle" align="right" layout="vertical" iconType="circle" />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState message="No blog data available." />
            )}
          </div>
        </div>

        {/* Service Demand */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-base font-bold text-gray-900 mb-4">Service Demand</h3>
          <div className="h-[300px]">
            {demandData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={demandData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" tick={{fontSize: 12, fill: '#6B7280'}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 12, fill: '#6B7280'}} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{fill: '#F3F4F6'}} />
                  <Bar dataKey="value" fill="#FF6A00" radius={[4, 4, 0, 0]}>
                    {demandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <EmptyState message="No service data available." />
            )}
          </div>
        </div>
      </div>

      {/* Recent Leads Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-900">Recent Leads</h3>
          <Link href="/admin/leads" className="text-sm font-semibold text-[#FF6A00] hover:text-[#E65F00]">
            View All Leads
          </Link>
        </div>
        
        {recentLeads.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500">
                <tr>
                  <th className="px-6 py-3 font-medium">Name</th>
                  <th className="px-6 py-3 font-medium">Email</th>
                  <th className="px-6 py-3 font-medium">Service</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Date</th>
                  <th className="px-6 py-3 font-medium text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {recentLeads.map((lead: any) => (
                  <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{lead.fullName || lead.name || 'N/A'}</td>
                    <td className="px-6 py-4 text-gray-500">{lead.workEmail || lead.email || 'N/A'}</td>
                    <td className="px-6 py-4 text-gray-500">{lead.serviceCategory || lead.service || 'Other'}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(lead.status)}`}>
                        {lead.status || 'New'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(lead.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-400 hover:text-[#FF6A00] transition-colors">
                        <Eye className="w-4 h-4 inline" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-8">
            <EmptyState message="No recent leads found." />
          </div>
        )}
      </div>
    </div>
  );
}

// Helpers

const StatCard = ({ title, value, icon: Icon, color }: { title: string, value: string | number, icon: any, color: string }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-start justify-between">
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
    </div>
    <div className={`p-3 rounded-lg ${color}`}>
      <Icon className="w-5 h-5" />
    </div>
  </div>
);

const EmptyState = ({ message }: { message: string }) => (
  <div className="flex flex-col items-center justify-center h-full text-gray-400">
    <AlertCircle className="w-8 h-8 mb-2 opacity-20" />
    <p className="text-sm font-medium">{message}</p>
  </div>
);

const getStatusColor = (status: string) => {
  switch (status) {
    case 'New': return 'bg-orange-100 text-[#FF6A00]';
    case 'Contacted': return 'bg-blue-100 text-blue-700';
    case 'In Progress': return 'bg-yellow-100 text-yellow-700';
    case 'Converted': return 'bg-green-100 text-green-700';
    case 'Closed': return 'bg-gray-100 text-gray-700';
    default: return 'bg-gray-100 text-gray-700';
  }
};

const Eye = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);
