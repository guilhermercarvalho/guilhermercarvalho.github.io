import React, { useState } from 'react';
import { BlogCard } from '../components/Blog/BlogCard';
import { BlogPost } from '../components/Blog/BlogPost';
import { getBlogPosts } from '../utils/markdown';
import type { BlogPost as BlogPostType } from '../types/blog';

export function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPostType | null>(null);
  const posts = getBlogPosts();

  const handlePostClick = (slug: string) => {
    const post = posts.find(p => p.slug === slug);
    if (post) {
      setSelectedPost(post);
    }
  };

  return (
    <div className="py-20 bg-gray-50" id="blog">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Blog</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
              onClick={handlePostClick}
            />
          ))}
        </div>
      </div>
      {selectedPost && (
        <BlogPost
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      )}
    </div>
  );
}
