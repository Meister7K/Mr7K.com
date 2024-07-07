import { FC } from 'react';
import projects, { Project } from '@/lib/projectData';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll } from "framer-motion"

const projectIndex: FC = () => {
    return (
      <div className='mt-9 mb-20 bg-background box-border min-h-screen'>
        <h1 className="text-2xl font-bold text-center">project Index</h1>
        <ul className="flex box-border h-full flex-col justify-between align-">
          {projects.map((project: Project) => (
            <li key={project.id} className="text-center h-fit my-2 w-full box-border">
              <Link href={`/projects/${project.id}`} className=" ">
                {project.src && (
                <div className="mt-2 relative rounded-xl"><h3 className=' top-2 left-2 text-xl p-4 drop-shadow-2xl box-border'>{project.title}
                    </h3>
                  <Image src={project.src} alt={project.title} width={2000} height={500} className='rounded-xl w-full box-border'/>
                  
                    <p className='lg:absolute bottom-2 right-2 p-4 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-stone-500 border border-radius rounded-xl drop-shadow-md'>{project.description}</p>
                </div>
              )}
              </Link>
              
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default projectIndex;