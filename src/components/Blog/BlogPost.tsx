import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';
import { X } from 'lucide-react';
import { ImageModal } from '../ImageModal';
import type { BlogPost as BlogPostType } from '../../types/blog';

interface BlogPostProps {
  post: BlogPostType;
  onClose: () => void;
}

export function BlogPost({ post, onClose }: BlogPostProps) {
  const [showImageModal, setShowImageModal] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 flex items-center justify-center">
        <div className="bg-white rounded-lg w-full max-w-3xl my-8">
          <div className="p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-500">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <img 
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6 cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => setShowImageModal(true)}
            />
            <div className="prose max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      {showImageModal && (
        <ImageModal
          src={post.coverImage}
          alt={post.title}
          onClose={() => setShowImageModal(false)}
        />
      )}
    </div>
  );
}