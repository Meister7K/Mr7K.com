import { ReactNode } from 'react';
import ProjectLayout from '@/components/project/ProjectLayoutComp';

interface ProjectLayoutWrapperProps {
  children: ReactNode;
}

const ProjectLayoutWrapper = ({ children }: ProjectLayoutWrapperProps) => {
  return <ProjectLayout>{children}</ProjectLayout>;
};

export default ProjectLayoutWrapper;