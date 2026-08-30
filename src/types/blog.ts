export interface IBlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML or Markdown content
  category: string;
  image: string; // Cloudinary URL or local path
  imageAlt: string;
  author: {
    name: string;
    avatar?: string;
  };
  publishedAt: string; // ISO date string
  readingTime: number; // in minutes
  featured: boolean;
  tags?: string[];
}
