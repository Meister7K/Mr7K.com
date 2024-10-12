// @ts-nocheck
import { ReactNode } from 'react';
import BlogLayout from '@/components/blog/BlogLayout';

interface BlogLayoutWrapperProps {
  children: ReactNode;
}

const BlogLayoutWrapper = ({ children }: BlogLayoutWrapperProps) => {
  return <BlogLayout>{children}</BlogLayout>;
};

export default BlogLayoutWrapper;
