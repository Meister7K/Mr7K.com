import { FC } from 'react';
import blogs from '@/lib/blogData';
import BlogLayout from './layout';

const BlogIndex: FC = () => {
  return (
   
      <div>
        <h1 className="text-2xl font-bold">Blog Index</h1>
        <p className="mt-4">Select a blog post from the menu.</p>
      </div>
   
  );
};

export default BlogIndex;
