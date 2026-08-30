import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
  withCredentials: true,
});

// Request interceptor — attach auth token if present
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('rwd_token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor — normalize errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message || error.message || 'Something went wrong';
    return Promise.reject(new Error(message));
  }
);

export default apiClient;

// ── Typed API helpers ──────────────────────────────────────────────────────────

export const healthCheck = () =>
  apiClient.get<{ status: string; timestamp: string; uptime: number }>('/health');

export interface ContactFormData {
  fullName: string;
  workEmail: string;
  phone?: string;
  service?: string;
  serviceCategory?: string;
  websiteUrl?: string;
  message: string;
}

// --- PUBLIC API ---

export const submitContactForm = async (data: ContactFormData) => {
  const response = await apiClient.post<{ success: boolean; message: string; leadId?: string }>('/leads', data);
  return response.data;
};

export const getPublicBlogs = async (params: any = {}) => {
  const response = await apiClient.get('/blogs', { params });
  return response.data;
};

export const getPublicBlogBySlug = async (slug: string) => {
  const response = await apiClient.get(`/blogs/${slug}`);
  return response.data;
};

export const getPublicServiceBlogs = async (serviceSlug: string, params: any = {}) => {
  const response = await apiClient.get(`/blogs/service/${serviceSlug}`, { params });
  return response.data;
};

export const getPublicRelatedBlogs = async (slug: string, params: any = {}) => {
  const response = await apiClient.get(`/blogs/related/${slug}`, { params });
  return response.data;
};

// --- ADMIN API ---

export const loginAdmin = async (credentials: any) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const verifyOtp = async (data: { email: string; otp: string }) => {
  const response = await apiClient.post('/auth/verify-otp', data);
  return response.data;
};

export const resendOtp = async (data: { email: string }) => {
  const response = await apiClient.post('/auth/resend-otp', data);
  return response.data;
};

export const logoutAdmin = async () => {
  const response = await apiClient.post('/auth/logout');
  return response.data;
};

export const getAdminProfile = async () => {
  const response = await apiClient.get('/auth/me');
  return response.data;
};

export const getDashboardStats = async () => {
  const response = await apiClient.get('/admin/dashboard/stats');
  return response.data;
};

export const getLeadChart = async () => {
  const response = await apiClient.get('/admin/dashboard/leads-chart');
  return response.data;
};

export const getLeadStatus = async () => {
  const response = await apiClient.get('/admin/dashboard/lead-status');
  return response.data;
};

export const getServiceDemand = async () => {
  const response = await apiClient.get('/admin/dashboard/service-demand');
  return response.data;
};

export const getBlogStats = async () => {
  const response = await apiClient.get('/admin/dashboard/blog-stats');
  return response.data;
};

export const getRecentLeads = async () => {
  const response = await apiClient.get('/admin/dashboard/recent-leads');
  return response.data;
};

// --- CONTACT LEADS MANAGEMENT API ---

export const getAdminLeads = async (params: any = {}) => {
  const response = await apiClient.get('/admin/leads', { params });
  return response.data;
};

export const getAdminLeadStats = async () => {
  const response = await apiClient.get('/admin/leads/stats');
  return response.data;
};

export const updateAdminLeadStatus = async (id: string, status: string) => {
  const response = await apiClient.patch(`/admin/leads/${id}/status`, { status });
  return response.data;
};

export const deleteAdminLead = async (id: string) => {
  const response = await apiClient.delete(`/admin/leads/${id}`);
  return response.data;
};

// --- ADMIN BLOG CMS API ---

export const getAdminBlogs = async (params: any = {}) => {
  const response = await apiClient.get('/admin/blogs', { params });
  return response.data;
};

export const getAdminBlogById = async (id: string) => {
  const response = await apiClient.get(`/admin/blogs/${id}`);
  return response.data;
};

export const createAdminBlog = async (formData: FormData) => {
  const response = await apiClient.post('/admin/blogs', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateAdminBlog = async (id: string, formData: FormData) => {
  const response = await apiClient.put(`/admin/blogs/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteAdminBlog = async (id: string) => {
  const response = await apiClient.delete(`/admin/blogs/${id}`);
  return response.data;
};

export const updateAdminBlogStatus = async (id: string, status: string) => {
  const response = await apiClient.patch(`/admin/blogs/${id}/status`, { status });
  return response.data;
};