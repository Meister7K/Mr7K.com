"use client"
import HeroSection from "@/components/homepage/HeroSection";
import Icon from "@/components/homepage/HomepageIcon";
import SecondarySection from "@/components/homepage/SecondarySection";
import Loading from "@/components/loading/Loading";
import { getLatestBlog } from "@/lib/blogData";
import { getLatestProject } from "@/lib/projectData";
import { motion } from "framer-motion";



const heroData = {
  src: "/clouds-2.jpg",
  title: "About 7K",
  description: "Hero Image Desc.",
  alt: "hero image",
  href: "/about",
  width: 2000,
  height: 500
};


const latestBlog = getLatestBlog();

const latestProject = getLatestProject();


export default function Home() {


const title={
  hidden: { opacity: 0, y:+100 },
  show: {
    opacity: 1,
    y:0,
    transition: {
      ease:"linear",
      duration:1,
      delay: .5
    }
  }
}

  return (
    
      <main className=" flex flex-col items-center justify-between w-full box-border min-h-screen bg-background lg:mb-20 relative">
        <section className=" title flex flex-col justify-evenly align-middle  w-full h-screen sticky top-0 left-0" >
          
      
          <Icon className="h-screen w-screen" />
        </section>
        <motion.h1 
        variants={title}
        initial="hidden"
        animate="show"
        className="absolute top-1/4 z-10 w-full lg:text-8xl text-6xl text-center select-none pointer-events-none">Welcome Stranger</motion.h1>
        <section id="next" className="Hero-section mx-auto max-w-screen-xl min-h-screen flex flex-col px-4 lg:px-8 justify-evenly bg-transparent backdrop-blur-sm ">
          <div>
            <h2 className="text-center text-xl lg:text-4xl my-2 ">Learn more about me</h2>
          <HeroSection {...heroData} />
          </div>
          <h2 
          
          className="text-center lg:text-4xl text-xl">Explore my current work</h2>
          <div>
             
          <div className="secondary-section flex lg:flex-row flex-col m-2 justify-center box-border gap-2">
            {/* !Secondary component list */}
            <div className="w-full">
              <h3 className="text-center" >Blogs</h3>
            <SecondarySection
              src={latestBlog.src}
              title={latestBlog.title}
              description={latestBlog.description}
              alt={latestBlog.alt}
              href={latestBlog.href}
              width={1300}
              height={500}
            />
            </div>
            <div className="w-full">
              <h3 className="text-center">Projects</h3>
            <SecondarySection
              src={latestProject.src}
              title={latestProject.title}
              description={latestProject.description}
              alt={latestProject.alt}
              href={latestProject.href}
              width={1300}
              height={500} />
            </div>
          </div>
         
            

          </div>
        </section>


      </main>
  );
}
