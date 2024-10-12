// @ts-nocheck
"use client"
import { FC, useState, useEffect } from 'react';
import projects, { Project } from '@/lib/projectData';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion"

const ProjectIndex: FC = () => {
    const [projectList, setProjectList] = useState<Project[]>([]);

    useEffect(() => {
        // Reverse the projects list only on the client to avoid SSR/CSR mismatch
        setProjectList([...projects].reverse());
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
      <div className='mt-9 mb-20 bg-background box-border min-h-screen'>
        <h1 className="text-3xl font-bold text-center">Project Index</h1>
        <motion.ul 
          className="flex mx-auto max-w-screen-xl box-border h-full flex-col justify-between align-"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projectList.map((project: Project) => (
          <motion.li 
          key={project.id} 
          className="text-center my-4 w-full box-border hyphens-auto" 
         
          variants={itemVariants}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.3, yoyo: Infinity }
          }}
        >
          <Link href={`/projects/${project.id}`} className=" block h-full w-full box-border">
            {project.src && (
              <div className="m-4 relative rounded-xl h-auto max-h-[60dvh] overflow-hidden">
                <h3 className=' top-2 left-2 text-2xl p-4 drop-shadow-2xl box-border'>{project.title}</h3>
                <Image 
                  src={project.src} 
                  alt={project.title} 
                  width={1300} 
                  height={400} 
                  className='relative rounded-sm max-h-full object-cover w-full max-w-full box-border blur-sm hover:blur-none transition-all duration-300' 
                />
                <p className='md:absolute bottom-2 right-2 p-4 backdrop-filter backdrop-blur-sm bg-opacity-50 bg-stone-500 border border-radius rounded-sm drop-shadow-md'>
                  {project.description}
                </p>
              </div>
            )}
          </Link>
        </motion.li>
        
          ))}
        </motion.ul>
      </div>
    );
};

export default ProjectIndex;
