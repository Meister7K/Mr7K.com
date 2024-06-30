import HeroSection from "@/components/homepage/HeroSection";
import SecondarySection from "@/components/homepage/SecondarySection";
import Loading from "@/components/loading/Loading";
import { getLatestBlog } from "@/lib/blogData";
import { getLatestProject } from "@/lib/projectData";


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
    <main className="flex flex-col items-center h-full justify-between w-full p-8 box-border">
      <section className="title flex flex-col justify-evenly align-middle">
        <h1>Welcome</h1>
        {/* <Icon/> */}
      </section>
      <section className="Hero-section">
        <HeroSection {...heroData} />

      </section>
      <section className="secondary-section flex lg:flex-row flex-col m-2 justify-evenly box-border gap-2">
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
        <SecondarySection src={latestProject.src} 
          title={latestProject.title} 
          description={latestProject.description} 
          alt={latestProject.alt} 
          href={latestProject.href} 
          width={2000} 
          height={500}  />

      </section>

    </main>
  );
}
