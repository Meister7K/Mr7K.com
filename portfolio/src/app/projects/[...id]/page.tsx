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
    <div className='w-full box-border p-4'>
      <div className='relative'>
        <h1 className="text-2xl font-bold m-2 absolute top-4 left-4">{project.title}</h1>
      {project.src ? <Image alt="project image" src={project.src} width={2000} height={400} /> : null}
      </div>
      
      <p className="mt-4">{project.content}</p>
      <Link href={project.link}>Link</Link>

    </div>
  );
};

export default projectPost;
