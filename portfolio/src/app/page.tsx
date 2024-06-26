import HeroSection from "@/components/homepage/HeroSection";
import SecondarySection from "@/components/homepage/SecondarySection";
import Loading from "@/components/loading/Loading";


const heroData = {
  src: "/clouds-2.jpg", 
  title: "Hero Image",
  description: "Hero Image Desc.",
  alt: "hero image",
  href: "/projects",
  width: 2000,
  height:500
};

const blogData={
  src: "/clouds-2.jpg", 
  title: "Blog 1",
  description: "Blog Desc.",
  alt: "hero image",
  href: "/blogs",
  width: 2000,
  height:500
}

const projectData={
  src: "/clouds-2.jpg", 
  title: "Project 1",
  description: "Hero Image Desc.",
  alt: "Project Desc.",
  href: "/projects",
  width: 2000,
  height:500
}


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full p-8 ">
      <section className="title min-h-screen flex flex-col justify-evenly align-middle">
        <h1>Welcome</h1>
        {/* <Icon/> */}
      </section>
      <section className="Hero-section">
        <HeroSection {...heroData}/>

      </section>
      <section className="secondary-section flex lg:flex-row flex-col m-2 justify-evenly box-border gap-2">
        {/* !Secondary component list */}
        <SecondarySection {...blogData}/>
        <SecondarySection {...projectData}/>

      </section>

    </main>
  );
}
