import { blogPosts } from '../data/blog-posts';
import { BlogPost } from '../types/blog';

export function getBlogPosts(): BlogPost[] {
  return blogPosts;
}