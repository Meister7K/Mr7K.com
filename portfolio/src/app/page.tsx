import HeroSection from "@/components/homepage/HeroSection";
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
      <section className="secondary-section">
        {/* !Secondary component list */}

      </section>

    </main>
  );
}
