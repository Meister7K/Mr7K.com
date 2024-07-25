import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projectData';
// import {format} from 'date-fns'
import Link from 'next/link';

interface projectPostProps {
  params: {
    id: string[];
  };
}

const projectPost =  ({ params }: projectPostProps) => {
  const projectId =  Array.isArray(params.id) ? params.id[0] : params.id;
  const project = getProjectById(projectId);

  // If no project post is found, show a 404 message
  if (!project) {
    notFound();
  }

  return (
    <div className='w-full box-border min-h-screen mt-9 bg-background mb-20'>
      <div className='max-w-screen-xl mx-auto mt-20'>
        <div className='relative'>
        <h1 className="text-2xl font-bold m-2 absolute top-4 left-4">{project.title}</h1>
      {project.src ? <Image className='rounded-sm' alt={project.alt} src={project.src} width={1300} height={500} /> : null}
      </div>
      
      <p className="my-4">{project.content}</p>
      <Link className='p-2 m-2 transition-colors duration-200 rounded-sm bg-secondary hover:bg-destructive' href={project.link}>Link</Link>
      <Link className='p-2 m-2 transition-colors duration-200 rounded-sm bg-secondary hover:bg-destructive' href={project.github}>Repo</Link>
      </div>
      

    </div>
  );
};

export default projectPost;
