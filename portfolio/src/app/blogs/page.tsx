import { FC } from 'react';
import blogs, { Blog } from '@/lib/blogData';
import Link from 'next/link';
import Image from 'next/image';

const BlogIndex: FC = () => {
  return (
    <div className='mt-9 lg:mb-20 bg-background box-border px-4 min-h-screen mb-20'>
      <h1 className="text-2xl font-bold text-center">Blog Index</h1>
       
      <ul className="flex w-full h-full flex-col justify-evenly align-middle box-border">
        {blogs.map((blog: Blog) => (
          <li key={blog.id} className="text-center h-fit my-2 w-full box-border">
            <Link href={`/blogs/${blog.id}`} className="">
              {blog.src && (
              <div className="mt-2 relative rounded-xl"><h3 className=' top-2 left-2 text-xl p-4 drop-shadow-2xl'>{blog.title}
                  </h3>
                <Image src={blog.src} alt={blog.title} width={2000} height={500} className='rounded-xl'/>
                
                  <p className='lg:absolute bottom-2 right-2 p-4 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-stone-500 border border-radius rounded-xl drop-shadow-md'>{blog.description}</p>
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
