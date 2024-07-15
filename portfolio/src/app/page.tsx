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
  title: "Hero Image",
  description: "Hero Image Desc.",
  alt: "hero image",
  href: "/projects",
  width: 2000,
  height: 500
};


const latestBlog = getLatestBlog();

const latestProject = getLatestProject();


export default function Home() {
  return (
    
      <main className=" flex flex-col items-center justify-between w-full lg:px-8 box-border min-h-screen bg-background lg:mb-20">
        <section className="title  flex flex-col justify-evenly align-middle relative w-full h-screen">
          <h1 className=" z-20 absolute top-5/6 w-full lg:text-9xl text-6xl text-center select-none pointer-events-none">Welcome</h1>
      
          <Icon className="h-screen" />
        </section>
        <section className="Hero-section min-h-screen flex flex-col justify-between">
          <HeroSection {...heroData} />
          <div className="secondary-section flex lg:flex-row flex-col m-2 justify-evenly box-border gap-2">
            {/* !Secondary component list */}
            <SecondarySection
              src={latestBlog.src}
              title={latestBlog.title}
              description={latestBlog.description}
              alt={latestBlog.alt}
              href={latestBlog.href}
              width={2000}
              height={500}
            />
            <SecondarySection
              src={latestProject.src}
              title={latestProject.title}
              description={latestProject.description}
              alt={latestProject.alt}
              href={latestProject.href}
              width={2000}
              height={500} />

          </div>
        </section>


      </main>
  );
}
