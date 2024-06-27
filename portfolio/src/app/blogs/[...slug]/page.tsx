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
    <div className='w-full box-border p-4'>
      <div className='relative'>
        <h1 className="text-2xl font-bold m-2 absolute top-4 left-4">{blog.title}</h1>
      {blog.src ? <Image alt="blog image" src={blog.src} width={2000} height={400} /> : null}
      </div>
      
      <p className="mt-4">{blog.content}</p>
      <span className='date p-2 text-sm text-muted-foreground'> Written on: {format(new Date(blog.createdAt),"MMM dd, yyy")}</span>

    </div>
  );
};

export default BlogPost;
