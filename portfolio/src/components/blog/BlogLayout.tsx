"use client";

import { FC, ReactNode, Key,  useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import blogs from '@/lib/blogData';
import { ChevronRight } from 'lucide-react';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout: FC<BlogLayoutProps> = ({ children }) => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const chevronRef = useRef<HTMLDivElement>(null);

  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    console.log(`Sidebar is now ${isSidebarOpen ? 'closed' : 'open'}`);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node) &&
      chevronRef.current &&
      !chevronRef.current.contains(event.target as Node)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ">
      {/* Chevron Icon for toggling the sidebar */}
      <div
       ref={chevronRef}
        className={`sticky z-20 top-1/2 left-0 transform transition-transform duration-300 cursor-pointer w-fit ${
          isSidebarOpen ? 'rotate-180' : ''
        }`}
        onClick={toggleSidebar}
      >
        <ChevronRight />
      </div>
      {/* Sidebar Navigation */}
      <div
      ref={sidebarRef}
        className={`fixed left-0 top-0 transform transition-transform duration-300 h-full w-1/2 bg-radius rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-radius z-10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-1/2 shadow-lg `}
      >
        <nav className="w-full p-4 h-full">
          <ul className="flex w-full h-full flex-col justify-evenly align-middle">
            {blogs.map((blog: { id: Key; title: string }) => (
              <li key={blog.id} className="text-center h-fit m-2 w-full">
                <Link href={`/blogs/${blog.id}`} className="border p-2 m-2">
                  {blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main Content Area */}
      <main className={`mt-9 transition-all duration-300 ${isSidebarOpen ? 'ml-1/2' : ''} flex-1 p-4`}>
        {children}
      </main>
    </div>
  );
};

export default BlogLayout;
