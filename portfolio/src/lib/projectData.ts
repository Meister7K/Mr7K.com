export interface Project {
    id: string | number;
    title: string;
    src: string | null;
    description: string;
    content: string;
    link: string;
    
}

const projects: Project[] = [
    { 
        id: 1, 
        title: "project 1", 
        description: "The first project.", 
        src: "/clouds-2.jpg", 
        content: "this is the first project I wrote. cool right?",
        link: "https://meister7k.github.io/ProPortfolio1/",
       },
    { id: 2, 
        title: "project 2", 
        description: "The second project.", 
        src: "/clouds-2.jpg", 
        content: "this is the second project I wrote. cool right?",
        link: "https://meister7k.github.io/ThreeJSTSPractice/",
      
     }
];

export default projects;

export const getProjectById = (id: string | number) => {
    return projects.find((project) => project.id.toString() === id.toString()) || null;
};
