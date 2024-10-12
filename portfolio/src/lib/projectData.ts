export interface Project {
    id: string | number;
    title: string;
    src: string;
    alt: string;
    description: string;
    content: string;
    link: string;
    github: string;
    href: string | object;

}

const projects: Project[] = [
    { 
        id: 1, 
        title: "React Portfolio 1.0", 
        description: "The first rendition of my portfolio.", 
        src: "/port-1.png", 
        alt:"alt tag",
        content: "This Project was made using React, Three js, SCSS, and Typescript. I learned the basics of react components, hooks, and state management. I also learned about 3D rendering, animations, and physics with Three js.",
        link: "https://meister7k.github.io/ProPortfolio1/",
        github: "https://github.com/Meister7K/ProPortfolio1",
        href: "projects/1",
        

       },
    { id: 2, 
        title: "Solar System", 
        description: "Using Three js to recreate a simple 3D solar system. ", 
        src: "/solar.png", 
        alt:"alt tag",
        content: "Learning mesh rendering, camera positioning, and animations with Three js.",
        link: "https://meister7k.github.io/ThreeJSTSPractice/",
    github: "https://github.com/Meister7K/ThreeJSTSPractice",
        href: "projects/2",
        
     }, 
     { id: 3, 
        title: "Pokedex", 
        description: "Creating a pokedex using the Poke API", 
        src: "/pokedex.png", 
        alt:"alt tag",
        content: "The goal was to practice requesting and rendering data from an API call by creating a pokedex app using the Poke API. Comes in handy for shiny hunting and finding base stat data and moves. ",
        link: "https://meister7k.github.io/super-lamp/#/projects/pokedex",
    github: "https://github.com/Meister7K/super-lamp",
        href: "projects/3",
        
     },  { id: 4, 
        title: "Sleeper Fantasy Football App", 
        description: "An app using the Sleeper API for fantasy football data.", 
        src: "/fpl.png", 
        alt:"alt tag",
        content: "It started as a simple app to record the history of my Fantasy Football League, But after learning about the features of the Sleeper API, it evolved into an history and league content site that anyone with a sleeper league can use. Please feel free to share with your friends if you have a league.",
        link: "https://fpl-uhv2.vercel.app/",
    github: "https://github.com/Meister7K/super-lamp",
        href: "projects/4",
        
     }
];

export default projects;

export const getProjectById = (id: string | number) => {
    return projects.find((project) => project.id.toString() === id.toString()) || null;
};

export const getLatestProject = () => {
    return projects[projects.length - 1];
  };