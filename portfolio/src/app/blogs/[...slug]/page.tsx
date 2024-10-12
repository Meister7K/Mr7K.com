// @ts-nocheck
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getBlogById } from '@/lib/blogData';
import {format} from 'date-fns'

interface BlogPostProps {
  params: {
    slug: string[];
  };
}

const BlogPost =  ({ params }: BlogPostProps) => {
  const blogId =  Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const blog = getBlogById(blogId);

  // If no blog post is found, show a 404 message
  if (!blog) {
    notFound();
  }

  return (
    <div className='w-full box-border min-h-screen bg-background mb-20'>
      <div className='max-w-screen-xl mx-auto mt-20'>
        <div className='relative'>
        <h1 className="text-2xl font-bold m-2 absolute top-4 left-4">{blog.title}</h1>
      {blog.src ? <Image className='rounded-sm' alt="blog image" src={blog.src} width={1300} height={500} /> : null}
      </div>
      
      <p className="mt-4 whitespace-pre-wrap">{blog.content}</p>
      <span className='date p-2 text-sm text-muted-foreground'> Written on: {format(new Date(blog.createdAt),"MMM dd, yyy")}</span>
      </div>
    
    </div>
  );
};

export default BlogPost;
