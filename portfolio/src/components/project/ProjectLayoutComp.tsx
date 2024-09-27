"use client";

import { FC, ReactNode, Key,  useState, useEffect, useRef  } from 'react';
import Link from 'next/link';
import projects from '@/lib/projectData';
import { ChevronRight } from 'lucide-react';

interface ProjectLayoutProps {
  children: ReactNode;
}

const ProjectLayout: FC<ProjectLayoutProps> = ({ children }) => {

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
    <div className=" bg-background min-h-screen h-full box-border">
      {/* Chevron Icon for toggling the sidebar */}<main className={`relative top-0 left-0 w-full p-6 box-border transition-all duration-300 ${isSidebarOpen ? 'ml-1/2' : ''} flex-1`}>
        {children}
      </main>
      
      {/* Sidebar Navigation */}
      <div className='absolute h-full top-0 left-0 w-0 box-border'>
        <div className='relative h-full w-0'>
        <div
       ref={chevronRef}
        className={`sticky left-0 top-1/2 z-20 transform transition-transform duration-300 cursor-pointer w-fit ${
          isSidebarOpen ? 'rotate-180' : ''
        }`}
        onClick={toggleSidebar}
      >
        <ChevronRight />
      </div>
      <div
      ref={sidebarRef}
        className={`sticky left-0 top-0 transform transition-transform duration-300 h-screen w-screen max-w-screen-md rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-card/10 box-border border border-radius z-10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-1/2 shadow-lg `}
      >
        <nav className=" w-full h-full box-border">
          <ul className="flex w-full h-full flex-col justify-evenly align-middle box-border max-w-screen-md">
            {projects.map((project: { id: Key; title: string }) => (
              <li key={project.id} className="text-center h-fit box-border my-2 w-full max-w-96 mx-auto">
                <Link href={`/projects/${project.id}`} className="block p-2 hover:bg-background/50 transition-all duration-500 border">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      </div>
      </div>
      {/* Main Content Area */}
      
    </div>
  );
};

export default ProjectLayout;
