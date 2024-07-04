import { FC } from 'react';
import projects, { Project } from '@/lib/projectData';
import Link from 'next/link';
import Image from 'next/image';

const projectIndex: FC = () => {
    return (
      <div>
        <h1 className="text-2xl font-bold">project Index</h1>
        <ul className="flex w-full h-full flex-col justify-evenly align-middle">
          {projects.map((project: Project) => (
            <li key={project.id} className="text-center h-fit m-2 w-full">
              <Link href={`/projects/${project.id}`} className=" p-2 m-2">
                {project.src && (
                <div className="mt-2 relative rounded-xl"><h3 className=' top-2 left-2 text-xl p-4 drop-shadow-2xl'>{project.title}
                    </h3>
                  <Image src={project.src} alt={project.title} width={2000} height={500} className='rounded-xl'/>
                  
                    <p className='absolute bottom-2 right-2 p-4 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-stone-500 border border-radius rounded-xl drop-shadow-md'>{project.description}</p>
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