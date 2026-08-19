// Common TypeScript interfaces for Rank Force

export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  icon: string;
  features: string[];
  price?: string;
  featured?: boolean;
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  author: string;
  tags: string[];
  category: string;
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
  publishedAt?: string;
  readingTime?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  clientName: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  coverImage?: string;
  tags: string[];
  published: boolean;
  featured: boolean;
  createdAt: string;
}

export interface Testimonial {
  _id: string;
  clientName: string;
  clientTitle: string;
  clientCompany: string;
  clientAvatar?: string;
  rating: number;
  review: string;
  service?: string;
  featured: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
