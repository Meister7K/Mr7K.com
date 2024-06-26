import { FC } from 'react';
import blogs, { Blog } from '@/lib/blogData';
import Link from 'next/link';
import Image from 'next/image';

const BlogIndex: FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Blog Index</h1>
      <p className="mt-4">Select a blog post from the menu.</p>
      <ul className="flex w-full h-full flex-col justify-evenly align-middle">
        {blogs.map((blog: Blog) => (
          <li key={blog.id} className="text-center h-fit m-2 w-full">
            <Link href={`/blog/${blog.id}`} className=" p-2 m-2">
              {blog.src && (
              <div className="mt-2 relative rounded-xl"><h3 className=' top-2 left-2 text-xl p-4 drop-shadow-2xl'>{blog.title}
                  </h3>
                <Image src={blog.src} alt={blog.title} width={2000} height={500} className='rounded-xl'/>
                
                  <p className='absolute bottom-2 right-2 p-4 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-stone-500 border border-radius rounded-xl drop-shadow-md'>{blog.description}</p>
              </div>
            )}
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
