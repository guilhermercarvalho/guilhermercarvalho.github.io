import React from 'react';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  onClick: (slug: string) => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <div
      className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(post.slug)}
    >
      <img
        src={post.coverImage}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </p>
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-blue-500">
          Read More <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </div>
  );
}
