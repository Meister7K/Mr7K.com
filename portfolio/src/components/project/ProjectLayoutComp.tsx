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
    <div className="relative px-4 bg-background min-h-screen box-border">
      {/* Chevron Icon for toggling the sidebar */}
      <div
       ref={chevronRef}
        className={`sticky left-0 top-1/2 z-20 transform transition-transform duration-300 cursor-pointer w-fit ${
          isSidebarOpen ? 'rotate-180' : ''
        }`}
        onClick={toggleSidebar}
      >
        <ChevronRight />
      </div>
      {/* Sidebar Navigation */}
      <div
      ref={sidebarRef}
        className={`fixed left-0 top-0 transform transition-transform duration-300 h-full w-fit bg-radius rounded-md bg-clip-padding backdrop-filter pl-10 backdrop-blur-sm bg-opacity-20 border border-radius z-10 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } w-1/2 shadow-lg `}
      >
        <nav className="w-full p-4 h-full">
          <ul className="flex w-full h-full flex-col justify-evenly align-middle box-border ">
            {projects.map((project: { id: Key; title: string }) => (
              <li key={project.id} className="text-center h-fit my-2 w-full box-border border p-2 m-2">
                <Link href={`/projects/${project.id}`} className="">
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Main Content Area */}
      <main className={`transition-all duration-300 ${isSidebarOpen ? 'ml-1/2' : ''} flex-1`}>
        {children}
      </main>
    </div>
  );
};

export default ProjectLayout;
