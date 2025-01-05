import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-react',
    title: 'Getting Started with React',
    date: '2024-03-15',
    excerpt: 'Learn the basics of React and start building modern web applications',
    content: `
# Getting Started with React

React is a popular JavaScript library for building user interfaces. In this post, we'll cover the basics of React and how to get started with your first application.

## Why React?

React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

## Key Concepts

1. Components
2. Props
3. State
4. Hooks

Stay tuned for more in-depth tutorials!`,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800'
  },
  {
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques',
    date: '2024-03-14',
    excerpt: 'Explore modern CSS features and best practices for web development',
    content: `
# Modern CSS Techniques

CSS has evolved significantly over the years. Let's explore some modern techniques that can enhance your web development workflow.

## CSS Grid

CSS Grid is a powerful layout system that makes complex layouts easier to achieve.

## CSS Custom Properties

Variables in CSS? Yes, please! Custom properties make our styles more maintainable.

## Modern Selectors

New selectors like :has() and :is() give us more power and flexibility.

More updates coming soon!`,
    coverImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800'
  }
];
