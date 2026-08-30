'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { 
  getAdminLeads, 
  getAdminLeadStats, 
  updateAdminLeadStatus, 
  deleteAdminLead 
} from '@/lib/apiClient';
import { 
  Search, Filter, ChevronLeft, ChevronRight, Eye, Trash2, 
  Mail, Phone, Globe, X, AlertCircle, RefreshCw, Users 
} from 'lucide-react';
import { format } from 'date-fns';

export default function ContactLeadsPage() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [leads, setLeads] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  
  // Pagination
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  // Filters & Search
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [status, setStatus] = useState('All');
  const [service, setService] = useState('All');
  const [dateRange, setDateRange] = useState('All Time');

  // UI State
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  // Drawer / Modal State
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<string | null>(null);

  // ── Debounce Search ────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1); // Reset to page 1 on new search
    }, 500);
    return () => clearTimeout(handler);
  }, [search]);

  // ── Fetch Data ─────────────────────────────────────────────────────────────
  const fetchStats = async () => {
    try {
      const res = await getAdminLeadStats();
      if (res.success) setStats(res.data);
    } catch (err) {
      console.error('Failed to fetch stats:', err);
    }
  };

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const params = {
        page,
        limit,
        search: debouncedSearch,
        status: status !== 'All' ? status : undefined,
        service: service !== 'All' ? service : undefined,
        dateRange: dateRange !== 'All Time' ? dateRange : undefined,
      };
      const res = await getAdminLeads(params);
      if (res.success) {
        setLeads(res.data);
        setTotal(res.pagination.total);
        setTotalPages(res.pagination.totalPages);
      } else {
        setError('Failed to load leads.');
      }
    } catch (err: any) {
      setError('Unable to load leads. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedSearch, status, service, dateRange]);

  useEffect(() => {
    fetchStats();
    fetchLeads();
  }, [fetchLeads]);

  // ── Handlers ───────────────────────────────────────────────────────────────
  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await updateAdminLeadStatus(id, newStatus);
      if (res.success) {
        showToast('Lead status updated successfully.', 'success');
        
        // Update local state instead of full refetch for better UX
        setLeads(prev => prev.map(lead => lead._id === id ? { ...lead, status: newStatus } : lead));
        
        if (selectedLead && selectedLead._id === id) {
          setSelectedLead({ ...selectedLead, status: newStatus });
        }
        
        // Background stats refresh
        fetchStats();
      }
    } catch (err) {
      showToast('Failed to update status.', 'error');
    }
  };

  const handleDeleteConfirm = async () => {
    if (!leadToDelete) return;
    try {
      const res = await deleteAdminLead(leadToDelete);
      if (res.success) {
        showToast('Lead deleted successfully.', 'success');
        setIsDeleteModalOpen(false);
        setLeadToDelete(null);
        setIsDrawerOpen(false); // Close drawer if it was open for this lead
        
        // If we deleted the last item on the page and we're not on page 1, go back a page
        if (leads.length === 1 && page > 1) {
          setPage(p => p - 1);
        } else {
          fetchLeads();
        }
        fetchStats();
      }
    } catch (err) {
      showToast('Failed to delete lead.', 'error');
      setIsDeleteModalOpen(false);
    }
  };

  const clearFilters = () => {
    setSearch('');
    setStatus('All');
    setService('All');
    setDateRange('All Time');
    setPage(1);
  };

  const getStatusColor = (statusText: string) => {
    switch (statusText) {
      case 'New': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Contacted': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'In Progress': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Converted': return 'bg-green-100 text-green-800 border-green-200';
      case 'Closed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="space-y-6 relative">
      {/* Toast Notification */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in-down">
          <div className={`px-4 py-3 rounded-lg shadow-lg border flex items-center gap-3 ${
            toast.type === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'
          }`}>
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium text-sm">{toast.message}</span>
          </div>
        </div>
      )}

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Contact Leads</h1>
        <p className="text-gray-500 text-sm mt-1">Manage and track all enquiries submitted through your website.</p>
      </div>

      {/* Top Stat Cards */}
      {stats && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <div className="text-sm font-medium text-gray-500">Total Leads</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stats.totalLeads}</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 border-l-4 border-l-blue-500">
            <div className="text-sm font-medium text-gray-500">New Leads</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stats.newLeads}</span>
              {stats.leadsToday > 0 && <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">+{stats.leadsToday} today</span>}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 border-l-4 border-l-purple-500">
            <div className="text-sm font-medium text-gray-500">In Progress</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stats.inProgressLeads + stats.contactedLeads}</span>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 border-l-4 border-l-green-500">
            <div className="text-sm font-medium text-gray-500">Converted</div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">{stats.convertedLeads}</span>
            </div>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div className="relative w-full lg:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-[#FF6A00] focus:border-[#FF6A00] outline-none transition-colors"
            placeholder="Search name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        
        <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={status}
              onChange={(e) => { setStatus(e.target.value); setPage(1); }}
              className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer"
            >
              <option value="All">All Status</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Converted">Converted</option>
              <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
            <select
              value={service}
              onChange={(e) => { setService(e.target.value); setPage(1); }}
              className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer w-32"
            >
              <option value="All">All Services</option>
              <option value="SEO Services">SEO Services</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Web Development">Web Development</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-gray-50">
            <select
              value={dateRange}
              onChange={(e) => { setDateRange(e.target.value); setPage(1); }}
              className="bg-transparent text-sm font-medium text-gray-700 outline-none cursor-pointer"
            >
              <option value="All Time">All Time</option>
              <option value="Today">Today</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
          </div>

          {(search || status !== 'All' || service !== 'All' || dateRange !== 'All Time') && (
            <button
              onClick={clearFilters}
              className="text-sm font-medium text-[#FF6A00] hover:text-[#E65F00] px-2"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden relative min-h-[400px]">
        {error ? (
          <div className="flex flex-col items-center justify-center py-20">
            <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900">{error}</h3>
            <button onClick={fetchLeads} className="mt-4 flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg transition-colors text-sm font-medium">
              <RefreshCw className="w-4 h-4" /> Retry
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-gray-500 whitespace-nowrap">
                <thead className="bg-gray-50 text-xs text-gray-700 uppercase border-b border-gray-100">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Lead</th>
                    <th className="px-6 py-4 font-semibold">Phone</th>
                    <th className="px-6 py-4 font-semibold">Service</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold">Date</th>
                    <th className="px-6 py-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    Array.from({ length: 5 }).map((_, i) => (
                      <tr key={i} className="border-b border-gray-50 animate-pulse">
                        <td className="px-6 py-4">
                          <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                          <div className="h-3 bg-gray-100 rounded w-40"></div>
                        </td>
                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                        <td className="px-6 py-4">
                          <div className="h-4 bg-gray-200 rounded w-28 mb-2"></div>
                          <div className="h-3 bg-gray-100 rounded w-20"></div>
                        </td>
                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-20"></div></td>
                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                        <td className="px-6 py-4"><div className="h-8 bg-gray-200 rounded w-16 ml-auto"></div></td>
                      </tr>
                    ))
                  ) : leads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-6 py-20 text-center">
                        <Users className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No contact leads yet</h3>
                        <p className="text-gray-500 mt-1">New enquiries submitted through your website will appear here.</p>
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead._id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{lead.fullName || lead.name}</div>
                          <div className="text-gray-500 mt-0.5">{lead.workEmail || lead.email}</div>
                        </td>
                        <td className="px-6 py-4">{lead.phone || '-'}</td>
                        <td className="px-6 py-4">
                          <div className="text-gray-900">{lead.serviceCategory || 'Other'}</div>
                          <div className="text-gray-500 text-xs mt-0.5 truncate max-w-[150px]">{lead.service || '-'}</div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead._id, e.target.value)}
                            className={`text-xs font-medium px-2.5 py-1 rounded-full border outline-none cursor-pointer appearance-none ${getStatusColor(lead.status)}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Converted">Converted</option>
                            <option value="Closed">Closed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          {format(new Date(lead.createdAt), 'dd MMM yyyy')}
                        </td>
                        <td className="px-6 py-4 text-right space-x-2">
                          <button
                            onClick={() => { setSelectedLead(lead); setIsDrawerOpen(true); }}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-[#FF6A00] hover:bg-orange-50 transition-colors"
                            title="View Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => { setLeadToDelete(lead._id); setIsDeleteModalOpen(true); }}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {!isLoading && leads.length > 0 && (
              <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium text-gray-900">{(page - 1) * limit + 1}</span> to{' '}
                  <span className="font-medium text-gray-900">{Math.min(page * limit, total)}</span> of{' '}
                  <span className="font-medium text-gray-900">{total}</span> leads
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setPage(p => Math.max(1, p - 1))}
                    disabled={page === 1}
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <div className="px-4 text-sm font-medium text-gray-700">
                    {page} / {totalPages}
                  </div>
                  <button
                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                    disabled={page === totalPages || totalPages === 0}
                    className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-900/50 z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Delete Lead</h3>
            <p className="text-gray-500 text-sm mb-6">
              Are you sure you want to delete this lead? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => { setIsDeleteModalOpen(false); setLeadToDelete(null); }}
                className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-xl transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteConfirm}
                className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Details Drawer */}
      {isDrawerOpen && selectedLead && (
        <>
          <div className="fixed inset-0 bg-gray-900/30 z-[50]" onClick={() => setIsDrawerOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[50] w-full max-w-md bg-white shadow-2xl flex flex-col animate-slide-left">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Lead Details</h2>
              <button onClick={() => setIsDrawerOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Header Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{selectedLead.fullName || selectedLead.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getStatusColor(selectedLead.status)}`}>
                    {selectedLead.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    • {format(new Date(selectedLead.createdAt), 'MMM dd, yyyy h:mm a')}
                  </span>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-4 border border-gray-100">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase">Email</div>
                    <a href={`mailto:${selectedLead.workEmail || selectedLead.email}`} className="text-sm text-[#FF6A00] hover:underline">
                      {selectedLead.workEmail || selectedLead.email}
                    </a>
                  </div>
                </div>
                
                {selectedLead.phone && (
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase">Phone</div>
                      <a href={`tel:${selectedLead.phone}`} className="text-sm text-[#FF6A00] hover:underline">
                        {selectedLead.phone}
                      </a>
                    </div>
                  </div>
                )}
                
                {selectedLead.websiteUrl && (
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-xs font-medium text-gray-500 uppercase">Website</div>
                      <a href={selectedLead.websiteUrl.startsWith('http') ? selectedLead.websiteUrl : `https://${selectedLead.websiteUrl}`} target="_blank" rel="noopener noreferrer" className="text-sm text-[#FF6A00] hover:underline">
                        {selectedLead.websiteUrl}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Service Info */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Service Interest</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase">Category</div>
                    <div className="text-sm text-gray-900 mt-1">{selectedLead.serviceCategory || 'Other'}</div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500 uppercase">Specific Service</div>
                    <div className="text-sm text-gray-900 mt-1">{selectedLead.service || '-'}</div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Message</h4>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
                    {selectedLead.message || 'No message provided.'}
                  </p>
                </div>
              </div>

            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-3">
              <div className="flex-1">
                <select
                  value={selectedLead.status}
                  onChange={(e) => handleStatusChange(selectedLead._id, e.target.value)}
                  className="w-full bg-white border border-gray-200 text-gray-700 text-sm font-medium px-3 py-2.5 rounded-xl outline-none focus:ring-1 focus:ring-[#FF6A00]"
                >
                  <option value="New">Mark as New</option>
                  <option value="Contacted">Mark as Contacted</option>
                  <option value="In Progress">Mark as In Progress</option>
                  <option value="Converted">Mark as Converted</option>
                  <option value="Closed">Mark as Closed</option>
                </select>
              </div>
              <button
                onClick={() => { setLeadToDelete(selectedLead._id); setIsDeleteModalOpen(true); }}
                className="px-4 py-2.5 bg-white border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium rounded-xl transition-colors flex items-center justify-center"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  );
}
