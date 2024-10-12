// @ts-nocheck
'use client'
import { ArrowBigRight, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from 'react';
import PokeRain from "@/components/pokecomp/PokemonRain";


const AboutPage = () => {


  const [pokemonGifs, setPokemonGifs] = useState<string[]>([]);

  useEffect(() => {
    async function fetchPokemonGifs() {
      const response = await fetch('/api/pokeapi');
      const data = await response.json();
      setPokemonGifs(data.gifUrls);
    }

    fetchPokemonGifs();
  }, []);

  return (<div className="mb-20 bg-background min-h-screen text-center pt-20 ">
    {/* <PokeRain /> */}
    <div className="max-w-screen-xl mx-auto bg-transparent relative z-20">
      <h1 className="text-4xl mb-10">A Wild Developer Appeared!</h1>


      <div>
        {/* image with gameboy theme */}
        <Image className="mx-auto rounded-full w-96" alt="me" src="/IMG_0959.JPG" width={1300} height={1000} />
      </div>

      <p className="backdrop-blur-md rounded-md m-5" > I&apos;m Karl, a full stack web developer currently working remotely in Denver, CO. 7K is my shorthand tag created by combining the first letter of my name and the last letter of my favorite number. <span title="it&apos;s 17">Can you guess what it is?</span></p>
      {/* mention football sports and teamwork */}
      <p className="backdrop-blur-md rounded-md m-5">A skilled Full Stack Web Developer with a background in Project Management, I create impactful software solutions from start to finish. I am dedicated to learning and updating my skills to stay current with industry trends. Known for my attention to detail and ability to solve complex problems, I take pride in writing clean, efficient code. I foster cross-functional collaborations to achieve business goals, and my transition into web development combines my managerial expertise with coding skills to drive progress toward a more efficient, inclusive, and sustainable future.</p>
      {/* rolling tech list with links to docs for each */}

      {/* github data api */}

      {/* graph for some sort of data */}

      {/* hobbies */}
      {/* {pokemonGifs.map((gif, index) => (
          <div key={index} className={`absolute top-0 transition-all translate-y-3/4 duration-1000 p-10 flex items-center bg-ring/20  rounded-full`} ><img className="w-full h-auto" src={gif} alt={`Pokemon ${index + 1}`}  /></div>
        ))} */}


    </div>


  </div>)
}

export default AboutPage