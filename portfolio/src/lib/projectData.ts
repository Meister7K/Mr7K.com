export interface Project {
    id: string | number;
    title: string;
    src: string | null;
    description: string;
    content: string;
    link: string;
    github: string;
}

const projects: Project[] = [
    { 
        id: 1, 
        title: "React Portfolio 1.0", 
        description: "My first rendition of my portfolio.", 
        src: "/clouds-2.jpg", 
        content: "This Project was made using React, Three js, SCSS, and Typescript. I learned the basics of react components, hooks, and state management. I also learned about 3D rendering, animations, and physics with Three js.",
        link: "https://meister7k.github.io/ProPortfolio1/",
        github: "https://github.com/Meister7K/ProPortfolio1"
       },
    { id: 2, 
        title: "Solar System", 
        description: "Using Three js to recreate a simple 3D solar system. ", 
        src: "/clouds-2.jpg", 
        content: "Learning mesh rendering, camera positioning, and animations with Three js.",
        link: "https://meister7k.github.io/ThreeJSTSPractice/",
    github: "https://github.com/Meister7K/ThreeJSTSPractice"
     }, 
     { id: 3, 
        title: "mobile pokedex", 
        description: "Using Three js to recreate a simple 3D solar system. ", 
        src: "/clouds-2.jpg", 
        content: "Learning mesh rendering, camera positioning, and animations with Three js.",
        link: "https://meister7k.github.io/ThreeJSTSPractice/",
    github: "https://github.com/Meister7K/ThreeJSTSPractice"
     }
];

export default projects;

export const getProjectById = (id: string | number) => {
    return projects.find((project) => project.id.toString() === id.toString()) || null;
};
